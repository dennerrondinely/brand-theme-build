import { styled } from './styles/theme'
import { Box } from './styles/components/Box'

import './App.css'

function App() {
  return (
    <Wrapper>
      <BoxWrapper>
        <Box color="primary" />
        <Box color="secondary" />
        <Box color="info" />
        <Box color="success" />
        <Box color="warning" />
        <Box color="danger" />
      </BoxWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  maxWidth: '1000px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const BoxWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
})


export default App
