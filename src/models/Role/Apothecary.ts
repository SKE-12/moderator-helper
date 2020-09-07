import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class Apothecary extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = 'Apothecary ลืมตา Apothecary ชี้คนที่จะปกป้อง 1 คน'
    this.role = RoleName.APOTHECARY
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = true
    this.order = 4
  }

  nightAction(gameState: GameState, target: Player[]): boolean {
    gameState.saveTarget.push(target[0])
    return true
  }

  deathRattle(gameState: GameState): boolean {
    gameState.players.filter((player) => player.role === RoleName.HEALER).forEach(player => player.isNightRole = false)
    this.isAlive = false
    return true
  }
}