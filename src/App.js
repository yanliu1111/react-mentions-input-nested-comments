import Comments from './comments/Comments';
import React from 'react'; // Add this line
function App() {
  return (
    <div className='app'>
      <h1>Nested comments</h1>
      <Comments currentUserId='1' />
    </div>
  );
}

export default App;
