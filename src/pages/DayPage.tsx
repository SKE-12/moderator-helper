import React from 'react';

import {
  Button,
  Gap,
} from 'solarxui';
import styled from 'styled-components';

import VoteOutModal from '../components/VoteOutModal';
import { useGameState } from '../contexts/gameController';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Danger = styled(Button)`
    background-color: red !important;
`

const DayPage = () => {
    const { players, majority, startNight } = useGameState(gameState => ({
        majority: gameState.getMajority(),
        players: gameState.getAlivePlayer(),
        startNight: gameState.startNight,
    }))

    return (
        <Gap type="vertical" size="8px">
            <h1>Day Phase</h1>
            <Container>
                <div className="title bold">Player ({players.length})</div>
                <div className="title bold">Majority ({majority})</div>
            </Container>
            {players.map(({ playerName, role }) => (
                <Container>
                    <div>{playerName}</div>
                    <div>{role}</div>
                </Container>
            ))}
            <VoteOutModal />
            <Danger onClick={startNight}>Skip</Danger>
        </Gap>
    )
}

export default DayPage
