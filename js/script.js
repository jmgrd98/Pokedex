const pokemonImage = document.querySelector('.pokemon_image')
const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const baseUrl = 'https://pokeapi.co/api/v2/'



async function fetchPokemon(pokemon){
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
}

async function renderPokemon(pokemon){
    const data = await fetchPokemon(pokemon);
    
    
    if(data){
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = `${data.id}-`;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    input.value = '';
}
    else{
        pokemonName.innerHTML = 'Not found :('
        pokemonNumber = 'Not found :('
    }}

form.addEventListener('submit', () => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})