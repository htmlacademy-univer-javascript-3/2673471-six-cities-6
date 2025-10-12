﻿import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import Logo from '../../components/logo/logo.tsx';

export default function Login() {
  return (
    <div className='page page--gray page--login'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action={AppRoute.Main} method='post'>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input className='login__input form__input' type='email' name='email' placeholder='Email' required/>
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input className='login__input form__input' type='password' name='password' placeholder='Password' required/>
              </div>
              <button className='login__submit form__submit button' type='submit'>Sign in</button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link to={AppRoute.Login} className='locations__item-link'>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
