const pokemonImage = document.querySelector('.pokemon_image')
const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const input = document.querySelector('.input_search')
const baseUrl = 'https://pokeapi.co/api/v2/'

async function fetchPokemon(pokemon){
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

async function renderPokemon(pokemon){
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = `${data.id}-`;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

renderPokemon(3)