import * as S from '../Main/SideBar/style'

export const UserList = ({users}) =>{
    return(
        <div>
            {users.map((user)=>(
                <S.Bild key={user.id}>
                    <S.Name>
                        {user.firstName} {user.lastName}
                    </S.Name>
                    <S.Avatar src={user.avatar} alt={user.firstName}/>
                </S.Bild>
            ))}
        </div>
    )
}