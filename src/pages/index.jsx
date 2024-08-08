import { Title, Container, ContainerInputs, Button, Form, TopBackground, Input, InputLabel, } from './styles'
import UsersImage from '../assets/users.png'
import { useRef } from 'react'
import api from '../services/api'


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: inputAge.current.value
    })
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='imagem usuários' />
      </TopBackground>

      <Form>

        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName} />
          </div>

          <div>
            <InputLabel>idade<span> *</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
          </div>
        </ContainerInputs>

        <div style={{width: '100%'}}>
          <InputLabel>e-mail<span> *</span></InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
        </div>


        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>

      </Form>

    </Container>
  )
}

export default Home