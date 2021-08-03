import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button'

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1.5rem;
  }
`

function App() {
  return (
    <ThemeProvider theme={{
      palette
    }}>
      <AppBlock>
        <ButtonGroup>
          <Button color="pink" size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small" color="gray">BUTTON</Button>
        </ButtonGroup>

      </AppBlock>
    </ThemeProvider>

  );
}

export default App;
