import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class Apothecary extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.APOTHECARY
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = false
    this.order = 4
  }

  deathRattle(gameState: GameState): boolean {
    gameState.players.filter((player) => player.role === RoleName.HEALER).forEach(player => player.isNightRole = false)
    this.isAlive = false
    return true
  }

  votedOut(gameState: GameState): boolean {
    gameState.players.filter((player) => player.role === RoleName.HEALER).forEach(player => player.isNightRole = false)
    this.isAlive = false
    return true
  }
}