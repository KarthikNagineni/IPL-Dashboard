// Write your code here

import './index.css'

const MatchCard = props => {
  const {eachRecentMatch} = props
  const stringMatches = {
    competingTeam: eachRecentMatch.competing_team,
    competingTeamLogo: eachRecentMatch.competing_team_logo,
    matchStatus: eachRecentMatch.match_status,
    result: eachRecentMatch.result,
  }

  const {competingTeam, competingTeamLogo, matchStatus, result} = stringMatches
  const statusStyle = matchStatus === 'Won' ? 'status-win' : 'status-lose'
  return (
    <li className="each-matchcard">
      <img
        src={competingTeamLogo}
        className="opp-image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="main-mat-heading">{competingTeam}</p>
      <p className="result-des">{result}</p>
      <p className={statusStyle}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
