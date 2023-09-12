import React, { useState } from "react";
import CommentList from "./CommentList";
import "./Comment.css";
import useAddComment from "../hooks/useAddComment";

const arr = {
  id: 786,
  childNodes: [
    {
      id: 1,
      commentText: "second",
      childNodes: [{ id: 2, commentText: "bvn", childNodes: [] }],
    },
    {
      id: 8761,
      commentText: "third",
      childNodes: [{ id: 12, commentText: "secojnnd", childNodes: [] }],
    },
    {
      id: 23561,
      commentText: "fourth",
      childNodes: [{ id: 23, commentText: "second", childNodes: [] }],
    },
    {
      id: 1987,
      commentText: "fifth",
      childNodes: [
        {
          id: 34,
          commentText: "secoeend",
          childNodes: [{ id: 32232, commentText: "err", childNodes: [] }],
        },
      ],
    },
    {
      id: 1321,
      commentText: "vxcv",
      childNodes: [{ id: 902, commentText: "seqewqecond", childNodes: [] }],
    },
  ],
};

const Comment = () => {
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState(arr);

  const { replyComment, editComment, deleteComment } = useAddComment();

  const addComment = () => {
    const comment = {
      id: new Date().getTime(),
      commentText: commentText,
      childNodes: [],
    };
    const updateComment = [...allComments.childNodes, comment];
    allComments.childNodes = updateComment;

    setAllComments(allComments);
    setCommentText("");
  };

  const handlereplyComment = (replyText, id, comment) => {
    const finalResult = replyComment(replyText, id, comment, allComments);
    setAllComments(finalResult);
  };

  const handleeditComment = () => {};

  const handledeleteComment = () => {};

  return (
    <div>
      <div className="comment-heading">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Please add comment here..."
        />
        <button className="btn" onClick={addComment}>
          Add Comment
        </button>
      </div>
      <CommentList
        comments={allComments}
        handlereplyComment={handlereplyComment}
        handleeditComment={handleeditComment}
        handledeleteComment={handledeleteComment}
      />
    </div>
  );
};

export default Comment;
