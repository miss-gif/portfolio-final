// src/BoardPage.js
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";

const BoardPage = () => {
  const { isLoggedIn, rUserData } = useStore();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      async function fetchPosts() {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsData);
      }

      fetchPosts();
    }
  }, [isLoggedIn, navigate]);

  const handleAddPost = async () => {
    if (newPost.trim()) {
      await addDoc(collection(db, "posts"), {
        content: newPost,
        timestamp: new Date(),
      });
      setNewPost("");
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    }
  };

  const handleDeletePost = async (postId) => {
    await deleteDoc(doc(db, "posts", postId));
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(postsData);
  };

  return (
    <div>
      <h1>게시판</h1>
      <div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="새 게시글 작성"
        />
        <button onClick={handleAddPost}>게시</button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
