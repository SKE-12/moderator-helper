import {
  Allegiance,
  RoleName,
} from '../Allegiance';
import Player from '../Player';

export default class Villager extends Player {

  constructor(playerName: string) {
    super()
    this.playerName = playerName
    this.modDescription = ''
    this.role = RoleName.VILLAGER
    this.vote = 1
    this.allegiance = Allegiance.VILLAGER
    this.isNightRole = false
    this.order = 15
  }
}
