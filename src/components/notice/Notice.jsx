// src/Notice.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Firestore 초기화된 db를 import합니다.
import { useStore } from "../../store/store";
import "./Notice.scss";

function Notice() {
  const navigate = useNavigate();
  const { isLoggedIn } = useStore((state) => state); // 로그인 상태 가져오기
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); // 페이지당 게시물 수
  const [filteredPosts, setFilteredPosts] = useState([]); // 검색 결과 필터링된 게시물

  useEffect(() => {
    // Firestore에서 게시물 가져오기
    async function fetchPosts() {
      try {
        const querySnapshot = await getDocs(collection(db, "posts")); // "posts" 컬렉션에서 데이터 가져오기
        const posts = querySnapshot.docs.map((doc) => ({
          postId: doc.id,
          ...doc.data(),
        }));
        console.log("게시물 가져오기 성공: ", posts);
        setFilteredPosts(posts);
      } catch (error) {
        console.error("게시물 가져오기 실패: ", error);
      }
    }

    fetchPosts();
  }, []);

  const handleRowClick = (postId) => {
    navigate(`/notice/post/${postId}`);
  };

  // 페이지네이션 관련 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 검색 기능
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  return (
    <div className="notice-inner">
      <article className="notice__wrapper">
        <h2>게시판</h2>
        <div className="notice__header">
          <button className="notice__header__btn best-post">전체글</button>
          <button className="notice__header__btn best-post">추천글</button>
          <button className="notice__header__btn best-post">공지</button>
        </div>

        <table className="notice__table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
              <th>좋아요</th>
            </tr>
          </thead>

          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.postId} onClick={() => handleRowClick(post.postId)}>
                <td>{post.postNumber}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
                <td>{post.views}</td>
                <td>{post.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="notice__footer">
          <Link
            to={isLoggedIn ? "/notice/write" : "#"}
            className={`notice__footer__btn ${!isLoggedIn ? "disabled" : ""}`}
            onClick={(e) => {
              if (!isLoggedIn) e.preventDefault(); // 비로그인 상태일 때 링크 클릭 방지
            }}
          >
            글쓰기
          </Link>
        </div>

        <div className="notice__pagination">
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
        </div>

        <div className="notice__search">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={handleSearch}
          />
          <button>검색</button>
        </div>
      </article>
    </div>
  );
}

export default Notice;
