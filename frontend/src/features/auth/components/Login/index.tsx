import { useFormik } from "formik";
import { useEffect } from "react";
import { ErrorResponse } from "shared/types";
import { alerts } from "shared/utils";
import { useLoginMutation } from "../../store";
import "./styles.scss";

function Login() {
  const [login, { error }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values);
    },
  });

  useEffect(() => {
    if (error) {
      alerts.error((error as ErrorResponse)?.data?.detail);
    }
  }, [error]);

  return (
    <form onSubmit={formik.handleSubmit} className='login_form'>
      <div className='login_form__item'>
        <span>Авторизация</span>
      </div>
      <div className='login_form__item'>
        <label>Логин</label>
        <input
          required
          name='username'
          onChange={formik.handleChange}
          className='block_bg'
          type='text'
          placeholder='login'
          value={formik.values.username}
        />
      </div>
      <div className='login_form__item'>
        <label>Пароль</label>
        <input
          required
          name='password'
          onChange={formik.handleChange}
          className='block_bg'
          type='password'
          placeholder='password'
          value={formik.values.password}
        />
      </div>
      <button type='submit' className='login_form__button block_bg'>
        Вход
      </button>
    </form>
  );
}

export default Login;
