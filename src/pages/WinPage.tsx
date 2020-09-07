import React from 'react';

import { useGameState } from '../contexts/gameController';

const WinPage = () => {
    const winner = useGameState(gameState => gameState.winner)

    return (
        <h1>{winner!} ชนะ</h1>
    )
}

export default WinPage
