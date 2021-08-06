// Write your code here

import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeamCard} = this.props
    const {id, name, teamImageUrl} = eachTeamCard
    return (
      <Link to={`/team-matches/${id}`} className="each-teamcard-con-1">
        <li className="each-teamcard-con-2">
          <img src={teamImageUrl} className="team-image" alt={name} />
          <p className="teamcard-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
