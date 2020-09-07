import React from 'react';

import { useHistory } from 'react-router-dom';
import {
  Button,
  Gap,
} from 'solarxui';
import styled from 'styled-components';

import VoteOutModal from '../components/VoteOutModal';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Danger = styled(Button)`
    background-color: red !important;
`

const FAKE_DATA = [
    {
        title: 'Fuck',
        value: 1,
    },
    {
        title: 'Fuck',
        value: 1,
    },
    {
        title: 'Fuck',
        value: 1,
    },
    {
        title: 'Fuck',
        value: 1,
    },
]

const DayPage = () => {
    const history = useHistory()
    const onSkip = () => {
        history.push('/night')
    }

    return (
        <Gap type="vertical" size="8px">
            <h1>Day Phase</h1>
            <Container>
                <div className="title bold">Player</div>
                <div className="title bold">Majority</div>
            </Container>
            {FAKE_DATA.map(({ title, value }) => (
                <Container>
                    <div>{title}</div>
                    <div>{value}</div>
                </Container>
            ))}
            <VoteOutModal />
            <Danger onClick={onSkip}>Skip</Danger>
        </Gap>
    )
}

export default DayPage
