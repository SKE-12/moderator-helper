import {
  FC,
  useEffect,
} from 'react';

import { useHistory } from 'react-router-dom';

import { useGameState } from '../../contexts/gameController';
import { GamePhase } from '../../models/Allegiance';

const PhaseController: FC<{}> = () => {
    const history = useHistory()
    const state = useGameState(gameState => gameState.gamePhase)

    useEffect(() => {
        switch (state) {
            case GamePhase.SETUP:
                history.replace('/')
                break
            case GamePhase.DAY:
                history.replace('/day')
                break
            case GamePhase.NIGHT:
                history.replace('/night')
                break
            case GamePhase.END:
                history.replace('/end')
                break
        }
    }, [state])

    return null
}

export default PhaseController
