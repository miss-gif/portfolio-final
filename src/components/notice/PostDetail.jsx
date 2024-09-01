import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../../firebaseConfig";
import CommentComponent from "./CommentComponent"; // 수정된 CommentComponent 불러오기
import "./PostDetail.scss";
import StyledModal from "./StyledModal";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const incrementPostViews = async () => {
    try {
      const postRef = doc(db, "posts", postId);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
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

  const incrementPostLikes = async () => {
    try {
      const postRef = doc(db, "posts", postId);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        await updateDoc(postRef, {
          likes: increment(1),
        });
        console.log("추천수 증가 성공");
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
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("postNumber", "desc"));
        const querySnapshot = await getDocs(q);

        const posts = querySnapshot.docs.map((doc) => ({
          postId: doc.id,
          ...doc.data(),
        }));

        console.log("게시물 가져오기 성공: ", posts);
        setAllPosts(posts);
      } catch (error) {
        console.error("게시물 가져오기 실패: ", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data());
          incrementPostViews();
        } else {
          toast.error("게시물을 찾을 수 없습니다.");
          navigate("/notice");
        }
      } catch (error) {
        console.error("게시물 로딩 실패: ", error);
        toast.error("게시물 로딩 실패");
        navigate("/notice");
      }
    };

    fetchPost();
  }, [postId, navigate]);

  const handleDelete = async () => {
    try {
      const docRef = doc(db, "posts", postId);
      await deleteDoc(docRef);
      navigate("/notice");
    } catch (error) {
      console.error("게시물 삭제 실패: ", error);
      toast.error("게시물 삭제 실패");
    }
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigateToPost = (direction) => {
    const sortedPosts = [...allPosts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    const currentIndex = sortedPosts.findIndex(
      (post) => post.postId === postId
    );
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < sortedPosts.length) {
      const newPostId = sortedPosts[newIndex].postId;
      navigate(`/notice/post/${newPostId}`);
    } else {
      toast.error("이전글 또는 다음글이 없습니다.");
    }
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
              onClick={() => handleNavigateToPost(1)}
            >
              이전글
            </button>
            <button
              className="post-detail__button"
              onClick={() => handleNavigateToPost(-1)}
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
                  onClick={incrementPostLikes}
                >
                  추천하기
                </button>
                <div className="post-detail__content__footer__user-info">
                  <img src="" alt="" />
                  <a href="#" className="post-detail__button--like">
                    작성자의 게시글 더보기
                  </a>
                </div>
                <div className="flex gap-2">
                  <p>좋아요 {post.likes}</p>
                  <p>댓글수</p>
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
          <CommentComponent postId={postId} />
          {/* CommentComponent에 postId 전달 */}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
