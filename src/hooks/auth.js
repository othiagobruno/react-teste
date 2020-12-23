/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { api } from 'services/api';

export const useHook = () => {
  const state = useState();
  const effect = useEffect();
  return {
    state,
    effect,
  };
};
function useAuth() {
  const [auth, setAuth] = useState({
    isAuth: false,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if (localAuth) {
      setAuth(JSON.parse(localAuth));
      api.setHeader('Authorization', `${JSON.parse(localAuth).access_token}`);
    }
  }, []);

  const Login = async (data) => {
    try {
      api.setHeader(
        'Authorization',
        'b2ZlcnRhcGxheXVzZXI6b2ZlcnRhcGxheXBhc3N3b3Jk'
      );
      const res = await api.post('/oauth/token', {
        ...data,
        grant_type: 'password',
      });
      // caso não faça login, cair em catch
      if (res.status !== 200) {
        throw res;
      }
      // se não cair no erro;
      setAuth({ isAuth: true, ...res.data });
      localStorage.setItem(
        'auth',
        JSON.stringify({ isAuth: true, ...res.data })
      );
      api.setHeader('Authorization', `${res.data.access_token}`);
      console.log(res.data);
      return res.data;
    } catch (err) {
      setError('erro ao logar');
      console.log(error.data);
      return error.data;
    }
  };

  return {
    Login,
    auth,
    error,
  };
}

export default useAuth;
