import Player from "../Player";
import { Allegiance, RoleName } from "../Allegiance";

export default class Elder extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.ELDER
    this.vote = 2
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = false
    this.order = 11
  }

}