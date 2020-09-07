import Player from "../models/Player";
import { Allegiance, GamePhase } from "../models/Allegiance";
import SummaryModel from "../models/SummaryModel";

export default class GameState {
  public gamePhase: GamePhase

  public players: Player[]

  public killTarget: Player[]

  public huntressTarget: Player | null

  public saveTarget: Player[]

  public winner: Allegiance | null

  public nightSummary: SummaryModel

  constructor() {
    this.gamePhase = GamePhase.SETUP
    this.players = []
    this.killTarget = []
    this.saveTarget = []
    this.huntressTarget = null
    this.nightSummary = new SummaryModel()
    this.winner = null
  }

  public setPlayerAndStartGame(players: Player[]) {
    this.players = players
    this.gamePhase = GamePhase.DAY
  }

  public startNight() {
    this.killTarget = []
    this.saveTarget = []
    this.huntressTarget = null
    this.gamePhase = GamePhase.NIGHT
    this.nightSummary = new SummaryModel()
  }

  public endNight() {
    this.killTarget.filter(killPlayer => {
      for (const savedPlayer of this.saveTarget) {
        return !(killPlayer.id === savedPlayer.id)
      }
      return true
    })
    for(const deadPlayer of this.killTarget) {
      const isDead = deadPlayer.deathRattle(this)
      if (isDead) {
        this.nightSummary.annoucement.push('Player: ' + deadPlayer.playerName + 'ถูกฆ่าตายในคืนนี้')
      }
    }
    if (this.huntressTarget) {
      this.nightSummary.annoucement.push('Player: ' + this.huntressTarget.playerName + 'ถูกฆ่าตายในคืนนี้')
    }
    this.gamePhase = GamePhase.DAY
  }

  public endGame(winner: Allegiance) {
    this.gamePhase = GamePhase.END
    this.winner = winner
  }

  public nightAction(player: Player, targets: Player[]) {
    player.nightAction(this, targets)
  }

  public voteOut(player: Player) {
    player.votedOut(this)
  }
}