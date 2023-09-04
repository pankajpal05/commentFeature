import React, { useState } from "react";

import "./Comment.css";

const Comment = ({ data }) => {
  const [replyComment, setReplyComment] = useState([]);
  const [replyInput, setReplyInput] = useState("");

  const handleReply = (index) => {
    const updateArr = [...replyComment, index];
    setReplyComment(updateArr);
  };

  const submitReplyInput = () => {
    setReplyComment([...replyComment, replyInput]);
    setReplyInput("");
  };
  console.log(replyComment, "comment--");
  return (
    <>
      <div>
        {data &&
          data.map((text, index) => {
            return (
              <>
                <div className="textReply" key={index}>
                  <p className="text">{text}</p>

                  <button className="btn" onClick={() => handleReply(index)}>
                    Reply
                  </button>
                  {replyComment &&
                    replyComment.map((reply, index) => {
                      return (
                        <div key={index} className="replyComment">
                          {reply}
                        </div>
                      );
                    })}

                  <div>
                    {replyComment &&
                      replyComment.map((number, index) => {
                        return (
                          <div className="replyInputWrapper" key={index}>
                            {index === number ? (
                              <input
                                type="text"
                                value={replyInput}
                                onChange={(e) => setReplyInput(e.target.value)}
                              />
                            ) : null}
                            {index === number && replyInput.length > 0 && (
                              <button
                                className="btn"
                                onClick={submitReplyInput}
                              >
                                Post
                              </button>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Comment;
