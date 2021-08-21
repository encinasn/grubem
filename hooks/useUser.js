import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// services
import { login, onAuthStateChanged } from 'firebase/client';

const INITIAL_STATE = {
  login: false,
  update: false,
};

const useUser = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(INITIAL_STATE);
  const [error, setError] = useState(INITIAL_STATE);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, [user]);

  const loginUser = async (email, password) => {
    setLoading({...loading, login: true });
    try {
        const response = await login(email, password);
        router.push('/admin');
        setUser(response);
    } catch (e) {
        console.log(e);
        setError({...loading, login: e.message});
    }
    setLoading({...loading, login: false });
  };

  return { user, loading, error, loginUser };
};

export default useUser;
