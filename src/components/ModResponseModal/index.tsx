import React, { useState } from 'react';

// @ts-ignore
import {
  Button,
  Gap,
  Modal,
} from 'solarxui';
import styled from 'styled-components';

const Container = styled.div`
    padding: 16px;
`

const Danger = styled(Button)`
    background-color: red !important;
`

const Wrapper = styled.div`
    > div {
        overflow: visible !important;
    }
`
interface PropType {
  modResponse: boolean|null|undefined,
  onOk: (value: boolean|null) => void,
}

const ModResponseModal = ({modResponse, onOk}: PropType) => {

    return (
        <>
            {modResponse !== null && (
                <Wrapper>
                    <Modal isOpen>
                        <Container>
                            <Gap type="vertical" size="8px">
                                <div>
                                    {modResponse ? 'YES' : 'NO'}
                                </div>
                                <Gap size="8px">
                                    <Button onClick={() => onOk(null)}>OK</Button>
                                </Gap>
                            </Gap>
                        </Container>
                    </Modal>
                </Wrapper>
            )}
        </>
    )
}


export default ModResponseModal
