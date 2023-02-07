import { useState, useEffect } from "react"

import Skeleton from './Skeleton/Skeleton'
import Menu from "./Menu/Menu"
import Search from "./Search/Search"
import SideBar from "./SideBar/SideBar"
import CentralBlock from "./CentralBlock/CenterBlock"

import * as S from './style'

function Main(){
    const [show, setShow] = useState(true);
    useEffect(()=>{
        setTimeout(()=>setShow(false), 100)
    }, [])
        return(
            show ? <Skeleton/> :
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

export default Main