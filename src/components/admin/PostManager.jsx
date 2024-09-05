// src/BoardPage.js
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dummy } from "../../api/dummy"; // dummy 데이터를 가져옵니다.
import { db } from "../../firebaseConfig";
import { toast } from "react-toastify";

const PostManager = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

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

  const handleDeleteAllPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const batch = writeBatch(db);

      querySnapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      fetchPosts();
      toast.success("전체 게시물 삭제 성공");
    } catch (error) {
      toast.error("전체 게시물 삭제 실패");
    }
  };

  const handleAddDummyPosts = async () => {
    try {
      const batch = writeBatch(db);
      dummy.forEach((item) => {
        const postData = {
          author: item.author,
          content: item.content,
          date: item.date,
          likes: item.likes,
          postNumber: item.postId, // Firestore에서는 postNumber로 대체
          title: item.title,
          views: item.views,
        };
        // 문서 참조 생성
        const postRef = doc(collection(db, "posts"));
        batch.set(postRef, postData);
      });
      await batch.commit();
      fetchPosts();
      toast.success("더미 게시물 추가 성공");
    } catch (error) {
      toast.error("더미 게시물 추가 실패");
    }
  };

  return (
    <div>
      <h2>게시물 관리</h2>
      <div className="flex gap-2">
        <button
          className="p-2 bg-green-800 text-white rounded"
          onClick={handleDeleteAllPosts}
        >
          전체 삭제
        </button>
        <button
          className="p-2 bg-green-800 text-white rounded"
          onClick={handleAddDummyPosts}
        >
          더미 게시물 추가
        </button>
      </div>
    </div>
  );
};

export default PostManager;
