// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const stringLatestMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    secondInnings: latestMatchDetails.second_innings,
    result: latestMatchDetails.result,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    secondInnings,
    result,
    umpires,
    venue,
  } = stringLatestMatchDetails

  return (
    <div className="main-latest-cont">
      <p className="latest-main-heading">{competingTeam}</p>
      <div className="top-cont">
        <div className="content-cont">
          <p className="date-sty">{date}</p>
          <p className="all-details">{venue}</p>
          <p className="all-details">{result}</p>
        </div>

        <img
          src={competingTeamLogo}
          className="opp-team-image"
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <hr />
      <h1 className="date-sty">First Innings</h1>
      <p className="all-details">{firstInnings}</p>
      <h1 className="date-sty">Second Innings</h1>
      <p className="all-details">{secondInnings}</p>
      <h1 className="date-sty">Man of the Match</h1>
      <p className="all-details">{manOfTheMatch}</p>
      <h1 className="date-sty">Empires</h1>
      <p className="all-details">{umpires}</p>
    </div>
  )
}

export default LatestMatch
