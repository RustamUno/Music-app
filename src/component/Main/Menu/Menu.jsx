import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import * as S from './style'
import '../../../App.css'
import logo from '../../../img/logo.png'

function Menu() {
    const [visable, setViasble] = useState(false);
    const toggleVisibility =()=>setViasble(!visable);

    return(
        <S.Navigation>
            {!visable ? (
                <S.Option>
                    <S.Logo>
                        <S.Image src={logo} alt='logo'/>
                    </S.Logo>
                    <S.Burger onClick={toggleVisibility} role="presentation">
                        <S.Line/>
                        <S.Line/>
                        <S.Line />
                    </S.Burger>
                </S.Option>

            ):(
                    <S.Menu>
                        <S.Logo>
                            <S.Image src={logo} alt='logo'/>
                        </S.Logo>
                        <S.Burger onClick={toggleVisibility} role="presentation">
                                <S.Line/>
                                <S.Line/>
                                <S.Line/>
                        </S.Burger>
                        <S.List>
                            <S.Item><NavLink className="menu_list" to='/'>Главное</NavLink></S.Item>
                            <S.Item><NavLink className="menu_list" to='/main'>Мой плейлист</NavLink ></S.Item>
                            <S.Item><NavLink className="menu_list" to='/login'>Войти</NavLink ></S.Item>
                        </S.List>
                    </S.Menu>
            )}
            
        </S.Navigation>
    )
}

export default Menu