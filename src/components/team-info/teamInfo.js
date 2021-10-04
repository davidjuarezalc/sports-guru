import './teamInfo.scss'

function TeamInfo({ team }) {
  return <div className="info">
    {team.strAlternate && <h3>{team.strAlternate}</h3>}
    <p>{team.strDescriptionES ? team.strDescriptionES : team.strDescriptionEN}</p>
  </div>
}

export default TeamInfo