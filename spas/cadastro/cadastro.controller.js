angular.module('treinadorPokemon')
    .controller('cadastroController', function (userService, pokemonService) {
        var vm = this;

        vm.pokemons = pokemonService.getPokemons();
        vm.listaPokemonTemporaria = [];

        vm.cadastrarTreinador = function (treinador) {
            userService.cadastrarTreinador(treinador);
        };
    });