import {
  deleteDoc,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebaseConfig"; // Firestore 초기화된 db를 import합니다.
import CommentComponent from "./CommentContainer";
import "./PostDetail.scss";
import StyledModal from "./StyledModal";

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

  const incrementPostLikes = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        // 추천수 증가
        await updateDoc(postRef, {
          likes: increment(1),
        });
        console.log("추천수 증가 성공");
        // 최신 데이터로 업데이트
        const updatedPostSnap = await getDoc(postRef);
        setPost(updatedPostSnap.data());
      } else {
        console.log("게시물이 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("추천수 증가 실패: ", error);
    }
  };

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
              </div>

              <div className="post-detail__content__body">{post.content}</div>

              <div className="post-detail__content__footer">
                <button
                  className="post-detail__button post-detail__button--like"
                  onClick={() => incrementPostLikes(postId)}
                >
                  추천하기
                </button>
                <div className="post-detail__content__footer__user-info">
                  <img src="" alt="" />
                  <a href="#" className="post-detail__button--like">
                    작성자의 게시글 더보기
                  </a>
                </div>
                <div>
                  <p>좋아요 {post.likes}</p>
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
