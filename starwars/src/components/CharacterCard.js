import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    background-color: black;
    padding: 10px;
    width: 300px;
    color: white;
    text-align: left;
    margin: 10px;
    border: 15px solid white;
    border-radius: 10px;
    font-family: 'Optima', sans-serif;
    font-size: 1.6rem;
    h2 {
        text-align: Center;
        letter-spacing: 1px;
        font-size: 2.3rem;
    }
`;

function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Hair Color: {props.hair}</p>
      <p>Skin: {props.skin}</p>
      <p>Eye Color: {props.eyes}</p>
      <p>Year of birth: {props.birth}</p>
      <p>Gender: {props.gender}</p>
      
    </Card>
  )
}

export default CharacterCard;