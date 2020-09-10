import GameState from '../../controllers/GameState';
import {
  Allegiance,
  RoleName,
} from '../Allegiance';
import Player from '../Player';

export default class FallenAngel extends Player {

  public isAbilityUse: boolean

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = 'Fallen Angel ลืมตา Fallen Angel คนนี้กำลังจะตาย หากจะใช้ความสามารถให้เลือกคนที่จะตายแทน'
    this.role = RoleName.FALLEN_ANGEL
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.order = 7
    this.isNightRole = true
    this.isAbilityUse = false
  }

  nightAction(gameState: GameState, target: Player[]):  boolean | null {
    if (this.isAbilityUse) {
      return null
    }
    const changeIndex = gameState.killTarget.findIndex((player) => {
      return target[0].id === player.id
    })
    const savedIndex = gameState.saveTarget.findIndex(player =>  {
      return gameState.killTarget[changeIndex].id === player.id
    })
    const killIndex = gameState.players.findIndex(player =>  player.id === target[1].id)
    if (savedIndex !== -1) {
      return null
    }
    gameState.killTarget.splice(changeIndex, 1)

    gameState.players[killIndex].deathRattle(gameState)
    gameState.nightSummary.annoucement.push('Player: ' + gameState.players[killIndex].playerName + 'ถูกฆ่าตายในคืนนี้')

    this.isAbilityUse = true
    this.modDescription = 'Fallen Angel ลืมตา Fallen Angel คนนี้กำลังจะตาย หากจะใช้ความสามารถให้เลือกคนที่จะตายแทน (Fallen Angel ได้ใช้ความสามารถไปแล้ว)'
    return null
  }
}
