import Router from 'next/Router';
const Users =(props) =>{
    console.log("users componment ", props);
    return(
        <ul className="list-group">
        {
           
            props.users.map(user => (
                <li className="list-group-item list-group-item-action" onClick={e => Router.push('/task/[id]', `/task/${user.id}`) }>
                    <h5>TAREA: {user.title} </h5>
            <p>Detalle: {user.body}</p>
                </li>
            ))
        }
        </ul>
    )
}
export default Users;