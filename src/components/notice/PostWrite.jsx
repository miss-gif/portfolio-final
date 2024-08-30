// src/PostWrite.js
import styled from "@emotion/styled";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import "./PostWrite.scss";

Modal.setAppElement("#root");

const PostWrite = ({ postIdRef }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(""); // 현재 로그인된 사용자 이름
  const navigate = useNavigate();

  // 현재 로그인된 사용자 정보를 가져오는 useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthor(user.displayName || user.email || "익명");
      } else {
        setAuthor("익명");
      }
    });

    return () => unsubscribe();
  }, []);

  const incrementPostNumber = async () => {
    const counterDoc = doc(db, "counters", "postCounter");
    const counterSnap = await getDoc(counterDoc);

    let postNumber;

    if (counterSnap.exists()) {
      postNumber = counterSnap.data().count;
      await updateDoc(counterDoc, {
        count: increment(1),
      });
    } else {
      postNumber = 1;
      await setDoc(counterDoc, { count: 2 });
    }

    return postNumber;
  };

  const handleSubmit = async () => {
    const postNumber = await incrementPostNumber();

    const newPost = {
      postNumber, // 새로 생성한 번호 추가
      title,
      content,
      author,
      date: new Date().toLocaleDateString(),
      views: 0,
      likes: 0,
    };

    try {
      const docRef = await addDoc(collection(db, "posts"), newPost);
      console.log("게시물 작성 완료, ID:", docRef.id);
      postIdRef.current = docRef.id;
      setShowModal(true);
    } catch (error) {
      console.error("게시물 작성 실패: ", error);
    }
  };

  const handleCloseModal = (destination) => {
    setShowModal(false);
    navigate(destination);
  };

  return (
    <div className="inner">
      <div className="post-add">
        <div className="post-add__top">
          <h2>글쓰기</h2>
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
          <button onClick={handleSubmit}>등록</button>
        </div>
      </div>
      <StyledModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="게시글 작성 완료"
      >
        <h3>게시글 작성 완료</h3>
        <p>어디로 이동하시겠습니까?</p>
        <div>
          <button onClick={() => handleCloseModal("/notice")}>
            게시판 목록
          </button>
          <button
            onClick={() =>
              handleCloseModal(`/notice/post/${postIdRef.current}`)
            }
          >
            게시글 상세
          </button>
        </div>
      </StyledModal>
    </div>
  );
};

export default PostWrite;

const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 40px 20px;
  border: 1px solid #ccc;
  background: #333;
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
