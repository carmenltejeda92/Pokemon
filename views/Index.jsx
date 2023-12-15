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
            {props.pokemon.map((pokemon, i)=>{
                return<li><a href={`/pokemon/${i}`}>{pokemon.name}</a></li>
            })}
        </ul>
        
    </>
  )
}

export default Index
