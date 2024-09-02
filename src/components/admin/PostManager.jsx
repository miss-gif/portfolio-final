// src/BoardPage.js
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
import { useStore } from "../../store/store";
import { useNavigate } from "react-router-dom";

const PostManager = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsData);
    } catch (error) {
      console.error("게시물 가져오기 실패: ", error);
    }
  };

  const handleAddPost = async () => {
    if (newPost.trim()) {
      try {
        await addDoc(collection(db, "posts"), {
          content: newPost,
          timestamp: new Date(),
        });
        setNewPost("");
        fetchPosts();
      } catch (error) {
        console.error("게시물 추가 실패: ", error);
      }
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      fetchPosts();
    } catch (error) {
      console.error("게시물 삭제 실패: ", error);
    }
  };

  const handleDeleteAllPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const batch = writeBatch(db);

      querySnapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      fetchPosts();
    } catch (error) {
      console.error("전체 게시물 삭제 실패: ", error);
    }
  };

  return (
    <div>
      <h2>게시물 관리</h2>
      <div>
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="새 게시물 내용"
        />
        <button onClick={handleAddPost}>추가</button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)}>삭제</button>
          </div>
        ))}
      </div>
      <button onClick={handleDeleteAllPosts}>전체 삭제</button>
    </div>
  );
};

export default PostManager;
