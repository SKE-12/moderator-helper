import React, { useState } from 'react';

import Case from 'case';
import { Photo } from 'solarxui';
import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { useGameState } from '../contexts/gameController';
import Player from '../models/Player';
import roleImgResolver from '../roleImgResolver';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Header = styled.h1`
    font-size: 32px;
    font-weight: bold;
    text-align: center
`

const RoleName = styled.h2`
    font-size: 24px;
    font-weight: bold;
`

const InputName = styled.input`
    font-size: 20px;
    border: 1px solid black;
    width: 40%
    vertical-align: middle;
    padding 1%;
    border-radius: 20px;
    outline: none;
`

const InputPage = () => {
    const { activePlayerClasses, setPlayerAndStartGame } = useGameState(gameState => ({
        activePlayerClasses: gameState.activePlayerClasses,
        setPlayerAndStartGame: gameState.setPlayerAndStartGame,
    }))
    const [activeClasses, setActiveClasses] = useState<any>(activePlayerClasses)
    const [players, setPlayers] = useState<Player[]>([])
    const [name, setName] = useState('')

    const onChange = ({ target: { value }}: any) => {
        setName(value)
    }

    const onSubmit = () => {
        const [ActiveClass, ...otherClasses] = activeClasses
        const player = new ActiveClass() as Player
        player.playerName = name

        if (otherClasses.length === 0) {
            const fullPlayers = [...players, player]
            setPlayerAndStartGame(fullPlayers)
        } else {
            setActiveClasses(otherClasses)
            setName('')
            setPlayers([...players, player])
        }
    }

    const activeClass = activeClasses[0]

    return (
        <Container>
            <Header>Input Name</Header>
            <Photo size={400} src={roleImgResolver(Case.snake(activeClass.name))}/>
            <RoleName>{Case.title(activeClass.name)}</RoleName>
            <InputName onChange={onChange} value={name} />
            <Button variant="outlined" style={{marginTop: "20px"}} onClick={onSubmit}>Submit</Button>
        </Container>
    )
}

export default InputPage
