//import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

//O nome da const precisa começar com letra maiuscula, pois se trata de um componente da pag

export default function Home() {
  return (
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
    <Box>
     <img src="https://github.com/daniszcode.png" style={{ borderRadius: '8px' }} ></img>
    </Box>
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
  
  
  
  
  
  )
}
