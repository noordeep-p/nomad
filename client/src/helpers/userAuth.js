import axios from 'axios';

export const handleSubmitRegister = (event, setDisplay) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  axios
    .post('http://localhost:8000/user/register', {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    })
    .then((res) => {
      if (res) {
        setDisplay('login');
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const handleSubmitLogin = (event, setAccessToken, history) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  axios
    .post('http://localhost:8000/user/login', {
      email: data.get('email'),
      password: data.get('password'),
    })
    .then((res) => {
      const { accessToken } = res.data;
      if (accessToken) {
        setAccessToken(`Bearer ${accessToken}`);
        history.push('/');
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const changeDisplay = (type, display, setDisplay) => {
  if (type === 'register') {
    setDisplay('loading');
    setTimeout(() => {
      setDisplay('register');
    }, 1500);
  }
  if (type === 'login') {
    setDisplay('loading');
    setTimeout(() => {
      setDisplay('login');
    }, 1500);
  }
};
