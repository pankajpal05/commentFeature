import React, { useState } from "react";
import "../styles/commentList.css";

const CommentList = ({ comments, handlereplyComment, handledeleteComment }) => {
  const [replyText, setReplyText] = useState("");
  const [editMode, setEdiMode] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const addReplyComment = () => {
    setShowInput(true);
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

                  <button
                    className="delete"
                    onClick={() => handledeleteComment(comments)}
                  >
                    Delete
                  </button>
                </>
              ) : null}
            </div>
          </div>
        )}

        {comments.childNodes.map((comment, index) => {
          return (
            <CommentList
              comments={comment}
              handledeleteComment={handledeleteComment}
              handlereplyComment={handlereplyComment}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;
