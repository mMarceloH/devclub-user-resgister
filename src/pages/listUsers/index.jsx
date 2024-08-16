import api from "../../services/api"
import { useEffect, useState } from "react"
import DefaultButton from "../../components/Button"
import Banner from "../../components/TopBackground"
import UsersImage from '../../assets/users.png'
import { Title, Container, ContainerUsers, Avatar, CardUsers, TrashIcon} from './style'
import Trash from '../../assets/trash.svg'
import { useNavigate } from 'react-router-dom'

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }
    ), []
    //TODA VEZ que a TELA CARREGA, o useEffect é chamado
    //TODA VEZ que as VARIAVEIS DETERMINADAS mudarem, o useEffect é chamado

async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter(user => user.id !== id )

    setUsers(updatedUsers)
}


    return (
        <Container>
            <Banner>
                <img src={UsersImage} alt='imagem usuários' />
            </Banner>
            <Title>listagem de Usuários</Title>

            <ContainerUsers>
                {users.map((users) => (
                    <CardUsers key={users.id}>
                        <Avatar src={`https://avatar.iran.liara.run/public?username=${users.id}`}/>
                        <div >
                            <h3>{users.name}</h3>
                            <p>{users.age}</p>
                            <p>{users.email}</p>
                        </div>
                        <TrashIcon src={Trash} onClick={() => deleteUsers(users.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <DefaultButton type='button' onClick={()=> navigate('/')}>Voltar</DefaultButton>
        </Container>
    )
}

export default ListUsers