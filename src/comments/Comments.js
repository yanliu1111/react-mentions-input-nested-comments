import React, { useEffect, useState } from 'react';
import {
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  getComments as getCommentsApi,
  updateComment as updateCommentApi,
} from '../api';

import Comment from './Comment';
import CommentForm from './CommentForm';
import { Mention } from 'react-mentions';
import mentionStyle from '../mentionStyle';

const Comments = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  //console.log('backendComments', backendComments);
  // sort the replies based on the createdAt date, sort ascending order
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };
  const addComment = (test, parentId) => {
    console.log('addComment', test, parentId);
    createCommentApi(test, parentId).then((newComment) => {
      setBackendComments([newComment, ...backendComments]);
    });
  };
  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);
  return (
    <div className='comments'>
      <div className='comment-form-title'>Write comment</div>
      <CommentForm submitLable='Write' handleSubmit={addComment} />
      <div className='comments-container'>
        {rootComments.map((rootComment) => (
          <div>
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)} // normally in small projects we would not have many comments, consider using lazy loading for replies if there are many comments.
              currentUserId={currentUserId} // comment-action will be shown only for the current user
              deleteComment={deleteComment}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              updateComment={updateComment}
            />
            <Mention
              style={mentionStyle}
              trigger='@'
              markup='@[__display__](__id__)'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comments;
