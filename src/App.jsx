import { Title, Container, ContainerInputs, Button, Form, TopBackground, Input, InputLabel } from './styles'
import UsersImage from './assets/users.png'


function Home() {
  
  return(
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='imagem usuários'/>
      </TopBackground>

      <Form>

        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>nome<span>*</span></InputLabel>
            <Input type= 'text' placeholder='Nome do usuário'/>
            </div>
            <div>
              <InputLabel>idade<span>*</span></InputLabel>
            <Input type='number' placeholder='Idade do usuário'/>
            </div>
          </div>
          <div>
            <InputLabel>e-mail<span>*</span></InputLabel>
          <Input type='email' placeholder='E-mail do usuário'/>
          </div>
        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>

      </Form>

    </Container>
  )
}

export default Home