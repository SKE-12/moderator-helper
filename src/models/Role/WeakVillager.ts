import Player from "../Player";
import { Allegiance, RoleName } from "../Allegiance";

export default class WeakVillager extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.WEAK_VILLAGER
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = false
    this.order = 16
  }
}