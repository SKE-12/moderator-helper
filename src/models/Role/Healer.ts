import Player from "../Player";
import GameState from "../../controllers/GameState";
import { Allegiance, RoleName } from "../Allegiance";

export default class Healer extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = 'Healer ลืมตา Healer ชี้คนที่จะปกป้อง 1 คน'
    this.role = RoleName.HEALER
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = true
    this.order = 5
  }

  nightAction(gameState: GameState, target: Player[]): boolean | null {
    const index = gameState.players.findIndex((player) => player.role === RoleName.APOTHECARY)
    if (index === -1 || gameState.players[index].role === RoleName.WEAK_VILLAGER) {
      return null
    }
    gameState.saveTarget.push(target[0])
    return null
  }
}