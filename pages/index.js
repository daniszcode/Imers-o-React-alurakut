//import styled from 'styled-components'
import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/components/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
//O nome da const/function precisa começar com letra maiuscula, pois se trata de um componente da pag
//para usar "js + html" no react é necessario o '{{}}'

function ProfileSidebar(props) {
  return (
    <>
    <Box as="aside">
     <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} ></img> 
      <hr />  
     <p> <a className="boxLink" href={`https://github.com/${props.githubUser}`} target="_blank" >  @{props.githubUser}</a></p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault />
    </Box>
    </>
  )
}



export default function Home() {
  const githubUser = 'daniszcode';
  const [comunidades, setComunidades] = React.useState([{
    id: '16515645648156156',
    title: 'Eu Odeio Acordar Cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  
  }]);
  //const comunidades = ['Alurakut'];
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
  <Box>
    <h2 className="subTitle">O que você deseja fazer?</h2>
    <form onSubmit={function handleCriaComunidade(e) {
      e.preventDefault();
      const dadosDoForm = new FormData(e.target);
      const comunidade = {
        id: new Date().toISOString(),
        title: dadosDoForm.get('title'),
        image: dadosDoForm.get('image'),
      }
      const comunidadesAtualizadas = [...comunidades, comunidade]
      setComunidades(comunidadesAtualizadas)
    }}>
      <div>
      <input placeholder="Qual vai ser o nome da sua comunidade?" 
      name="title" 
      aria-label="Qual vai ser o nome da sua comunidade?"
      type="text" />
      </div>
      <div>
      <input placeholder="Coloque uma URL para usarmos como capa: " 
      name="image" 
      aria-label="Coloque uma URL para usarmos como capa: "/>
      </div>
      <button>
        Criar comunidade
      </button>
    </form>
  </Box>
  </div>
  <div className="profileRelationArea" style={{ gridArea: 'profileRelationsArea' }}>
  <ProfileRelationsBoxWrapper>
  <h2 className="smallTitle">
              Comunidade ({comunidades.length})
            </h2>
  <ul>
    {comunidades.map((item) => {
      return (
  <li key={item.id}>
   <a href={`https://github.com/${item.title}`} >
  <img src={item.image} />
   <span>{item.title}</span>
  </a>
  </li>
      )
    })}
  </ul>
  </ProfileRelationsBoxWrapper>
  <ProfileRelationsBoxWrapper>

  <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
    <ul>
    {pessoasFavoritas.map((item) => {
      return (
  <li key={item} >
   <a href={`https://github.com/${item}`} >
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
