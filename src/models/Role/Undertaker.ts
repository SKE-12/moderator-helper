import Player from "../Player";
import { Allegiance, RoleName } from "../Allegiance";

export default class Undertaker extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.UNDERTAKER
    this.vote = 1
    this.allegiance = Allegiance.NEUTRAL
    this.isNightRole = false
    this.order = 14
  }
}