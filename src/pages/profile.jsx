import { useParams } from "react-router-dom"
import users from '../component/dataset/constants'


export function Profile(){
    const params = useParams();

    const user = users.find((user)=> user.id === Number(params.id));

    const fullName = `${user.firstName} ${user.lastName}`
    return(
        <section>
            <img src={user.avatar} alt={fullName} />
            <h1>{fullName}</h1>
            <p>email: {user.email}</p>
            <p>genre: {user.genre}</p>
        </section>
    )
}