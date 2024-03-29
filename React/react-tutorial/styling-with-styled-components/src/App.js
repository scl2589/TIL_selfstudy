import React, { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

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
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    console.log('확인')
    setDialog(false);
  }

  const onCancel = () => {
    console.log('취소')
    setDialog(false);
  }

  return (
    <ThemeProvider theme={{
      palette
    }}>
      <>

      <AppBlock>
        <Button color="pink" size="large" onClick={onClick}>
          삭제
        </Button>
        {/* <ButtonGroup>
          <Button color="pink" size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small" color="gray">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large" outline>BUTTON</Button>
          <Button outline>BUTTON</Button>
          <Button size="small" color="gray" outline>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large" fullWidth>BUTTON</Button>
          <Button size="large" fullWidth>BUTTON</Button>
          <Button size="large" color="gray" fullWidth>BUTTON</Button>
        </ButtonGroup> */}
      </AppBlock>
      <Dialog 
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>

  );
}

export default App;
