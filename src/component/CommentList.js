import React, { useState } from "react";
import "../styles/commentList.css";
import useAddComment from "../hooks/useAddComment";

const CommentList = ({
  comments,
  handlereplyComment,
  handleeditComment,
  handledeleteComment,
}) => {
  const [replyText, setReplyText] = useState("");
  const [isVisible, setIsVisible] = useState([]);
  const [commentIndex, setCommentIndex] = useState([]);
  const [editMode, setEdiMode] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const addReplyComment = (id) => {
    setShowInput(true);
  };

  const deleteComment = (id, index) => {
    console.log(id, index, "delete---");
  };

  return (
    <div className="mainwrapper">
      <div className="wrapper">
        {comments?.commentText !== undefined && (
          <div className="commentArea">
            <p>{comments?.commentText}</p>

            {showInput && (
              <div className="inputShow">
                <input
                  type="text"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <button
                  className="reply"
                  onClick={() =>
                    handlereplyComment(
                      replyText,
                      comments.id,
                      comments,
                      setReplyText(""),
                      setShowInput(false)
                    )
                  }
                >
                  Reply
                </button>
                <button onClick={() => setShowInput(false)}>Cancel</button>
              </div>
            )}
            <div className="commentAction">
              {editMode ? (
                <>
                  <button className="save">save</button>{" "}
                  <button className="Cancel" onClick={() => setEdiMode(false)}>
                    Cancel
                  </button>
                </>
              ) : comments?.commentText !== undefined ? (
                <>
                  <button
                    className="reply"
                    onClick={() => addReplyComment(comments.id)}
                  >
                    Reply
                  </button>

                  <button className="edit" onClick={() => setEdiMode(true)}>
                    Edit
                  </button>

                  <button className="delete">Delete</button>
                </>
              ) : null}
            </div>
          </div>
        )}

        {comments.childNodes.map((comment) => {
          return (
            <CommentList
              comments={comment}
              handledeleteComment={handledeleteComment}
              handlereplyComment={handlereplyComment}
              handleeditComment={handleeditComment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;
