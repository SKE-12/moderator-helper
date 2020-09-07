import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class Crow extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = 'Crow ลืมตา Crow ชี้เป้าหมายที่ต้องการจะฆ่า 1 คน'
    this.role = RoleName.CROW
    this.vote = 1
    this.allegiance = Allegiance.PLAGUE
    this.isNightRole = true
    this.order = 3
  }

  nightAction(gameState: GameState, target: Player[]): boolean {
    if (target[0].role === RoleName.WEAK_VILLAGER || target[0].role === RoleName.SENTRY || target[0].role === RoleName.CONTAGIOUS_VILLAGER) {
      gameState.killTarget.push(target[0])
      return true
    }
    return false
  }
}