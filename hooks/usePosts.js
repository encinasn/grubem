/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// services
import { getPosts, addPost} from 'firebase/client';

const INITIAL_STATE = {
  get: false,
  create: false,
  delete: false,
  update: false,
}

const usePosts = (preloadPosts = []) => {
  const [posts, setPosts] = useState(preloadPosts);
  const [loading, setLoading] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_STATE);
  const [success, setSuccess] = useState(INITIAL_STATE);

  useEffect(() => {
    if (!posts.length) getAllPosts();
  }, []);

  const getAllPosts = async () => {
    setLoading({...loading, get: true});
    try {
      const response = await getPosts();
      setPosts(response);
      console.log('GET - POSTS', response);
    } catch (e) {
      console.log('GET - POSTS', e);
      setError({...error, get: e.message});
    }
    setLoading({...loading, get: false});
  };
  
  const createPost = async (post) => {
    setLoading({...loading, create: true});
    try {
      console.log('CREATE - POST Req', post);
      const response = await addPost(post);
      setSuccess({...error, create: true});
      console.log('CREATE - POST', response);
    } catch (e) {
      console.log('CREATE - POST', e);
      setError({...error, create: e.message});
    }
    setLoading({...loading, create: false});
  };

  return { posts, loading, error, success, createPost };
};

export default usePosts;
