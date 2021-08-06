// Write your code here

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {stateTeamCards: [], isLoading: true}

  componentDidMount() {
    this.fetchTeamCards()
  }

  fetchTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const stringData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({stateTeamCards: stringData, isLoading: false})
  }

  render() {
    const {stateTeamCards, isLoading} = this.state
    console.log(stateTeamCards)
    return (
      <div className="main-bg-container">
        <div className="main-heading-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-main-image"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader" className="teamcard-main-container">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="teamcard-main-container">
            {stateTeamCards.map(eachTeamCard => (
              <TeamCard eachTeamCard={eachTeamCard} key={eachTeamCard.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home

/*

      <div className="main-bg-container">
        <div className="main-heading-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-main-image"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
      </div>

                      {stateTeamCards.map(eachTeamCard => (
              <TeamCard eachTeamCard={eachTeamCard} key={eachTeamCard.id} />
            ))}


      */
