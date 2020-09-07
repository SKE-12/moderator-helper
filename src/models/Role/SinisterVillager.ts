import Player from "../Player";
import { Allegiance, RoleName } from "../Allegiance";

export default class SinisterVillager extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.SINISTER_VILLAGER
    this.vote = 1
    this.allegiance = Allegiance.PLAGUE
    this.isNightRole = false
    this.order = 13
  }
}