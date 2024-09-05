import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import useDebounce from "../../hooks/useDebounce";
import { useStore } from "../../store/store";
import AsideHotPost from "./AsideHotPost";
import "./Notice.scss";

function Notice() {
  const navigate = useNavigate();
  const { isLoggedIn } = useStore((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "postNumber",
    direction: "desc",
  });

  // 컴포넌트 초기화 시 호출
  useEffect(() => {
    fetchPosts();
  }, []);

  // 게시물 가져오기
  const fetchPosts = async () => {
    try {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("postNumber", "desc"));
      const querySnapshot = await getDocs(q);

      const posts = querySnapshot.docs.map((doc) => ({
        postId: doc.id,
        ...doc.data(),
      }));

      setAllPosts(posts);
      setFilteredPosts(posts);
    } catch (error) {
      console.error("게시물 가져오기 실패: ", error);
    }
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedPosts = [...filteredPosts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredPosts(sortedPosts);
  };

  const getTotalPostsCount = async () => {
    const countDoc = doc(db, "counters", "postCount");
    const countSnap = await getDoc(countDoc);
    return countSnap.exists() ? countSnap.data().count : 0;
  };

  useEffect(() => {
    // 페이지네이션 로직 추가 필요
  }, [currentPage, filteredPosts]);

  const handleRowClick = (postId) => {
    navigate(`/notice/post/${postId}`);
  };

  // 페이지네이션 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filtered = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(debouncedSearchTerm) ||
          post.author.toLowerCase().includes(debouncedSearchTerm)
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(allPosts);
    }
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  }, [debouncedSearchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredPosts(allPosts);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="notice-inner">
      <div className="notice__container">
        <article className="notice__wrapper">
          <h2>게시판</h2>
          <div className="notice__header">
            <button className="notice__header__btn all-post">전체</button>
            <button className="notice__header__btn best-post">공지</button>
            <button className="notice__header__btn free-post">자유</button>
            <button className="notice__header__btn question-post">질문</button>
          </div>

          <table className="notice__table">
            <thead>
              <tr>
                <th onClick={() => handleSort("postNumber")}>번호</th>
                <th onClick={() => handleSort("title")}>제목</th>
                <th onClick={() => handleSort("author")}>작성자</th>
                <th onClick={() => handleSort("date")}>작성일</th>
                <th onClick={() => handleSort("views")}>조회수</th>
                <th onClick={() => handleSort("likes")}>추천수</th>
              </tr>
            </thead>

            <tbody>
              {currentPosts.map((post) => (
                <tr
                  key={post.postId}
                  className="hover:bg-gray-800 cursor-pointer"
                  onClick={() => handleRowClick(post.postId)}
                >
                  <td>{post.postNumber}</td>
                  <td className="max-w-xs truncate">{post.title}</td>
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
        <AsideHotPost />
      </div>
    </div>
  );
}

export default Notice;
