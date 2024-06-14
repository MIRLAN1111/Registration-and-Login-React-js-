import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { authPost } from '../../store/authSlice/authThunk';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerName = (e) => setName(e.target.value);
  const handlerEmail = (e) => setEmail(e.target.value);
  const handlerPassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDate = {
      name,
      email,
      password,
    };
    dispatch(authPost({newDate, navigate}));
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Имя пользователя" onChange={handlerName} value={name} />
      <Input label="Почта" onChange={handlerEmail} value={email} type="email" />
      <Input
        label="Пароль"
        onChange={handlerPassword}
        value={password}
        // type="password"
      />
      <Button type="submit">SigIn</Button>
    </form>
  );
};

export default SignUp;
