import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class Huntress extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = 'Huntress ลืมตา Huntress ชี้คนที่จะยิง 1 คน'
    this.role = RoleName.HUNTRESS
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = true
    this.order = 6
  }

  nightAction(gameState: GameState, target: Player[]): boolean | null {
    if (target[0].role === RoleName.CROW) {
      gameState.huntressTarget = target[0]
      this.isNightRole = false
      return true
    } else {
      return false
    }
  }
}