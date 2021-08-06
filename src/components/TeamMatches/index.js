// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {stateTeamMatches: {}, myId: '', isLoading: true}

  componentDidMount() {
    this.fetchTeamMatches()
  }

  fetchTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const stringData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({stateTeamMatches: stringData, myId: id, isLoading: false})
  }

  render() {
    const {stateTeamMatches, isLoading, myId} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = stateTeamMatches

    let backColor
    if (myId === 'RCB') {
      backColor = 'main-teammatch-cont-rcb'
    } else if (myId === 'KKR') {
      backColor = 'main-teammatch-cont-kkr'
    } else if (myId === 'KXP') {
      backColor = 'main-teammatch-cont-kp'
    } else if (myId === 'CSK') {
      backColor = 'main-teammatch-cont-csk'
    } else if (myId === 'RR') {
      backColor = 'main-teammatch-cont-rr'
    } else if (myId === 'MI') {
      backColor = 'main-teammatch-cont-mi'
    } else if (myId === 'SH') {
      backColor = 'main-teammatch-cont-srh'
    } else if (myId === 'DC') {
      backColor = 'main-teammatch-cont-dc'
    }

    return isLoading ? (
      <div testid="loader" className={`main-teammatch-cont ${backColor}`}>
        <Loader type="Oval" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className={`main-teammatch-cont ${backColor}`}>
        <div className="banner-image-cont">
          <img src={teamBannerUrl} className="banner-image" alt="team banner" />
        </div>
        <h1 className="teammatch-name">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <div className="main-matchcard">
          {recentMatches.map(eachRecentMatch => (
            <MatchCard
              eachRecentMatch={eachRecentMatch}
              key={eachRecentMatch.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches

/*

<LatestMatch latestMatchDetails={latestMatchDetails} />

 <div className="banner-image-cont">
          <img src={teamBannerUrl} className="banner-image" />
        </div>
        <h1 className="teammatch-name">Latest Matches</h1>

        <LatestMatch latestMatchDetails={latestMatchDetails} />

        */
