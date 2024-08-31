// src/PostWrite.js
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, runTransaction } from "firebase/firestore";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import "./PostWrite.scss";
import StyledModal from "./StyledModal";

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

    try {
      const postNumber = await runTransaction(db, async (transaction) => {
        const counterSnap = await transaction.get(counterDoc);

        if (counterSnap.exists()) {
          const newCount = counterSnap.data().count + 1;
          transaction.update(counterDoc, { count: newCount });
          return newCount;
        } else {
          transaction.set(counterDoc, { count: 2 });
          return 1;
        }
      });

      return postNumber;
    } catch (error) {
      console.error("트랜잭션 실패: ", error);
      throw error; // 트랜잭션 실패 시 오류를 던져서 게시물 작성이 중단되도록 처리
    }
  };

  const handleSubmit = async () => {
    const postNumber = await incrementPostNumber();

    const newPost = {
      postNumber, // 게시물 번호는 사용자에게 보여지는 용도로만 사용
      title,
      content,
      author,
      date: new Date().toLocaleDateString(),
      views: 0,
      likes: 0,
    };

    try {
      // Firestore에 게시물 저장
      const docRef = await addDoc(collection(db, "posts"), newPost);
      console.log("게시물 작성 완료, ID:", docRef.id);

      // postIdRef에 새로 생성된 게시물의 ID 저장
      postIdRef.current = docRef.id;

      // 모달 창 열기
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
