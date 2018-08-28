angular.module('treinadorPokemon')
    .service('pokemonService', function () {
        this.getTipos = function () {
            return [
                'Normal',
                'Lutador',
                'Voador',
                'Venenoso',
                'Terrestre',
                'Pedra',
                'Inseto',
                'Fantasma',
                'Fogo',
                'Agua',
                'Eletrico',
                'Psiquico',
                'Gelo',
                'Dragao',
                'Fada'
            ];
        };
        this.getPokemons = function () {
            var obj = [{ "icone": "./icones/1.png", "nome": "Bulbasaur", "tipos": ["venenoso", "grama"], "level": 5, "id": 0, "ataque": 13, "defesa": 13, "vida": 68 }, { "icone": "./icones/2.png", "nome": "Ivysaur", "tipos": ["venenoso", "grama"], "level": 5, "id": 1, "ataque": 5, "defesa": 1, "vida": 52 }, { "icone": "./icones/3.png", "nome": "Venusaur", "tipos": ["venenoso", "grama"], "level": 5, "id": 2, "ataque": 8, "defesa": 18, "vida": 37 }, { "icone": "./icones/4.png", "nome": "Charmander", "tipos": ["fogo"], "level": 5, "id": 3, "ataque": 18, "defesa": 15, "vida": 61 }, { "icone": "./icones/5.png", "nome": "Charmeleon", "tipos": ["fogo"], "level": 5, "id": 4, "ataque": 12, "defesa": 3, "vida": 84 }, { "icone": "./icones/6.png", "nome": "Charizard", "tipos": ["voador", "fogo"], "level": 5, "id": 5, "ataque": 8, "defesa": 16, "vida": 67 }, { "icone": "./icones/7.png", "nome": "Squirtle", "tipos": ["agua"], "level": 5, "id": 6, "ataque": 4, "defesa": 15, "vida": 62 }, { "icone": "./icones/8.png", "nome": "Wartortle", "tipos": ["agua"], "level": 5, "id": 7, "ataque": 9, "defesa": 1, "vida": 50 }, { "icone": "./icones/9.png", "nome": "Blastoise", "tipos": ["agua"], "level": 5, "id": 8, "ataque": 4, "defesa": 5, "vida": 63 }, { "icone": "./icones/10.png", "nome": "Caterpie", "tipos": ["inseto"], "level": 5, "id": 9, "ataque": 10, "defesa": 16, "vida": 49 }, { "icone": "./icones/11.png", "nome": "Metapod", "tipos": ["inseto"], "level": 5, "id": 10, "ataque": 19, "defesa": 15, "vida": 57 }, { "icone": "./icones/12.png", "nome": "Butterfree", "tipos": ["voador", "inseto"], "level": 5, "id": 11, "ataque": 14, "defesa": 10, "vida": 83 }, { "icone": "./icones/13.png", "nome": "Weedle", "tipos": ["venenoso", "inseto"], "level": 5, "id": 12, "ataque": 13, "defesa": 10, "vida": 34 }, { "icone": "./icones/14.png", "nome": "Kakuna", "tipos": ["venenoso", "inseto"], "level": 5, "id": 13, "ataque": 10, "defesa": 5, "vida": 60 }, { "icone": "./icones/15.png", "nome": "Beedrill", "tipos": ["venenoso", "inseto"], "level": 5, "id": 14, "ataque": 2, "defesa": 10, "vida": 48 }, { "icone": "./icones/16.png", "nome": "Pidgey", "tipos": ["normal", "voador"], "level": 5, "id": 15, "ataque": 7, "defesa": 16, "vida": 43 }, { "icone": "./icones/17.png", "nome": "Pidgeotto", "tipos": ["normal", "voador"], "level": 5, "id": 16, "ataque": 5, "defesa": 8, "vida": 99 }, { "icone": "./icones/18.png", "nome": "Pidgeot", "tipos": ["normal", "voador"], "level": 5, "id": 17, "ataque": 10, "defesa": 11, "vida": 70 }, { "icone": "./icones/19.png", "nome": "Rattata", "tipos": ["normal"], "level": 5, "id": 18, "ataque": 17, "defesa": 7, "vida": 56 }, { "icone": "./icones/20.png", "nome": "Raticate", "tipos": ["normal"], "level": 5, "id": 19, "ataque": 17, "defesa": 4, "vida": 92 }, { "icone": "./icones/21.png", "nome": "Spearow", "tipos": ["normal", "voador"], "level": 5, "id": 20, "ataque": 12, "defesa": 7, "vida": 42 }, { "icone": "./icones/22.png", "nome": "Fearow", "tipos": ["normal", "voador"], "level": 5, "id": 21, "ataque": 7, "defesa": 6, "vida": 46 }, { "icone": "./icones/23.png", "nome": "Ekans", "tipos": ["venenoso"], "level": 5, "id": 22, "ataque": 7, "defesa": 6, "vida": 32 }, { "icone": "./icones/24.png", "nome": "Arbok", "tipos": ["venenoso"], "level": 5, "id": 23, "ataque": 15, "defesa": 3, "vida": 88 }, { "icone": "./icones/25.png", "nome": "Pikachu", "tipos": ["eletrico"], "level": 5, "id": 24, "ataque": 7, "defesa": 19, "vida": 27 }, { "icone": "./icones/26.png", "nome": "Raichu", "tipos": ["eletrico"], "level": 5, "id": 25, "ataque": 12, "defesa": 14, "vida": 48 }, { "icone": "./icones/27.png", "nome": "Sandshrew", "tipos": ["terrestre"], "level": 5, "id": 26, "ataque": 17, "defesa": 16, "vida": 77 }, { "icone": "./icones/28.png", "nome": "Sandslash", "tipos": ["terrestre"], "level": 5, "id": 27, "ataque": 10, "defesa": 2, "vida": 68 }, { "icone": "./icones/29.png", "nome": "Nidoran-f", "tipos": ["venenoso"], "level": 5, "id": 28, "ataque": 10, "defesa": 14, "vida": 83 }, { "icone": "./icones/30.png", "nome": "Nidorina", "tipos": ["venenoso"], "level": 5, "id": 29, "ataque": 6, "defesa": 10, "vida": 53 }, { "icone": "./icones/31.png", "nome": "Nidoqueen", "tipos": ["venenoso", "terrestre"], "level": 5, "id": 30, "ataque": 13, "defesa": 4, "vida": 96 }, { "icone": "./icones/32.png", "nome": "Nidoran-m", "tipos": ["venenoso"], "level": 5, "id": 31, "ataque": 5, "defesa": 5, "vida": 93 }, { "icone": "./icones/33.png", "nome": "Nidorino", "tipos": ["venenoso"], "level": 5, "id": 32, "ataque": 14, "defesa": 13, "vida": 81 }, { "icone": "./icones/34.png", "nome": "Nidoking", "tipos": ["venenoso", "terrestre"], "level": 5, "id": 33, "ataque": 6, "defesa": 16, "vida": 67 }, { "icone": "./icones/35.png", "nome": "Clefairy", "tipos": ["fada"], "level": 5, "id": 34, "ataque": 18, "defesa": 6, "vida": 39 }, { "icone": "./icones/36.png", "nome": "Clefable", "tipos": ["fada"], "level": 5, "id": 35, "ataque": 1, "defesa": 8, "vida": 66 }, { "icone": "./icones/37.png", "nome": "Vulpix", "tipos": ["fogo"], "level": 5, "id": 36, "ataque": 12, "defesa": 17, "vida": 90 }, { "icone": "./icones/38.png", "nome": "Ninetales", "tipos": ["fogo"], "level": 5, "id": 37, "ataque": 9, "defesa": 11, "vida": 54 }, { "icone": "./icones/39.png", "nome": "Jigglypuff", "tipos": ["normal", "fada"], "level": 5, "id": 38, "ataque": 1, "defesa": 17, "vida": 58 }, { "icone": "./icones/40.png", "nome": "Wigglytuff", "tipos": ["normal", "fada"], "level": 5, "id": 39, "ataque": 10, "defesa": 3, "vida": 52 }, { "icone": "./icones/41.png", "nome": "Zubat", "tipos": ["voador", "venenoso"], "level": 5, "id": 40, "ataque": 3, "defesa": 7, "vida": 33 }, { "icone": "./icones/42.png", "nome": "Golbat", "tipos": ["voador", "venenoso"], "level": 5, "id": 41, "ataque": 14, "defesa": 17, "vida": 38 }, { "icone": "./icones/43.png", "nome": "Oddish", "tipos": ["venenoso", "grama"], "level": 5, "id": 42, "ataque": 8, "defesa": 1, "vida": 82 }, { "icone": "./icones/44.png", "nome": "Gloom", "tipos": ["venenoso", "grama"], "level": 5, "id": 43, "ataque": 11, "defesa": 10, "vida": 71 }, { "icone": "./icones/45.png", "nome": "Vileplume", "tipos": ["venenoso", "grama"], "level": 5, "id": 44, "ataque": 10, "defesa": 12, "vida": 25 }, { "icone": "./icones/46.png", "nome": "Paras", "tipos": ["inseto", "grama"], "level": 5, "id": 45, "ataque": 9, "defesa": 11, "vida": 49 }, { "icone": "./icones/47.png", "nome": "Parasect", "tipos": ["inseto", "grama"], "level": 5, "id": 46, "ataque": 2, "defesa": 14, "vida": 67 }, { "icone": "./icones/48.png", "nome": "Venonat", "tipos": ["venenoso", "inseto"], "level": 5, "id": 47, "ataque": 4, "defesa": 4, "vida": 20 }, { "icone": "./icones/49.png", "nome": "Venomoth", "tipos": ["venenoso", "inseto"], "level": 5, "id": 48, "ataque": 18, "defesa": 6, "vida": 55 }, { "icone": "./icones/50.png", "nome": "Diglett", "tipos": ["terrestre"], "level": 5, "id": 49, "ataque": 10, "defesa": 13, "vida": 96 }, { "icone": "./icones/51.png", "nome": "Dugtrio", "tipos": ["terrestre"], "level": 5, "id": 50, "ataque": 4, "defesa": 10, "vida": 23 }, { "icone": "./icones/52.png", "nome": "Meowth", "tipos": ["normal"], "level": 5, "id": 51, "ataque": 14, "defesa": 3, "vida": 38 }, { "icone": "./icones/53.png", "nome": "Persian", "tipos": ["normal"], "level": 5, "id": 52, "ataque": 6, "defesa": 17, "vida": 83 }, { "icone": "./icones/54.png", "nome": "Psyduck", "tipos": ["agua"], "level": 5, "id": 53, "ataque": 11, "defesa": 17, "vida": 81 }, { "icone": "./icones/55.png", "nome": "Golduck", "tipos": ["agua"], "level": 5, "id": 54, "ataque": 2, "defesa": 15, "vida": 82 }, { "icone": "./icones/56.png", "nome": "Mankey", "tipos": ["lutador"], "level": 5, "id": 55, "ataque": 13, "defesa": 3, "vida": 25 }, { "icone": "./icones/57.png", "nome": "Primeape", "tipos": ["lutador"], "level": 5, "id": 56, "ataque": 3, "defesa": 15, "vida": 68 }, { "icone": "./icones/58.png", "nome": "Growlithe", "tipos": ["fogo"], "level": 5, "id": 57, "ataque": 9, "defesa": 13, "vida": 60 }, { "icone": "./icones/59.png", "nome": "Arcanine", "tipos": ["fogo"], "level": 5, "id": 58, "ataque": 17, "defesa": 11, "vida": 83 }, { "icone": "./icones/60.png", "nome": "Poliwag", "tipos": ["agua"], "level": 5, "id": 59, "ataque": 4, "defesa": 1, "vida": 44 }, { "icone": "./icones/61.png", "nome": "Poliwhirl", "tipos": ["agua"], "level": 5, "id": 60, "ataque": 12, "defesa": 3, "vida": 95 }, { "icone": "./icones/62.png", "nome": "Poliwrath", "tipos": ["lutador", "agua"], "level": 5, "id": 61, "ataque": 3, "defesa": 15, "vida": 82 }, { "icone": "./icones/63.png", "nome": "Abra", "tipos": ["psiquico"], "level": 5, "id": 62, "ataque": 8, "defesa": 3, "vida": 96 }, { "icone": "./icones/64.png", "nome": "Kadabra", "tipos": ["psiquico"], "level": 5, "id": 63, "ataque": 18, "defesa": 1, "vida": 94 }, { "icone": "./icones/65.png", "nome": "Alakazam", "tipos": ["psiquico"], "level": 5, "id": 64, "ataque": 13, "defesa": 6, "vida": 53 }, { "icone": "./icones/66.png", "nome": "Machop", "tipos": ["lutador"], "level": 5, "id": 65, "ataque": 14, "defesa": 4, "vida": 35 }, { "icone": "./icones/67.png", "nome": "Machoke", "tipos": ["lutador"], "level": 5, "id": 66, "ataque": 18, "defesa": 19, "vida": 47 }, { "icone": "./icones/68.png", "nome": "Machamp", "tipos": ["lutador"], "level": 5, "id": 67, "ataque": 8, "defesa": 4, "vida": 40 }, { "icone": "./icones/69.png", "nome": "Bellsprout", "tipos": ["venenoso", "grama"], "level": 5, "id": 68, "ataque": 9, "defesa": 15, "vida": 72 }, { "icone": "./icones/70.png", "nome": "Weepinbell", "tipos": ["venenoso", "grama"], "level": 5, "id": 69, "ataque": 3, "defesa": 5, "vida": 26 }, { "icone": "./icones/71.png", "nome": "Victreebel", "tipos": ["venenoso", "grama"], "level": 5, "id": 70, "ataque": 3, "defesa": 8, "vida": 33 }, { "icone": "./icones/72.png", "nome": "Tentacool", "tipos": ["venenoso", "agua"], "level": 5, "id": 71, "ataque": 19, "defesa": 5, "vida": 79 }, { "icone": "./icones/73.png", "nome": "Tentacruel", "tipos": ["venenoso", "agua"], "level": 5, "id": 72, "ataque": 13, "defesa": 7, "vida": 58 }, { "icone": "./icones/74.png", "nome": "Geodude", "tipos": ["terrestre", "pedra"], "level": 5, "id": 73, "ataque": 15, "defesa": 12, "vida": 34 }, { "icone": "./icones/75.png", "nome": "Graveler", "tipos": ["terrestre", "pedra"], "level": 5, "id": 74, "ataque": 5, "defesa": 2, "vida": 34 }, { "icone": "./icones/76.png", "nome": "Golem", "tipos": ["terrestre", "pedra"], "level": 5, "id": 75, "ataque": 10, "defesa": 15, "vida": 44 }, { "icone": "./icones/77.png", "nome": "Ponyta", "tipos": ["fogo"], "level": 5, "id": 76, "ataque": 4, "defesa": 15, "vida": 73 }, { "icone": "./icones/78.png", "nome": "Rapidash", "tipos": ["fogo"], "level": 5, "id": 77, "ataque": 8, "defesa": 15, "vida": 94 }, { "icone": "./icones/79.png", "nome": "Slowpoke", "tipos": ["agua", "psiquico"], "level": 5, "id": 78, "ataque": 17, "defesa": 16, "vida": 74 }, { "icone": "./icones/80.png", "nome": "Slowbro", "tipos": ["agua", "psiquico"], "level": 5, "id": 79, "ataque": 9, "defesa": 9, "vida": 48 }, { "icone": "./icones/81.png", "nome": "Magnemite", "tipos": ["aco", "eletrico"], "level": 5, "id": 80, "ataque": 4, "defesa": 8, "vida": 30 }, { "icone": "./icones/82.png", "nome": "Magneton", "tipos": ["aco", "eletrico"], "level": 5, "id": 81, "ataque": 19, "defesa": 6, "vida": 27 }, { "icone": "./icones/83.png", "nome": "Farfetchd", "tipos": ["normal", "voador"], "level": 5, "id": 82, "ataque": 1, "defesa": 11, "vida": 76 }, { "icone": "./icones/84.png", "nome": "Doduo", "tipos": ["normal", "voador"], "level": 5, "id": 83, "ataque": 18, "defesa": 10, "vida": 64 }, { "icone": "./icones/85.png", "nome": "Dodrio", "tipos": ["normal", "voador"], "level": 5, "id": 84, "ataque": 13, "defesa": 4, "vida": 93 }, { "icone": "./icones/86.png", "nome": "Seel", "tipos": ["agua"], "level": 5, "id": 85, "ataque": 10, "defesa": 7, "vida": 59 }, { "icone": "./icones/87.png", "nome": "Dewgong", "tipos": ["agua", "gelo"], "level": 5, "id": 86, "ataque": 7, "defesa": 13, "vida": 42 }, { "icone": "./icones/88.png", "nome": "Grimer", "tipos": ["venenoso"], "level": 5, "id": 87, "ataque": 2, "defesa": 6, "vida": 48 }, { "icone": "./icones/89.png", "nome": "Muk", "tipos": ["venenoso"], "level": 5, "id": 88, "ataque": 10, "defesa": 10, "vida": 62 }, { "icone": "./icones/90.png", "nome": "Shellder", "tipos": ["agua"], "level": 5, "id": 89, "ataque": 16, "defesa": 11, "vida": 93 }, { "icone": "./icones/91.png", "nome": "Cloyster", "tipos": ["agua", "gelo"], "level": 5, "id": 90, "ataque": 10, "defesa": 10, "vida": 26 }, { "icone": "./icones/92.png", "nome": "Gastly", "tipos": ["venenoso", "fantasma"], "level": 5, "id": 91, "ataque": 3, "defesa": 6, "vida": 62 }, { "icone": "./icones/93.png", "nome": "Haunter", "tipos": ["venenoso", "fantasma"], "level": 5, "id": 92, "ataque": 5, "defesa": 16, "vida": 38 }, { "icone": "./icones/94.png", "nome": "Gengar", "tipos": ["venenoso", "fantasma"], "level": 5, "id": 93, "ataque": 1, "defesa": 11, "vida": 33 }, { "icone": "./icones/95.png", "nome": "Onix", "tipos": ["terrestre", "pedra"], "level": 5, "id": 94, "ataque": 16, "defesa": 1, "vida": 20 }, { "icone": "./icones/96.png", "nome": "Drowzee", "tipos": ["psiquico"], "level": 5, "id": 95, "ataque": 6, "defesa": 2, "vida": 70 }, { "icone": "./icones/97.png", "nome": "Hypno", "tipos": ["psiquico"], "level": 5, "id": 96, "ataque": 14, "defesa": 14, "vida": 93 }, { "icone": "./icones/98.png", "nome": "Krabby", "tipos": ["agua"], "level": 5, "id": 97, "ataque": 8, "defesa": 11, "vida": 60 }, { "icone": "./icones/99.png", "nome": "Kingler", "tipos": ["agua"], "level": 5, "id": 98, "ataque": 11, "defesa": 5, "vida": 22 }, { "icone": "./icones/100.png", "nome": "Voltorb", "tipos": ["eletrico"], "level": 5, "id": 99, "ataque": 18, "defesa": 8, "vida": 66 }, { "icone": "./icones/101.png", "nome": "Electrode", "tipos": ["eletrico"], "level": 5, "id": 100, "ataque": 6, "defesa": 13, "vida": 22 }, { "icone": "./icones/102.png", "nome": "Exeggcute", "tipos": ["grama", "psiquico"], "level": 5, "id": 101, "ataque": 15, "defesa": 1, "vida": 33 }, { "icone": "./icones/103.png", "nome": "Exeggutor", "tipos": ["grama", "psiquico"], "level": 5, "id": 102, "ataque": 8, "defesa": 15, "vida": 64 }, { "icone": "./icones/104.png", "nome": "Cubone", "tipos": ["terrestre"], "level": 5, "id": 103, "ataque": 13, "defesa": 15, "vida": 34 }, { "icone": "./icones/105.png", "nome": "Marowak", "tipos": ["terrestre"], "level": 5, "id": 104, "ataque": 8, "defesa": 5, "vida": 21 }, { "icone": "./icones/106.png", "nome": "Hitmonlee", "tipos": ["lutador"], "level": 5, "id": 105, "ataque": 13, "defesa": 4, "vida": 89 }, { "icone": "./icones/107.png", "nome": "Hitmonchan", "tipos": ["lutador"], "level": 5, "id": 106, "ataque": 3, "defesa": 9, "vida": 69 }, { "icone": "./icones/108.png", "nome": "Lickitung", "tipos": ["normal"], "level": 5, "id": 107, "ataque": 16, "defesa": 13, "vida": 88 }, { "icone": "./icones/109.png", "nome": "Koffing", "tipos": ["venenoso"], "level": 5, "id": 108, "ataque": 14, "defesa": 3, "vida": 88 }, { "icone": "./icones/110.png", "nome": "Weezing", "tipos": ["venenoso"], "level": 5, "id": 109, "ataque": 6, "defesa": 10, "vida": 28 }, { "icone": "./icones/111.png", "nome": "Rhyhorn", "tipos": ["terrestre", "pedra"], "level": 5, "id": 110, "ataque": 5, "defesa": 17, "vida": 27 }, { "icone": "./icones/112.png", "nome": "Rhydon", "tipos": ["terrestre", "pedra"], "level": 5, "id": 111, "ataque": 11, "defesa": 16, "vida": 71 }, { "icone": "./icones/113.png", "nome": "Chansey", "tipos": ["normal"], "level": 5, "id": 112, "ataque": 6, "defesa": 17, "vida": 23 }, { "icone": "./icones/114.png", "nome": "Tangela", "tipos": ["grama"], "level": 5, "id": 113, "ataque": 1, "defesa": 6, "vida": 49 }, { "icone": "./icones/115.png", "nome": "Kangaskhan", "tipos": ["normal"], "level": 5, "id": 114, "ataque": 15, "defesa": 12, "vida": 54 }, { "icone": "./icones/116.png", "nome": "Horsea", "tipos": ["agua"], "level": 5, "id": 115, "ataque": 7, "defesa": 15, "vida": 86 }, { "icone": "./icones/117.png", "nome": "Seadra", "tipos": ["agua"], "level": 5, "id": 116, "ataque": 12, "defesa": 1, "vida": 59 }, { "icone": "./icones/118.png", "nome": "Goldeen", "tipos": ["agua"], "level": 5, "id": 117, "ataque": 10, "defesa": 6, "vida": 22 }, { "icone": "./icones/119.png", "nome": "Seaking", "tipos": ["agua"], "level": 5, "id": 118, "ataque": 15, "defesa": 18, "vida": 79 }, { "icone": "./icones/120.png", "nome": "Staryu", "tipos": ["agua"], "level": 5, "id": 119, "ataque": 12, "defesa": 14, "vida": 22 }, { "icone": "./icones/121.png", "nome": "Starmie", "tipos": ["agua", "psiquico"], "level": 5, "id": 120, "ataque": 3, "defesa": 19, "vida": 39 }, { "icone": "./icones/122.png", "nome": "Mr-mime", "tipos": ["fada", "psiquico"], "level": 5, "id": 121, "ataque": 14, "defesa": 5, "vida": 43 }, { "icone": "./icones/123.png", "nome": "Scyther", "tipos": ["voador", "inseto"], "level": 5, "id": 122, "ataque": 16, "defesa": 8, "vida": 80 }, { "icone": "./icones/124.png", "nome": "Jynx", "tipos": ["gelo", "psiquico"], "level": 5, "id": 123, "ataque": 5, "defesa": 6, "vida": 62 }, { "icone": "./icones/125.png", "nome": "Electabuzz", "tipos": ["eletrico"], "level": 5, "id": 124, "ataque": 1, "defesa": 2, "vida": 21 }, { "icone": "./icones/126.png", "nome": "Magmar", "tipos": ["fogo"], "level": 5, "id": 125, "ataque": 18, "defesa": 16, "vida": 39 }, { "icone": "./icones/127.png", "nome": "Pinsir", "tipos": ["inseto"], "level": 5, "id": 126, "ataque": 17, "defesa": 10, "vida": 97 }, { "icone": "./icones/128.png", "nome": "Tauros", "tipos": ["normal"], "level": 5, "id": 127, "ataque": 16, "defesa": 8, "vida": 76 }, { "icone": "./icones/129.png", "nome": "Magikarp", "tipos": ["agua"], "level": 5, "id": 128, "ataque": 4, "defesa": 9, "vida": 53 }, { "icone": "./icones/130.png", "nome": "Gyarados", "tipos": ["voador", "agua"], "level": 5, "id": 129, "ataque": 1, "defesa": 9, "vida": 38 }, { "icone": "./icones/131.png", "nome": "Lapras", "tipos": ["agua", "gelo"], "level": 5, "id": 130, "ataque": 9, "defesa": 10, "vida": 42 }, { "icone": "./icones/132.png", "nome": "Ditto", "tipos": ["normal"], "level": 5, "id": 131, "ataque": 10, "defesa": 14, "vida": 87 }, { "icone": "./icones/133.png", "nome": "Eevee", "tipos": ["normal"], "level": 5, "id": 132, "ataque": 5, "defesa": 6, "vida": 80 }, { "icone": "./icones/134.png", "nome": "Vaporeon", "tipos": ["agua"], "level": 5, "id": 133, "ataque": 11, "defesa": 14, "vida": 48 }, { "icone": "./icones/135.png", "nome": "Jolteon", "tipos": ["eletrico"], "level": 5, "id": 134, "ataque": 8, "defesa": 17, "vida": 40 }, { "icone": "./icones/136.png", "nome": "Flareon", "tipos": ["fogo"], "level": 5, "id": 135, "ataque": 12, "defesa": 4, "vida": 80 }, { "icone": "./icones/137.png", "nome": "Porygon", "tipos": ["normal"], "level": 5, "id": 136, "ataque": 2, "defesa": 3, "vida": 67 }, { "icone": "./icones/138.png", "nome": "Omanyte", "tipos": ["pedra", "agua"], "level": 5, "id": 137, "ataque": 8, "defesa": 18, "vida": 50 }, { "icone": "./icones/139.png", "nome": "Omastar", "tipos": ["pedra", "agua"], "level": 5, "id": 138, "ataque": 13, "defesa": 18, "vida": 58 }, { "icone": "./icones/140.png", "nome": "Kabuto", "tipos": ["pedra", "agua"], "level": 5, "id": 139, "ataque": 8, "defesa": 12, "vida": 21 }, { "icone": "./icones/141.png", "nome": "Kabutops", "tipos": ["pedra", "agua"], "level": 5, "id": 140, "ataque": 1, "defesa": 18, "vida": 94 }, { "icone": "./icones/142.png", "nome": "Aerodactyl", "tipos": ["voador", "pedra"], "level": 5, "id": 141, "ataque": 14, "defesa": 5, "vida": 27 }, { "icone": "./icones/143.png", "nome": "Snorlax", "tipos": ["normal"], "level": 5, "id": 142, "ataque": 4, "defesa": 9, "vida": 21 }, { "icone": "./icones/144.png", "nome": "Articuno", "tipos": ["voador", "gelo"], "level": 5, "id": 143, "ataque": 1, "defesa": 15, "vida": 96 }, { "icone": "./icones/145.png", "nome": "Zapdos", "tipos": ["voador", "eletrico"], "level": 5, "id": 144, "ataque": 15, "defesa": 15, "vida": 45 }, { "icone": "./icones/146.png", "nome": "Moltres", "tipos": ["voador", "fogo"], "level": 5, "id": 145, "ataque": 11, "defesa": 2, "vida": 86 }, { "icone": "./icones/147.png", "nome": "Dratini", "tipos": ["dragao"], "level": 5, "id": 146, "ataque": 9, "defesa": 7, "vida": 48 }, { "icone": "./icones/148.png", "nome": "Dragaonair", "tipos": ["dragao"], "level": 5, "id": 147, "ataque": 18, "defesa": 19, "vida": 54 }, { "icone": "./icones/149.png", "nome": "Dragonite", "tipos": ["voador", "dragao"], "level": 5, "id": 148, "ataque": 3, "defesa": 2, "vida": 73 }, { "icone": "./icones/150.png", "nome": "Mewtwo", "tipos": ["psiquico"], "level": 5, "id": 149, "ataque": 16, "defesa": 1, "vida": 83 }, { "icone": "./icones/151.png", "nome": "Mew", "tipos": ["psiquico"], "level": 5, "id": 150, "ataque": 10, "defesa": 14, "vida": 56 }];
            return obj;
        };
    });