import React, {Component} from 'react';
import GamesList from './gameslist.json';


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Nom du jeu</th>
        <th>Studio</th>
        <th>Catégorie</th>
        <th>Date de sortie</th>
        <th>Plateformes</th>
        <th>Exemplaires vendus</th>
        <th>Note</th>
        <th>Commentaires</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.gamesData.map((row, index) => {
    return (
      <tr key={index}>
          <td>{row.name}</td>
          <td>{row.studio}</td>
          <td>{row.category}</td>
          <td>{row.releaseDate}</td>
          <td>{row.plateformes}</td>
          <td>{row.copiesSold}</td>
          <td>{row.rate}</td>
          <td>
              <button onClick={() => props.getComments(index)}>Voir les commentaires</button>
          </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}



const GamesTable = (props) => {
  const {gamesData, removeCharacter} = props

  return (
    <table>
      <TableHeader />
      <TableBody gamesData={gamesData} removeCharacter={removeCharacter} />
    </table>
  )
}




export default GamesTable