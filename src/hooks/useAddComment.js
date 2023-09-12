const useAddComment = () => {
  const replyComment = (text, parentId, comment, allComments) => {
    const replynode = {
      id: new Date().getTime(),
      commentText: text,
      childNodes: [],
    };
    const updateChild = [replynode, ...comment.childNodes];

    const findNestedCommentIndex = (comments, comment) => {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i] === comment) {
          comments[i].childNodes = updateChild;
          return i;
        } else if (comments[i].childNodes) {
          const nestedCommentIndex = findNestedCommentIndex(
            comments[i].childNodes,
            comment
          );
          if (nestedCommentIndex !== -1) {
            comments[i].childNodes[nestedCommentIndex].childNodes = updateChild;
            return nestedCommentIndex;
          }
        }
      }

      return -1;
    };

    const comments = allComments.childNodes;
    findNestedCommentIndex(comments, comment);
    return allComments;
  };

  // Delete function of particular node
  const deleteComment = (comment, allComments) => {
    const findNestedCommentIndex = (comments, comment) => {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i] === comment) {
          return comments.splice(i, 1);
        }
        if (comments[i].childNodes) {
          findNestedCommentIndex(comments[i].childNodes, comment);
        }
      }

      return -1;
    };
    const comments = allComments.childNodes;
    findNestedCommentIndex(comments, comment);

    return allComments;
  };

  return { replyComment, deleteComment };
};

export default useAddComment;
