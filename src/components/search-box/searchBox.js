import './searchBox.scss'
import { useState } from 'react'
import { getTeamInfo } from '../../services/teams.service'
import TeamInfo from '../team-info/teamInfo'

function SearchBox() {
  const [ teamName, setTeamName ] = useState('')
  const [ teamInfo, setTeamInfo ] = useState({})

  const onInputChange = (event) => {
    setTeamName(event.target.value)
  }

  const clickSearch = () => {
    getTeamInfo(teamName).then(res => {
      setTeamInfo(res)
    })
  }

  return <section>
    <div className="flex">
      <h2 className="title">Busca tu equipo favorito</h2>
      <div className="search">
        <input onChange={onInputChange} type="text" value={teamName}></input>
        <button onClick={clickSearch}>Buscar</button>
      </div>
    </div>
    <hr />
    <TeamInfo team={teamInfo}/>
  </section>
}

export default SearchBox;