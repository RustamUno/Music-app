import * as S from './style'
import logo from '../../img/logo.png'

export const Login = () =>{

    return(
       <S.Base>
            <S.Box>
                <S.BoxEnter>
                    <S.Image src={logo} alt='logo'/>
                    <S.Log type='text' placeholder='Логин'/>
                    <S.Pas type='password' placeholder='Пароль'/>
                    <S.Enter>Войти</S.Enter>
                </S.BoxEnter>
                <S.Reg>Зарегистрироваться</S.Reg>
            </S.Box>
       </S.Base>
    )
}