import React, {useState} from "react";
import Dialog from "./Dialog";
import StyledComponents from "./StyledComponents";
import styled, {ThemeProvider} from 'styled-components'

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
    blue : '#228be6',
    gray : '#496057',
    pink : '#f06595'
  }

function App2() {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        setDialog(!dialog)
    }
    const onConfirm = ()=> {
        console.log('확인')
        setDialog(false)
    }
    const onCancel = ()=> {
        console.log('취소')
        setDialog(false)
    }
    return(
    <ThemeProvider theme={{palette}}>
        <AppBlock>
            <StyledComponents color="pink" size="large" onClick={onClick}>삭제</StyledComponents>
        </AppBlock>
            <Dialog title="정말로 삭제하시겠습니까?"cancelText="취소" confirmText="확인" visible={dialog} onConfirm={onConfirm} onCansel={onCancel}>데이터를 정말로 삭제하시겠습니까?</Dialog>
    </ThemeProvider>
    );
}

export default App2;