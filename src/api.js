export const getComments = async () => {
  return [
    {
      id: '1',
      body: 'First comment',
      username: 'Tony Stark',
      userId: '1',
      parentId: null,
      createdAt: '2024-04-16T23:00:33.010+02:00',
    },
    {
      id: '2',
      body: 'Second comment',
      username: 'Peter Parker',
      userId: '2',
      parentId: null,
      createdAt: '2024-04-16T23:00:33.010+02:00',
    },
    {
      id: '3',
      body: 'First comment first child',
      username: 'Peter Parker',
      userId: '2',
      parentId: '1',
      createdAt: '2024-04-16T23:00:33.010+02:00',
    },
    {
      id: '4',
      body: 'Second comment second child',
      username: 'Peter Parker',
      userId: '2',
      parentId: '2',
      createdAt: '2024-04-16T23:00:33.010+02:00',
    },
  ];
};
// We assume the userId 1 is the current user
export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).slice(2, 9),
    body: text,
    parentId,
    userId: '1', // in real app we would get these ALL information from the backend, NEVER pass current userId to API from the client side. The backend should know who is the current user based on the logged in token.
    username: 'Tony Stark',
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
