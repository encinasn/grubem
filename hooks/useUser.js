/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// services
import { login, onAuthStateChanged } from 'firebase/client';
// hooks
import useLocalStorage from 'hooks/useLocalStorage'

const INITIAL_STATE = {
  login: false,
  update: false,
};

const useUser = () => {
  const router = useRouter();
  const [user, setUser] = useLocalStorage('user', null);
  const [loading, setLoading] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_STATE);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    !user && router.replace('/admin/iniciar-sesion')
  }, []);

  const loginUser = async (email, password) => {
    setLoading({...loading, login: true });
    try {
        await login(email, password);
        router.push('/admin');
    } catch (e) {
        console.log(e);
        setError({...loading, login: e.message});
    }
    setLoading({...loading, login: false });
  };

  return { user, loading, error, loginUser };
};

export default useUser;
