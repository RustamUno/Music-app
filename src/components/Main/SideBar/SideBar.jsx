import '../../../App.css'
import * as S from './style'
import { UserList } from '../../user-list'
import {USER} from '../../../constants'
import playlist01 from '../../../img/playlist01.png'
import playlist02 from '../../../img/playlist02.png'
import playlist03 from '../../../img/playlist03.png'

function SideBar(){
    return(
    <S.SideBar>
        <S.Personal>
            <UserList users={USER}/>
        </S.Personal>
        <S.Block>
            <S.List>
                <S.Item>
                    <S.Link href="/">
                        <img className="sidebar__img" src={playlist01} alt="day's playlist"/>
                    </S.Link>
                </S.Item>
                <S.Item>
                    <S.Link href="/">
                        <img className="sidebar__img" src={playlist02} alt="day's playlist"/>
                    </S.Link>
                </S.Item>
                <S.Item>
                    <S.Link href="/">
                        <img className="sidebar__img" src={playlist03} alt="day's playlist"/>
                    </S.Link>
                </S.Item>
            </S.List>
        </S.Block>
    </S.SideBar>
    )
}

export default SideBar;