import Player from "../Player";
import { Allegiance, RoleName } from "../Allegiance";

export default class Sentry extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.SENTRY
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.order = 12
    this.isNightRole = false
  }

}