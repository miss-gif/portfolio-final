// src/PostDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import styled from "@emotion/styled";
import {
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Firestore 초기화된 db를 import합니다.
import CommentComponent from "./CommentContainer";
import "./PostDetail.scss";

Modal.setAppElement("#root"); // 모달 앱 엘리먼트 설정

const PostDetail = ({ posts, onDelete }) => {
  if (!posts || !Array.isArray(posts)) {
    return <div>Posts data is not available</div>;
  }

  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incrementPostViews = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        // 조회수 증가
        await updateDoc(postRef, {
          views: increment(1),
        });
        console.log("조회수 증가 성공");
      } else {
        console.log("게시물이 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("조회수 증가 실패: ", error);
    }
  };

  // 예제: 게시물 페이지 로드 시 호출
  useEffect(() => {
    if (postId) {
      incrementPostViews(postId);
    }
  }, [postId]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", postId); // Firestore에서 게시글 문서 참조
        const docSnap = await getDoc(docRef); // 게시글 문서 가져오기

        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          alert("게시물을 찾을 수 없습니다.");
          navigate("/notice");
        }
      } catch (error) {
        console.error("게시물 로딩 실패: ", error);
        alert("게시물 로딩 실패");
        navigate("/notice");
      }
    };

    fetchPost();
  }, [postId, navigate]);

  const handleDelete = async () => {
    try {
      const docRef = doc(db, "posts", postId); // Firestore에서 게시글 문서 참조
      await deleteDoc(docRef); // 게시글 문서 삭제
      navigate("/notice"); // 삭제 후 게시판 목록으로 이동
    } catch (error) {
      console.error("게시물 삭제 실패: ", error);
      alert("게시물 삭제 실패");
    }
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigateToPost = (offset) => {
    navigate(`/notice/post/${parseInt(postId, 10) + offset}`);
  };

  return (
    <div className="notice-inner">
      <div className="post-detail">
        <div className="post-detail__header">
          <div className="post-detail__header__actions-left">
            <button
              className="post-detail__button"
              onClick={() => navigate(`/notice/edit/${postId}`)}
            >
              수정
            </button>
            <button
              className="post-detail__button post-detail__button--delete"
              onClick={handleDeleteClick}
            >
              삭제
            </button>
          </div>

          <div className="post-detail__header__actions-right">
            <button
              className="post-detail__button"
              onClick={() => handleNavigateToPost(-1)}
            >
              이전글
            </button>
            <button
              className="post-detail__button"
              onClick={() => handleNavigateToPost(1)}
            >
              다음글
            </button>
            <button
              className="post-detail__button"
              onClick={() => navigate("/notice")}
            >
              목록
            </button>
          </div>
        </div>
        <div className="post-detail__content">
          {post ? (
            <div>
              <div className="post-detail__content__header">
                <div className="post-detail__content__header__title">
                  {post.title}
                </div>
              </div>

              <div className="post-detail__content__info">
                <div className="post-detail__content__info__user">
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div className="post-detail__content__info__profile">
                    <div className="post-detail__content__info__profile__username">
                      작성자: {post.author}
                    </div>
                    <div className="post-detail__content__info__meta">
                      <div className="post-detail__content__info__meta__time">
                        작성일: {post.date}
                      </div>
                      <div className="post-detail__content__info__meta__views">
                        조회수: {post.views}
                      </div>
                      <div className="post-detail__content__info__meta__likes">
                        좋아요: {post.likes}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-detail__button">댓글</div>
              </div>
              <div className="post-detail__content__body">{post.content}</div>

              <div className="post-detail__content__footer">
                <div className="post-detail__content__footer__user-info">
                  <img src="" alt="" />
                  <a href="#" className="post-detail__button--like">
                    작성자의 게시글 더보기
                  </a>
                </div>
                <div>
                  <p>좋아요 10</p>
                  <p>댓글수 5</p>
                </div>
              </div>
              <StyledModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="삭제 확인"
              >
                <p>정말로 삭제하시겠습니까?</p>
                <div>
                  <button onClick={handleDelete}>삭제</button>
                  <button onClick={handleCloseModal}>취소</button>
                </div>
              </StyledModal>
            </div>
          ) : (
            <p>게시물을 찾을 수 없습니다.</p>
          )}
          <CommentComponent />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 40px 20px;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  p {
    margin: 0;
  }

  button {
    padding: 8px 15px;
    margin-right: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
