import styled from 'styled-components'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

//O nome da const precisa começar com letra maiuscula, pois se trata de um componente da pag
const Box = styled.div `
background-color: #FFFFFF;
border-radius: 8px;

`
const MainGrid = styled.main `
width: 100%;
margin-inline: auto;
max-width: 500px;
grid-gap: 10px;
padding: 16px;
max-width: 500px;
.profileArea {
  display: none;
  @media(min-width: 860px){
    display: block;
  }
}

@media(min-width: 860px) {
display: grid;
max-width: 1110px;
grid-template-areas: "profileArea welcomeArea profileRelationsArea" ;
grid-template-columns: 160px 1fr 312px;
}
`
;
export default function Home() {
  return (
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
    <Box>
      Imagem
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
