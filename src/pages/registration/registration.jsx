import { NavLink } from 'react-router-dom'

import * as S from './style'
import '../../App.css'
import logo from '../../img/logo.png'

export const Registration = () =>{
    return(
        <S.Base>
        <S.Box>
            <S.BoxEnter>
                <S.Image src={logo} alt='logo'/>
                <S.Log type='text' placeholder='Логин'/>
                <S.Pas type='password' placeholder='Пароль'/>
                <S.Repeat type='text' placeholder='Повторите пароль'></S.Repeat>
            </S.BoxEnter>
            <NavLink to='/' className='rgn_btn'>Зарегистрироваться</NavLink>
        </S.Box>
   </S.Base>
    )
}