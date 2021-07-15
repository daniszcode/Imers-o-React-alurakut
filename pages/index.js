//import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/components/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
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
  const pessoasFavoritas = [
  'iiizadora', 
  'tamicristina', 
  'AidaFig', 
  'rosiele28', 
  'linefmv',
];

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
    <ProfileSidebar githubUser={githubUser} />
    </div>
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
  <Box>

    <h1 className="title" >Bem-vindo(a)</h1>
    <OrkutNostalgicIconSet />
  </Box>
  </div>
  <div className="profileRelationArea" style={{ gridArea: 'profileRelationsArea' }}>
  <ProfileRelationsBoxWrapper>
  <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
    <ul>
    {pessoasFavoritas.map((item) => {
      return (
  <li>
   <a href={`https://github.com/${item}`} key={item}>
   <img src={`https://github.com/${item}.png`} />
   <span>{item}</span>
  </a>
  </li>
      )
    })}
  </ul>
  </ProfileRelationsBoxWrapper>
  <Box>
    Comunidades
  </Box>
  </div>
  </MainGrid>
  </>
  
  
  
  
  )
}
