import {
  action,
  observable,
} from 'mobx';

import {
  Allegiance,
  GamePhase,
} from '../models/Allegiance';
import _ from 'lodash'
import Player from '../models/Player';
import SummaryModel from '../models/SummaryModel';

export default class GameState {
  @observable
  public gamePhase: GamePhase

  @observable.deep
  public players: Player[]

  @observable.deep
  public killTarget: Player[]

  @observable
  public huntressTarget: Player | null

  @observable.deep
  public saveTarget: Player[]

  @observable
  public winner: Allegiance | null

  @observable
  public nightSummary: SummaryModel

  @observable
  public activePlayerClasses: any[] = []

  constructor() {
    this.gamePhase = GamePhase.SETUP
    this.players = []
    this.killTarget = []
    this.saveTarget = []
    this.huntressTarget = null
    this.nightSummary = new SummaryModel()
    this.winner = null
  }

  @action.bound
  setInitialiatePlayerClasses(classes: any[]) {
    this.activePlayerClasses = classes
  }

  @action.bound
  public setPlayerAndStartGame(players: Player[]) {
    this.players = players
    this.gamePhase = GamePhase.DAY
  }

  @action.bound
  public startNight() {
    this.killTarget = []
    this.saveTarget = []
    this.huntressTarget = null
    this.gamePhase = GamePhase.NIGHT
    this.nightSummary = new SummaryModel()
  }

  @action.bound
  public getAlivePlayer(): Player[] {
    return this.players.filter(player => player.isAlive && !_.isEmpty(player.playerName))
  }

  @action.bound
  public getAliveRole(): Player[] {
    return this.players.filter(player => player.isAlive)
  }

  @action.bound
  public getMajority(): number {
    return Math.ceil((this.getAlivePlayer().length+1)/2)
  }

  @action.bound
  public getRoleForNightCall(): Player[] {
    return _.uniqWith(this.getAliveRole(), (a, b) => {
      return a.role === b.role
    })
    .filter(({ isNightRole }) => isNightRole)
    .sort((a, b) => {
      return a.order - b.order
    })
  }

  @action.bound
  public endNight() {
    const killed = this.killTarget.filter(killPlayer => {
      for (const savedPlayer of this.saveTarget) {
        return !(killPlayer.id === savedPlayer.id)
      }
      return true
    })
    console.log('saved', this.saveTarget)
    console.log('Killed', killed)
    for(const deadPlayer of killed) {
      const isDead = deadPlayer.deathRattle(this)
      if (isDead) {
        this.nightSummary.annoucement.push('Player: ' + deadPlayer.playerName + 'ถูกฆ่าตายในคืนนี้')
      }
    }
    if (this.huntressTarget) {
      this.nightSummary.annoucement.push('Player: ' + this.huntressTarget.playerName + 'ถูกฆ่าตายในคืนนี้')
    }

    this.winner = this.checkWinCondition()

    if (this.winner) {
      this.endGame(this.winner)
    }
  }

  @action.bound
  public endGame(winner: Allegiance) {
    this.gamePhase = GamePhase.END
    this.winner = winner
  }

  @action.bound
  public nightAction(player: Player, targets: Player[]): boolean | null {
    return player.nightAction(this, targets)
  }

  @action.bound
  public voteOut(player: Player) {
    player.votedOut(this)
    const winning = this.checkWinCondition()
    if(winning) {
      this.endGame(winning)
      return
    }
    this.startNight()
  }

  @action.bound
  public endDay() {
    this.gamePhase = GamePhase.NIGHT
  }

  @action.bound
  public goToDay() {
    this.gamePhase = GamePhase.DAY
  }

  @action.bound
  private checkWinCondition(): Allegiance | null {
    let villianSide = 0
    const alivePlayer = this.getAlivePlayer()
    for (const player of alivePlayer) {
      if (player.allegiance === Allegiance.PLAGUE) {
        villianSide++
      }
    }
    if (villianSide === 0) {
      return Allegiance.VILLAGER
    }
    if (villianSide >= alivePlayer.length/2) {
      return Allegiance.PLAGUE
    }
    return null
  }
}
