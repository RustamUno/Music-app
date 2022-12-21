import * as S from './style'

import CenterBlock from './CenterBlock/CenterBlock'
import Navigation from './Navigation/Navigation'
import SideBar from './SideBar/SideBar'


function Main(){

    return(
        <S.Main>
            <Navigation/>
            <CenterBlock/>
            <SideBar/>
        </S.Main>
    )
}

export default Main;