// src/PostEdit.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Firestore 초기화된 db를 import합니다.
import "./PostEdit.scss";
import { toast } from "react-toastify";

const PostEdit = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", postId); // Firestore에서 게시글 문서 참조
        const docSnap = await getDoc(docRef); // 게시글 문서 가져오기

        if (docSnap.exists()) {
          const postData = docSnap.data();
          setTitle(postData.title);
          setContent(postData.content);
        } else {
          toast.error("게시물을 찾을 수 없습니다.");
          navigate("/");
        }
      } catch (error) {
        console.error("게시물 로딩 실패: ", error);
        toast.error("게시물 로딩 실패");
        navigate("/");
      }
    };

    fetchPost();
  }, [postId, navigate]);

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "posts", postId); // Firestore에서 게시글 문서 참조
      await updateDoc(docRef, {
        title,
        content,
        date: new Date().toLocaleDateString(), // 수정된 날짜
      });
      navigate(`/notice/post/${postId}`); // 수정 완료 후 상세 페이지로 이동
    } catch (error) {
      console.error("게시물 수정 실패: ", error);
      toast.error("게시물 수정 실패");
    }
  };

  return (
    <div className="inner">
      <div className="post-add">
        <div className="post-add__top">
          <h2>글 수정</h2>
          <button onClick={handleUpdate}>수정</button>

          {/* 구현 보류 */}
          <div className="form-group none">
            <label htmlFor="category">카테고리</label>
            <select id="category" name="category">
              <option value="공지사항">공지사항</option>
              <option value="자유게시판">자유게시판</option>
              <option value="질문답변">질문답변</option>
            </select>
          </div>

          <form className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
            <label htmlFor="content">내용</label>
            <textarea
              value={content}
              name="content"
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
