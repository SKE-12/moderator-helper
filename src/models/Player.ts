import GameState from '../controllers/GameState';
import {
  Allegiance,
  RoleName,
} from '../models/Allegiance';

export default class Player {
  public id: number

  public role: RoleName

  public playerName: string

  public modDescription: string

  public vote: number

  public allegiance: Allegiance

  public order: number

  public isNightRole: boolean

  public isAlive: boolean

  constructor() {
    this.id= Date.now()
    this.role = RoleName.VILLAGER
    this.playerName = ''
    this.modDescription = ''
    this.vote = 1
    this.allegiance = Allegiance.NEUTRAL
    this.order = 0
    this.isNightRole = false
    this.isAlive = true
  }

  nightAction(gameState: GameState, target: Player[]): boolean {
    return false
  }

  deathRattle(gameState: GameState): boolean {
    this.isAlive = false
    return true
  }

  votedOut(gameState: GameState) {
    if(this.role === RoleName.UNDERTAKER) {
      gameState.endGame(Allegiance.NEUTRAL)
    } else {
      this.isAlive = false
    }
  }
}
