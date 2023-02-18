import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


import users from '../../component/dataset/constants'

import * as S from './style'
import logo from '../../img/logo.png'

export function Login(){

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const dataValue = users.map((value)=>
            value.login.toLowerCase().toString()===login.toLowerCase() &&
            value.password.toString()=== password.toString());

            console.log('Введено: ', login, password);

        console.log(dataValue);


            if(dataValue){
                // <NavLink to='/'/>;

                navigate("/");
            }else{
                setError('Неверно указан логин или пароль!');
            }
        }
        
    return (
        <S.Base>
            <S.Box onSubmit={handleSubmit}>
                <S.BoxEnter>
                    <S.Image src={logo} alt='logo'/>
                        <S.Login type='text' placeholder='Login' value={login} onChange={(event)=>setLogin(event.target.value)}/>
                        <S.Password type='password' placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </S.BoxEnter>
                <button type='submit' value='Войти' className='enter_btn'>Войти</button>

                <NavLink to='/registration' className='rgn_btn'>Зарегистрироваться</NavLink>
                {error && <S.Errors>{error}</S.Errors>}
            </S.Box>
        </S.Base>
    );
}
