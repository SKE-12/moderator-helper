import Player from "../Player";
import { Allegiance, RoleName } from "../Allegiance";
import GameState from "../../controllers/GameState";

export default class Beggar extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.BEGGAR
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = false
    this.order = 8
  }

  deathRattle(gameState: GameState): boolean {
    this.allegiance = Allegiance.PLAGUE
    gameState.nightSummary.annoucement.push('Beggar ได้ทำการเปลี่ยนฝั่งแล้ว')
    return false
  }
}