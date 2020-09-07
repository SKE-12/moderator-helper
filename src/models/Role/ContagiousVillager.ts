import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class ContagiousVillager extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.CONTAGIOUS_VILLAGER
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = false
    this.order = 10
  }

  deathRattle(gameState: GameState): boolean {
    const index = gameState.players.findIndex((player) => {
      return player.role === RoleName.CONTAGIOUS_VILLAGER
    })
    if (index !== -1) {
      gameState.players[index].isAlive = false
    }
    return true
  }
}