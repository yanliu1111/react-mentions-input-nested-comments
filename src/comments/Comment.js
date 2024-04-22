import { Mention } from 'react-mentions';
import React from 'react';
import mentionStyle from '../mentionStyle';

const Comment = ({ comment, replies, currentUserId, deleteComment }) => {
  const fiveMinutes = 5 * 60 * 1000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed; // if the current user is the author of the comment and the comment is not older than 5 minutes, allow editing
  const canDelete = currentUserId === comment.userId;
  const createAt = new Date(comment.createdAt).toLocaleDateString();
  return (
    <div className='comment'>
      <div className='comment-image-container'>
        <img src='/user-icon.png' />
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
          <div className='comment-author'> {comment.username}</div>
          <div>{createAt}</div>
        </div>
        <div className='comment-text'> {comment.body}</div>
        <div className='comment-actions'>
          {canReply && <div className='comment-action'>Reply</div>}
          {canEdit && <div className='comment-action'>Edit</div>}
          {canDelete && (
            <div
              className='comment-action'
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {replies.length > 0 && (
          <div className='replies'>
            {replies.map((reply) => (
              <div key={reply.id} className='reply'>
                <Comment
                  comment={reply}
                  replies={[]}
                  currentUserId={currentUserId}
                  deleteComment={deleteComment}
                />{' '}
                {/* replies={[]} because we say it is okay to not have replies for
                comments */}
                <Mention
                  style={mentionStyle}
                  trigger='@'
                  markup='@[__display__](__id__)'
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Comment;
