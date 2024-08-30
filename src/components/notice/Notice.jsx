import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { useStore } from "../../store/store";
import "./Notice.scss";
import useDebounce from "../../hooks/useDebounce";

function Notice() {
  const navigate = useNavigate();
  const { isLoggedIn } = useStore((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [allPosts, setAllPosts] = useState([]); // 모든 게시물
  const [filteredPosts, setFilteredPosts] = useState([]); // 검색 결과 필터링된 게시물
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태

  useEffect(() => {
    async function fetchPosts() {
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
        setFilteredPosts(posts); // 초기 상태는 모든 게시물을 표시
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

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 검색 기능
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.author.toLowerCase().includes(searchTerm) // 작성자 검색 가능
    );

    setFilteredPosts(filtered);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredPosts(allPosts);
  };

  return (
    <div className="notice-inner">
      <article className="notice__wrapper">
        <h2>게시판</h2>
        <div className="notice__header">
          <button className="notice__header__btn best-post">오름차순</button>
          <button className="notice__header__btn best-post">내림차순</button>
          <button className="notice__header__btn best-post">공지</button>
        </div>

        <table className="notice__table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
              <th>추천수</th>
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
              if (!isLoggedIn) e.preventDefault();
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
            value={searchTerm}
            placeholder="제목 또는 작성자를 검색하세요"
            onChange={handleSearch}
          />
          <button onClick={resetSearch}>초기화</button>
        </div>
      </article>
    </div>
  );
}

export default Notice;
