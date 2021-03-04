// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import {Suspense} from 'react'
import {fetchPokemon, PokemonDataView, PokemonErrorBoundary} from '../pokemon'
import {PokemonInfoFallback} from '../pokemon'
import {createResource} from '../utils'

const pokemonResource = createResource(fetchPokemon('pikachu'))

function PokemonInfo() {
  const pokemon = pokemonResource.read()

  console.log(pokemon)

  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <PokemonErrorBoundary>
          <Suspense fallback={PokemonInfoFallback}>
            <PokemonInfo />
          </Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App