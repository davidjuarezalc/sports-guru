export function getTeamInfo(team) {
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${ team }`
  return fetch(url)
    .then((data) => data.json())
    .then((teamArray) => teamArray.teams[ 0 ])
}