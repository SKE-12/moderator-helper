import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class Priest extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = 'Priest ลืมตา Priest เลือกคนที่จะตรวจสอบ 1 คน'
    this.role = RoleName.PRIEST
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = true
    this.order = 1
  }

  nightAction(gameState: GameState, target: Player[]) {
    if (target[0].role === RoleName.PLAGUE_DOCTOR) {
      return true
    }
    return false
  }
}