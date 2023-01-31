import { NavLink } from "react-router-dom";

import * as S from './style'
import '../../App.css'
import logo from '../../img/logo.png'

export const Registration =()=>{
    return(
        <S.Base>
        <S.Box>
            <S.BoxEnter>
                <S.Image src={logo} alt='logo'/>
                <S.Log type='text' placeholder='Login'/>
                <S.Pas type='password' placeholder='Password'/>
                <S.Repeat type='text' placeholder='Confirm password'/>
            </S.BoxEnter>
            <S.Warning>
            <NavLink to='/' className='rgn_btn'>Зарегистрироваться</NavLink>
            </S.Warning>
        </S.Box>
   </S.Base>
    )
}
