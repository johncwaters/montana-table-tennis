import React from 'react';
//https://spacejelly.dev/posts/how-to-use-astro-to-build-react-apps-without-javascript/#why-do-i-want-to-build-static-sites

//by including the request here, it will fetch it each time on page load
const characters = await fetch('https://finalspaceapi.com/api/v0/character?limit=5').then((res) => res.json());


const Characters = () => {
  return (
    <ul>
      {characters.map(character => {
        return (
          <li key={character.id}>
            <h3>{ character.name }</h3>
            <img width={150} src={character.img_url} alt={`Image of ${character.name}`} />
          </li>
        )
      })}
    </ul>
  )
}

export default Characters;