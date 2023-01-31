import { useState } from "react";
import { NavLink } from "react-router-dom";

import users from '../../component/user/constants'

import * as S from './style'
import logo from '../../img/logo.png'

export function Login(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const loginWrite = (e) => setLogin(e.target.value);
    const passwordWrite = (e) => setPassword(e.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const dataValue = users.map(value=>value.login===setLogin && value.password===setPassword);

            if(dataValue){
                setError('');
                <NavLink to='/main'/>;
            }else{
                setError('Неверно указан логин или пароль!');
            }
        }
        
    return (
        <S.Base>
            <S.Box onSubmit={handleSubmit}>
                <S.BoxEnter>
                    <S.Image src={logo} alt='logo'/>
                        <S.Login type='text' placeholder='Login' value={login} onChange={loginWrite}/>
                        <S.Password type='password' placeholder='Password' value={password} onChange={passwordWrite}/>
                </S.BoxEnter>
                <button type='button' className='enter_btn'>Войти</button>

                <NavLink to='/registration' className='rgn_btn'>Зарегистрироваться</NavLink>
                {error && <S.Errors>{error}</S.Errors>}
            </S.Box>
        </S.Base>
    );
}
