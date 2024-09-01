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
} from "firebase/firestore";
import { toast } from "react-toastify";

const CommentComponent = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replyInputVisible, setReplyInputVisible] = useState({});
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const q = collection(db, "posts", postId, "comments");
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const commentsData = [];
          querySnapshot.forEach((doc) => {
            commentsData.push({ id: doc.id, ...doc.data() });
          });
          setComments(commentsData);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("댓글 불러오기 실패: ", error);
      }
    };

    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts", postId, "comments"), {
        content: comment,
        createdAt: new Date(),
      });
      setComment("");
    } catch (error) {
      console.error("댓글 작성 실패: ", error);
      toast.error("댓글 작성에 실패했습니다.");
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      await deleteDoc(doc(db, "posts", postId, "comments", commentId));
    } catch (error) {
      console.error("댓글 삭제 실패: ", error);
      toast.error("댓글 삭제에 실패했습니다.");
    }
  };

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault();

    try {
      const commentRef = doc(db, "posts", postId, "comments", commentId);
      const commentSnap = await getDoc(commentRef);

      if (commentSnap.exists()) {
        const originalComment = commentSnap.data();
        const updatedReplies = [
          ...(originalComment.replies || []),
          { content: replyContent, createdAt: new Date() },
        ];

        await updateDoc(commentRef, {
          replies: updatedReplies,
        });

        setReplyInputVisible((prevState) => ({
          ...prevState,
          [commentId]: false,
        }));
        setReplyContent("");
      }
    } catch (error) {
      console.error("답글 작성 실패: ", error);
      toast.error("답글 작성에 실패했습니다.");
    }
  };

  const toggleReplyInput = (commentId) => {
    setReplyInputVisible((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  return (
    <CommentSection>
      <h3>댓글</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글을 작성해주세요."
          required
        />
        <button type="submit">댓글 작성</button>
      </form>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentContent>{comment.content}</CommentContent>
            <CommentActions>
              <button onClick={() => toggleReplyInput(comment.id)}>답글</button>
              <button onClick={() => handleCommentDelete(comment.id)}>
                삭제
              </button>
            </CommentActions>
            {replyInputVisible[comment.id] && (
              <ReplyForm onSubmit={(e) => handleReplySubmit(e, comment.id)}>
                <input
                  type="text"
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="답글을 작성하세요."
                />
                <button type="submit">답글 작성</button>
              </ReplyForm>
            )}
            {comment.replies && (
              <ReplyList>
                {comment.replies.map((reply, index) => (
                  <ReplyItem key={index}>{reply.content}</ReplyItem>
                ))}
              </ReplyList>
            )}
          </CommentItem>
        ))}
      </CommentList>
    </CommentSection>
  );
};

export default CommentComponent;

const CommentSection = styled.div`
  margin-top: 20px;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const CommentContent = styled.p`
  margin: 0;
`;

const CommentActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ReplyForm = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ReplyList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin-top: 10px;
`;

const ReplyItem = styled.li`
  margin-bottom: 5px;
`;
