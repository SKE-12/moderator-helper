import React, { useState } from 'react';

import { without } from 'lodash';
// @ts-ignore
import Select from 'react-dropdown-select';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Gap,
} from 'solarxui';
import styled from 'styled-components';

import { useGameState } from '../contexts/gameController';
import { RoleName } from '../models/Allegiance';
import Player from '../models/Player';
import ModResponseModal from '../components/ModResponseModal';

const Container = styled.div`
    text-align: center;
`

const Night = () => {
    const [currentSelect, setCurrentSelect] = useState<Player>()
    const [secondarySelect, setSecondarySelect] = useState<Player>()
    const { players, targetPlayers, nightAction, endNight, killTarget } = useGameState(gameState => ({
        players: gameState.getRoleForNightCall(),
        targetPlayers: gameState.getAlivePlayer().map(player => ({
            value: player,
            label: player.playerName,
        })),
        nightAction: gameState.nightAction,
        endNight: gameState.endNight,
        killTarget: gameState.killTarget,
    }))
    const [modResponse, setModResponse] = useState<boolean|null>(null)
    const [toBeTakeActionPlayers, setToBeTakeActionPlayers] = useState<Player[]>(players)
    const history = useHistory()

    const onSubmit = () => {
        const currentPlayer = toBeTakeActionPlayers[0]
        const modResponse = nightAction(currentPlayer, [currentSelect!, secondarySelect!])
        setModResponse(modResponse)

        const updatedList = without(toBeTakeActionPlayers, currentPlayer)
        if (updatedList.length === 0) {
            endNight()
            history.push('/summary')
        } else {
            setCurrentSelect(undefined)
            setSecondarySelect(undefined)
            setToBeTakeActionPlayers(updatedList)
        }
    }

    const onSkip = () =>  {
        const currentPlayer = toBeTakeActionPlayers[0]

        const updatedList = without(toBeTakeActionPlayers, currentPlayer)
        if (updatedList.length === 0) {
            endNight()
            history.push('/summary')
        } else {
            setCurrentSelect(undefined)
            setSecondarySelect(undefined)
            setToBeTakeActionPlayers(updatedList)
        }
    }

    const { role, modDescription } = toBeTakeActionPlayers[0]

    return (
        <Gap type="vertical" size="8px">
            <h1>Night Phase</h1>
            <div style={{ textAlign: 'center' }}>
                {/* <Photo size={300} src={roleImgResolver(role.toLowerCase().split(' ').join('_'))} /> */}
            </div>
            <Container>
                <div className="bold">{role}</div>
                <div>{role !== RoleName.FALLEN_ANGEL && `\`\` ${modDescription} \`\``}</div>
                <div>{role === RoleName.FALLEN_ANGEL && `\`\` Fallen angel ลืมตา (ให้ชี้ไปที่คนในรายชื่อนี้ ${killTarget.map(player => player.playerName).join(',')}) กำลังจะตาย หากต้องการใช้พลังให้ชี้เป้าหมาย \`\``}</div>
            </Container>
            {/** @ts-ignore */}
            <Select options={targetPlayers} values={currentSelect} onChange={([value]) => setCurrentSelect(value.value)} />
            {/** @ts-ignore */}
            <Select options={targetPlayers} values={secondarySelect} onChange={([value]) => setSecondarySelect(value.value)} disabled={role !== RoleName.FALLEN_ANGEL} />
            <Button disabled={currentSelect === undefined} onClick={onSubmit}>Submit</Button>
            <Button onClick={onSkip} hidden={role !== RoleName.FALLEN_ANGEL}>Skip</Button>
            <ModResponseModal modResponse={modResponse} onOk={setModResponse} />
        </Gap>
    )
}

export default Night
