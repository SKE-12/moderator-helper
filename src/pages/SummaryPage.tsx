import React from 'react';

import {
  Button,
  Gap,
} from 'solarxui';

import { useGameState } from '../contexts/gameController';

const SummaryPage = () => {
    const { goToDay, nightSummary } = useGameState(gameState => ({
        goToDay: gameState.goToDay,
        nightSummary: gameState.nightSummary,
    }))

    return (
        <Gap type="vertical" size="8px">
            <h1>Summary</h1>
            {nightSummary.annoucement}
            <Button onClick={goToDay}>Next</Button>
        </Gap>
    )
}

export default SummaryPage
