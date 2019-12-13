import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import axios from 'axios';

const CharacterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `;

function getRandPageNumber() {
  return Math.floor( Math.random() * 8 + 2)
}

function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [page] = useState( getRandPageNumber() );

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)   
      .then( response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.log('It broke', error));
  },[page]);

  // console.log(characters);
      
  return (
    <div className='container'>
      <CharacterContainer>
          { characters.map( (item, index) => {
            return <CharacterCard 
              key={index}
              name={item.name}
              height={item.height}
              mass={item.mass}
              hair={item.hair_color}
              skin={item.skin_color}
              eyes={item.eye_color}
              birth={item.birth_year}
              gender={item.gender}
            />

          }) }
      </CharacterContainer>
    </div>
  );
}

export default CharacterList;