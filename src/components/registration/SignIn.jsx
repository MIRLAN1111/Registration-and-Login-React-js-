import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { authPostIn } from '../../store/authSlice/authThunk';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerEmail = (e) => setEmail(e.target.value);
  const handlerPassword = (e) => setPassword(e.target.value);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newDate = {
      email,
      password,
    };
    dispatch(authPostIn({ newDate, navigate }));
  };

  return (
    <form onSubmit={handlerSubmit}>
      <Input label="Почта" value={email} onChange={handlerEmail} />
      <Input label="Пороль" value={password} onChange={handlerPassword} />
      <Button type='submit'>Войти</Button>
    </form>
  );
};

export default SignIn;
