import React from 'react'

function Index(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };




  return (
    <>
        <nav>
            <a href="/pokemon/new"><h1>Create a New Pokemon</h1></a>
        </nav>
        <h1 style={myStyle}>See All The Pokemon</h1>
        <ul>
            {props.pokemon.map((pokemon, i)=>{
                return<li><a href={`/pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a></li>
            })}
        </ul>
        
    </>
  )
}

export default Index
