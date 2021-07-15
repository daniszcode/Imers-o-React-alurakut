//import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu } from '../src/components/lib/AlurakutCommons';
//O nome da const/function precisa começar com letra maiuscula, pois se trata de um componente da pag
//para usar "js + html" no react é necessario o '{{}}'

function ProfileSidebar(props) {
  return (
    <Box>
     <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} ></img> 
    </Box>
  )
}



export default function Home() {
  const githubUser = 'daniszcode';

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
    <ProfileSidebar githubUser={githubUser} />
    </div>
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
  <Box>
    Bem-vindo
  </Box>
  </div>
  <div className="profileRelationArea" style={{ gridArea: 'profileRelationsArea' }}>
  <Box>
    Meus amigos ()
  </Box>
  <Box>
    Comunidades
  </Box>
  </div>
  </MainGrid>
  </>
  
  
  
  
  )
}
