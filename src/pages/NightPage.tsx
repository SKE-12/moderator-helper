import React, { useState } from 'react';

// @ts-ignore
import Select from 'react-dropdown-select';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Gap,
  Photo,
} from 'solarxui';
import styled from 'styled-components';

import roleImgResolver from '../roleImgResolver';

const Container = styled(Gap)`
    text-align: center;
`

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const Night = () => {
    const [currentSelect, setCurrentSelect] = useState('')
    const history = useHistory()

    const onSubmit = () => {
        history.push('/summary')
    }
    return (
        <Gap type="vertical" size="8px">
            <h1>Night Phase</h1>
            <div style={{ textAlign: 'center' }}>
                <Photo size={300} src={roleImgResolver('elder')} />
            </div>
            <Container type="vertical" size="2px">
                <div className="bold">Fucking Moderator</div>
                <div>`` Fucking Description ``</div>
            </Container>
            {/** @ts-ignore */}
            <Select options={options} values={[currentSelect]} onChange={setCurrentSelect} />
            <Button onClick={onSubmit}>Submit</Button>
        </Gap>
    )
}

export default Night
