import React from 'react'

function Show(props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };


  return (
    <>
        <h1 style={myStyle}>Gotta Catch 'Em All</h1>
        <h2>{props.pokemon.name}</h2>
        <img src={`${props.pokemon.img}.jpg`} />

        <a href='/pokemon'>Back</a>
    </>
  )
}

export default Show
