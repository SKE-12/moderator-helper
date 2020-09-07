import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class Blacksmith extends Player {

  public isTargetOnce: boolean

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.BLACKSMITH
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isTargetOnce = false
    this.isNightRole = false
    this.order = 9
  }

  deathRattle(gameState: GameState): boolean {
    if(this.isTargetOnce) {
      this.isAlive = false
      return true
    } else {
      this.isTargetOnce = true
      return false
    }
  }
}