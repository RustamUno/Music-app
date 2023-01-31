import { NavLink } from "react-router-dom";

import * as S from './style'
import '../../App.css'
import search from '../../img/icon/search.svg'

import  Menu  from "../../component/Main/Menu/Menu";
import Player from '../../component/Main/Player/Player'

export const NotFound=()=>{
    return(
        <S.Base>
            <Menu/>
            <S.Box>
                <S.Search>
                    <S.Svg>
                        <use xlinkHref={search} />
                    </S.Svg>
                    <S.SearchPlays type="search" placeholder="Поиск" name="search" />
                </S.Search>
                <S.Warning>
                    <S.Title>404</S.Title>
                    <h2>Страница не найдена</h2>
                    <S.Info>Возможно, она была удалена или перенесена на другой адрес</S.Info>
                    <NavLink to='/' className='enter_btn'>Вернуться на главную</NavLink>
                </S.Warning>
            </S.Box>

            <S.Bars/>
                <Player/>
            {/* </S.Bars> */}
        </S.Base>
    )
}

