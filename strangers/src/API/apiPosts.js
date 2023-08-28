
// api/posts.js
const BASE_URL = 'https://strangers-things.herokuapp.com/api';

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/2302-ACC-PT-WEB-PT-A/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching posts');
    }

    const data = await response.json();
    return data.data.posts;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
};
