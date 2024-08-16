import { Title, Container, ContainerInputs, Form, Input, InputLabel, } from '../home/styles'
import UsersImage from '../../assets/users.png'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import DefaultButton from "../../components/Button"
import Banner from '../../components/TopBackground'


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: inputAge.current.value
    })
    navigate('/listagem-de-usuarios')
  }

  return (
    <Container>
      <Banner>
        <img src={UsersImage} alt='imagem usuários' />
      </Banner>

      <Form>

        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName} />
          </div>

          <div>
            <InputLabel>idade<span> *</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>e-mail<span> *</span></InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} />
        </div>


        <DefaultButton type='button' onClick={registerNewUser} theme='primary'>
          Cadastrar Usuário
        </DefaultButton>
      </Form>

      <DefaultButton type='button' onClick={()=> navigate('/listagem-de-usuarios')}>
        Lista de usuários
      </DefaultButton>

    </Container>
  )
}

export default Home