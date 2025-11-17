let nomes= ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard']
let fotos = [
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/005.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png'
]

let indice = 0
document.getElementById("pokemon_foto").src = fotos[indice]
document.getElementById("pokemon_numero")
document.getElementById("pokemon_nome").innerText = nomes [indice]
