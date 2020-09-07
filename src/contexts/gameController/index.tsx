import React, {
  createContext,
  ReactNode,
  useContext,
} from 'react';

import GameState from '../../controllers/GameState';
import useData from '../../hooks/useData';

export const context = createContext<GameState>(undefined as any)

const controller = new GameState()

export const Wrapper = ({ children }: { children: ReactNode }) => (
    <context.Provider value={controller}>{children}</context.Provider>
)

export function useGameState<O>(resolver: (state: GameState) => O) {
    const gameState = useContext(context)
    return useData(gameState, resolver)
}
