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
            {nightSummary.annoucement.length > 0 && nightSummary.annoucement.map((annouce) =>  {
                return (
                    <>
                        {annouce}
                    </>
                )
            })}
            {nightSummary.annoucement.length === 0 && <>คืนนี้ไม่มีคนตาย</>}
            <Button onClick={goToDay}>Next</Button>
        </Gap>
    )
}

export default SummaryPage
