import UserList from '../../dataset/user_list'
import users from '../../dataset/constants'

import playlist01 from '../../../img/playlist01.png'
import playlist02 from '../../../img/playlist02.png'
import playlist03 from '../../../img/playlist03.png'

import * as S from './style'
import '../../../App.css'

function SideBar(){
    return(
        <S.SideBar>
        <S.Personal>
            <UserList users={users}/>
        </S.Personal>
        <S.Block>
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
        </S.Block>
    </S.SideBar>
    )
}

export default SideBar