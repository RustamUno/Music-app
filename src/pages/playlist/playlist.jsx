import Menu from "../../component/Main/Menu/Menu"
import Search from "../../component/Main/Search/Search"
import SideBar from "../../component/Main/SideBar/SideBar"
import CentralBlock from "../../component/Main/CentralBlock/CenterBlock"

import * as S from '../../component/Main/style'

export const Playlist =()=>{
    return(
        <S.Wrapper>
        <S.Container>
                <Menu/>

            <S.Box>
                <Search/>
                <CentralBlock/>
            </S.Box>

                <SideBar/>

        </S.Container>
    </S.Wrapper>
    )
}