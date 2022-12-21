import {useState} from "react";

import * as S from './style'
import logo from '../../../img/logo.png';


function Navigation(){
    const [visible, setVisible] = useState(false);
    const toggleVisibility =()=> setVisible(!visible);
    return(
    <S.Navigation>
        <S.Logo>
            <S.Image src={logo} alt="logo"/>
        </S.Logo>
        <S.Burger onClick={toggleVisibility} role="presentation">
            <S.Line/>
            <S.Line/>
            <S.Line/>
            {visible}
        </S.Burger>

        {visible && (
        <S.Menu>
            <S.List>
                <S.Item><S.MenuList>Главное</S.MenuList></S.Item>
                <S.Item><S.MenuList>Мой плейлист</S.MenuList></S.Item>
                <S.Item><S.MenuList>Войти</S.MenuList></S.Item>
            </S.List>
        </S.Menu>
        )}
    </S.Navigation>
    )
}

export default Navigation;