import { Button } from '@material-ui/core';
import { FastField, Form, Formik } from 'formik';
import useAuth from 'hooks/auth';
import React from 'react';
import * as yup from 'yup';

const schema = yup.object({
  username: yup
    .string()
    .email('vc não inseriu um email')
    .required('Obrigatório'),
  password: yup.string().required('Obrigatório'),
});

const initial = {
  username: '',
  password: '',
};
function LoginPage() {
  const { Login, auth, error } = useAuth();

  return (
    <div style={{ flex: 1, padding: 40 }}>
      <h1>Login</h1>
      {!!auth.isAuth && <h1>Você está logado</h1>}

      {!!error && <h1>{error}</h1>}

      <Formik
        initialValues={initial}
        validationSchema={schema}
        onSubmit={Login}
      >
        {({ handleSubmit, errors }) => (
          <Form>
            <FastField name="username" type="email" placeholder="email" />
            {errors.email && errors.email}
            <FastField name="password" type="password" placeholder="senha" />
            {errors.password && errors.password}
            <Button onClick={handleSubmit}>Entrar</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginPage;
