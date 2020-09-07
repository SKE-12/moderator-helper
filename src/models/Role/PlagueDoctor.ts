import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class PlagueDoctor extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = 'Plague Doctor ลืมตา Plague Doctor ชี้คนที่จะฆ่า 1 คน'
    this.role = RoleName.PLAGUE_DOCTOR
    this.vote = 1
    this.allegiance = Allegiance.PLAGUE
    this.isNightRole = true
    this.order = 2
  }

  nightAction(gameState: GameState, target: Player[]): boolean | null {
    gameState.killTarget.push(target[0])
    return null
  }
}