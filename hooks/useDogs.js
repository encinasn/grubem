/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// services
import { getDogs, addDog } from 'firebase/client';

const INITIAL_STATE = {
  get: false,
  create: false,
  delete: false,
  update: false,
};

const usePosts = (preloadDogs = { male: [], female: [], puppy: [] }) => {
  const [dogs, setDogs] = useState(preloadDogs);
  const [loading, setLoading] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_STATE);
  const [success, setSuccess] = useState(INITIAL_STATE);

  useEffect(() => {
    if (!dogs.male.length) getAllDogs();
  }, []);

  const getAllDogs = async () => {
    setLoading({ ...loading, get: true });
    try {
      const response = await getDogs();
      setDogs(response);
      console.log('GET - DOGS', response);
    } catch (e) {
      console.log('GET - DOGS', e);
      setError({ ...error, get: e.message });
    }
    setLoading({ ...loading, get: false });
  };

  const createDog = async (dog) => {
    setLoading({ ...loading, create: true });
    try {
      console.log('CREATE - DOG Req', dog);
      const response = await addDog(dog);
      setSuccess({ ...error, create: true });
      console.log('CREATE - DOG', response);
    } catch (e) {
      console.log('CREATE - DOG', e);
      setError({ ...error, create: e.message });
    }
    setLoading({ ...loading, create: false });
  };

  return { dogs, loading, error, success, createDog };
};

export default usePosts;
