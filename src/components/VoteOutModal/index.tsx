import React, { useState } from 'react';

// @ts-ignore
import Select from 'react-dropdown-select';
import { useHistory } from 'react-router-dom';
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

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const VoteOutModal = () => {
    const history = useHistory()
    const [state, setState] = useState('none')
    const [currentSelect, setCurrentSelect] = useState('')
    const onVoteOutStart = () => {
        setState('start')
    }

    const onVoteSelect = () => {
        if (state === 'start') {
            setState('select')
        } else {
            history.push('/night')
        }
    }

    const onCancel = () => {
        setState('none')
    }

    return (
        <>
            <Button onClick={onVoteOutStart}>Vote Out</Button>
            {state !== 'none' && (
                <Wrapper>
                    <Modal isOpen>
                        <Container>
                            <Gap type="vertical" size="8px">
                                {state === 'start' ? (
                                    <>
                                        <div className="title">Vote Out</div>
                                        {/** @ts-ignore */}
                                        <Select options={options} values={[currentSelect]} dropdownPosition="top" onChange={setCurrentSelect} />
                                    </>
                                ) : (
                                    <div>
                                        Gun will die and go to night phase
                                    </div>
                                )}
                                <Gap size="8px">
                                    <Danger onClick={onCancel}>Cancel</Danger>
                                    <Button onClick={onVoteSelect}>OK</Button>
                                </Gap>
                            </Gap>
                        </Container>
                    </Modal>
                </Wrapper>
            )}
        </>
    )
}


export default VoteOutModal
