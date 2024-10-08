import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { db, auth } from "../../firebaseConfig"; // firebaseConfig에 auth 추가 필요
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const CommentComponent = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [replyInputVisible, setReplyInputVisible] = useState({});
  const [replyContent, setReplyContent] = useState("");
  const [editMode, setEditMode] = useState({});
  const [replyEditMode, setReplyEditMode] = useState({});
  const [author, setAuthor] = useState(""); // 현재 로그인된 사용자 이름

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
        author: author, // 현재 사용자 이름을 작성자로 저장
        createdAt: new Date(),
        replies: [],
      });
      setComment("");
    } catch (error) {
      console.error("댓글 작성 실패: ", error);
      toast.error("댓글 작성에 실패했습니다.");
    }
  };

  const handleCommentDelete = async (commentId) => {
    const commentToDelete = comments.find(
      (comment) => comment.id === commentId
    );
    if (commentToDelete && commentToDelete.author === author) {
      try {
        await deleteDoc(doc(db, "posts", postId, "comments", commentId));
      } catch (error) {
        console.error("댓글 삭제 실패: ", error);
        toast.error("댓글 삭제에 실패했습니다.");
      }
    } else {
      toast.error("삭제 권한이 없습니다.");
    }
  };

  const handleCommentEdit = (commentId, updatedContent) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit && commentToEdit.author === author) {
      try {
        const commentRef = doc(db, "posts", postId, "comments", commentId);
        updateDoc(commentRef, {
          content: updatedContent,
          updatedAt: new Date(),
        });
        setEditMode((prev) => ({ ...prev, [commentId]: false }));
      } catch (error) {
        console.error("댓글 수정 실패: ", error);
        toast.error("댓글 수정에 실패했습니다.");
      }
    } else {
      toast.error("수정 권한이 없습니다.");
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
          {
            content: replyContent,
            author: author,
            createdAt: new Date(),
          },
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

  const handleReplyDelete = async (commentId, replyIndex) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (
      commentToEdit &&
      commentToEdit.replies[replyIndex] &&
      commentToEdit.replies[replyIndex].author === author
    ) {
      try {
        const commentRef = doc(db, "posts", postId, "comments", commentId);
        const commentSnap = await getDoc(commentRef);

        if (commentSnap.exists()) {
          const originalComment = commentSnap.data();
          const updatedReplies = originalComment.replies.filter(
            (_, index) => index !== replyIndex
          );

          await updateDoc(commentRef, {
            replies: updatedReplies,
          });
        }
      } catch (error) {
        console.error("답글 삭제 실패: ", error);
        toast.error("답글 삭제에 실패했습니다.");
      }
    } else {
      toast.error("삭제 권한이 없습니다.");
    }
  };

  const handleReplyEdit = async (commentId, replyIndex, updatedContent) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (
      commentToEdit &&
      commentToEdit.replies[replyIndex] &&
      commentToEdit.replies[replyIndex].author === author
    ) {
      try {
        const commentRef = doc(db, "posts", postId, "comments", commentId);
        const commentSnap = await getDoc(commentRef);

        if (commentSnap.exists()) {
          const originalComment = commentSnap.data();
          const updatedReplies = originalComment.replies.map((reply, index) =>
            index === replyIndex
              ? { ...reply, content: updatedContent, updatedAt: new Date() }
              : reply
          );

          await updateDoc(commentRef, {
            replies: updatedReplies,
          });

          setReplyEditMode((prevState) => ({
            ...prevState,
            [`${commentId}-${replyIndex}`]: false,
          }));
        }
      } catch (error) {
        console.error("답글 수정 실패: ", error);
        toast.error("답글 수정에 실패했습니다.");
      }
    } else {
      toast.error("수정 권한이 없습니다.");
    }
  };

  const toggleReplyInput = (commentId) => {
    setReplyInputVisible((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const toggleEditMode = (commentId) => {
    setEditMode((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const toggleReplyEditMode = (commentId, replyIndex) => {
    setReplyEditMode((prevState) => ({
      ...prevState,
      [`${commentId}-${replyIndex}`]: !prevState[`${commentId}-${replyIndex}`],
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
            <CommentHeader>
              <CommentAuthor>{comment.author}</CommentAuthor>
              <CommentDate>
                {new Date(comment.createdAt.seconds * 1000).toLocaleString()}
              </CommentDate>
            </CommentHeader>
            {editMode[comment.id] ? (
              <EditCommentForm
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommentEdit(comment.id, comment.content);
                }}
              >
                <textarea
                  value={comment.content}
                  onChange={(e) =>
                    setComments((prevComments) =>
                      prevComments.map((c) =>
                        c.id === comment.id
                          ? { ...c, content: e.target.value }
                          : c
                      )
                    )
                  }
                />
                <button type="submit">수정 완료</button>
                <button
                  type="button"
                  onClick={() => toggleEditMode(comment.id)}
                >
                  취소
                </button>
              </EditCommentForm>
            ) : (
              <CommentContent>{comment.content}</CommentContent>
            )}
            {comment.author === author && (
              <CommentActions>
                <button onClick={() => toggleEditMode(comment.id)}>수정</button>
                <button onClick={() => handleCommentDelete(comment.id)}>
                  삭제
                </button>
              </CommentActions>
            )}
            <ReplySection>
              <ReplyToggle onClick={() => toggleReplyInput(comment.id)}>
                답글
              </ReplyToggle>
              {replyInputVisible[comment.id] && (
                <ReplyForm onSubmit={(e) => handleReplySubmit(e, comment.id)}>
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="답글을 작성해주세요."
                    required
                  />
                  <button type="submit">답글 작성</button>
                </ReplyForm>
              )}
              {comment.replies &&
                comment.replies.map((reply, index) => (
                  <ReplyItem key={index}>
                    <ReplyHeader>
                      <ReplyAuthor>{reply.author}</ReplyAuthor>
                      <ReplyDate>
                        {new Date(
                          reply.createdAt.seconds * 1000
                        ).toLocaleString()}
                      </ReplyDate>
                    </ReplyHeader>
                    {replyEditMode[`${comment.id}-${index}`] ? (
                      <EditReplyForm
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleReplyEdit(comment.id, index, reply.content);
                        }}
                      >
                        <textarea
                          value={reply.content}
                          onChange={(e) =>
                            setComments((prevComments) =>
                              prevComments.map((c) =>
                                c.id === comment.id
                                  ? {
                                      ...c,
                                      replies: c.replies.map((r, i) =>
                                        i === index
                                          ? { ...r, content: e.target.value }
                                          : r
                                      ),
                                    }
                                  : c
                              )
                            )
                          }
                        />
                        <button type="submit">수정 완료</button>
                        <button
                          type="button"
                          onClick={() => toggleReplyEditMode(comment.id, index)}
                        >
                          취소
                        </button>
                      </EditReplyForm>
                    ) : (
                      <ReplyContent>{reply.content}</ReplyContent>
                    )}
                    {reply.author === author && (
                      <ReplyActions>
                        <button
                          onClick={() => toggleReplyEditMode(comment.id, index)}
                        >
                          수정
                        </button>
                        <button
                          onClick={() => handleReplyDelete(comment.id, index)}
                        >
                          삭제
                        </button>
                      </ReplyActions>
                    )}
                  </ReplyItem>
                ))}
            </ReplySection>
          </CommentItem>
        ))}
      </CommentList>
    </CommentSection>
  );
};

export default CommentComponent;

const CommentSection = styled.div`
  margin: 20px 0;
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 10px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentAuthor = styled.span`
  font-weight: bold;
`;

const CommentDate = styled.span`
  font-size: 0.8em;
  color: gray;
`;

const CommentContent = styled.p`
  margin: 5px 0;
`;

const CommentActions = styled.div`
  button {
    margin-right: 5px;
  }
`;

const EditCommentForm = styled.form`
  textarea {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const ReplySection = styled.div`
  margin-left: 20px;
`;

const ReplyToggle = styled.button`
  margin-top: 5px;
`;

const ReplyForm = styled.form`
  textarea {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const ReplyItem = styled.div`
  margin-top: 5px;
`;

const ReplyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReplyAuthor = styled.span`
  font-weight: bold;
`;

const ReplyDate = styled.span`
  font-size: 0.8em;
  color: gray;
`;

const ReplyContent = styled.p`
  margin: 5px 0;
`;

const ReplyActions = styled.div`
  button {
    margin-right: 5px;
  }
`;

const EditReplyForm = styled.form`
  textarea {
    width: 100%;
    margin-bottom: 5px;
  }
`;
