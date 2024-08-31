import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";

const CommentComponent = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replyInputVisible, setReplyInputVisible] = useState({});
  const [replyContent, setReplyContent] = useState("");

  // 댓글 데이터 로드
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const q = query(collection(db, "posts", postId, "comments"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const commentsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setComments(commentsList);
        });
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching comments: ", error);
      }
    };

    fetchComments();
  }, [postId]);

  // 댓글 추가
  const handleSubmit = async () => {
    if (comment.trim() !== "") {
      try {
        await addDoc(collection(db, "posts", postId, "comments"), {
          content: comment,
          date: new Date().toISOString(),
          replies: [],
        });
        setComment("");
      } catch (error) {
        console.error("Failed to add comment: ", error);
        toast.error("댓글 추가 실패");
      }
    }
  };

  // 댓글 삭제
  const handleDelete = async (commentId) => {
    try {
      await deleteDoc(doc(db, "posts", postId, "comments", commentId));
    } catch (error) {
      console.error("Failed to delete comment: ", error);
      toast.error("댓글 삭제 실패");
    }
  };

  // 답글 입력창 표시
  const handleReplyToggle = (commentId) => {
    setReplyInputVisible({
      ...replyInputVisible,
      [commentId]: !replyInputVisible[commentId],
    });
    setReplyContent("");
  };

  // 답글 내용 변경
  const handleReplyChange = (e) => {
    setReplyContent(e.target.value);
  };

  // 답글 추가
  const handleReplySubmit = async (commentId) => {
    if (replyContent.trim() !== "") {
      try {
        const commentRef = doc(db, "posts", postId, "comments", commentId);
        const commentSnap = await getDoc(commentRef);

        if (commentSnap.exists()) {
          const replies = commentSnap.data().replies || [];
          replies.push({
            content: replyContent,
            date: new Date().toISOString(),
          });

          await updateDoc(commentRef, { replies });
          setReplyInputVisible({ ...replyInputVisible, [commentId]: false });
          setReplyContent("");
        }
      } catch (error) {
        console.error("Failed to add reply: ", error);
        toast.error("답글 추가 실패");
      }
    }
  };

  return (
    <CommentContainer>
      <label htmlFor="comment">댓글</label>
      <CommentInput
        type="text"
        value={comment}
        id="comment"
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력하세요"
      />
      <button onClick={handleSubmit}>등록</button>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            {comment.content}
            <DeleteButton onClick={() => handleDelete(comment.id)}>
              삭제
            </DeleteButton>
            <button onClick={() => handleReplyToggle(comment.id)}>답글</button>
            {replyInputVisible[comment.id] && (
              <div>
                <textarea
                  value={replyContent}
                  onChange={handleReplyChange}
                  placeholder="답글을 입력하세요"
                />
                <button onClick={() => handleReplySubmit(comment.id)}>
                  답글 등록
                </button>
              </div>
            )}
            {comment.replies && comment.replies.length > 0 && (
              <ReplyList>
                {comment.replies.map((reply, index) => (
                  <ReplyItem key={index}>
                    {reply.content}{" "}
                    <span>{new Date(reply.date).toLocaleString()}</span>
                  </ReplyItem>
                ))}
              </ReplyList>
            )}
          </CommentItem>
        ))}
      </CommentList>
    </CommentContainer>
  );
};

export default CommentComponent;

const CommentContainer = styled.div`
  margin-top: 20px;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;

  button {
    margin-left: 10px;
  }
`;

const ReplyList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
  border-left: 2px solid #ccc;
  padding-left: 10px;
`;

const ReplyItem = styled.li`
  margin-top: 5px;
  padding: 5px;
  border-bottom: 1px solid #ddd;

  span {
    font-size: 0.8em;
    color: #555;
    margin-left: 10px;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;
