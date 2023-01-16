import { NavLink } from 'react-router-dom'
// import { useState } from 'react'

import * as S from './style'
import '../../App.css'
import logo from '../../img/logo.png'

export const Login = () =>{
    // const [user, SetUser] = useState(null)
    // const handleLogin = () => SetUser({login: 'taradam'})
    // const handleLogout = () => SetUser(null)
    
    return(
       <S.Base>
            <S.Box>
                <S.BoxEnter>
                    <S.Image src={logo} alt='logo'/>
                    <S.Log type='text' placeholder='Логин'/>
                    <S.Pas type='password' placeholder='Пароль'/>
                    <NavLink to='/' className='enter_btn'>Войти</NavLink>
                </S.BoxEnter>
                <NavLink to='/registration' className='rgn_btn'>Зарегистрироваться</NavLink>
            </S.Box>
       </S.Base>
    )
}