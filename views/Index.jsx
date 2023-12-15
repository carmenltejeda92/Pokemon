import React from 'react'

function Index(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };

  return (
    <>
        <h1 style={myStyle}>See All The Pokemon</h1>
        <ul>
            {props.pokemon.map((pokemon)=>{
                return<li>{pokemon.name}</li>
            })}
        </ul>
        
    </>
  )
}

export default Index
