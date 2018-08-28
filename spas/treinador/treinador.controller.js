angular.module('treinadorPokemon')
    .controller('treinadorController', function (userService, pokemonService, $rootScope) {
        var vm = this;

        vm.usuarios = userService.getUsuarios();
        vm.usuario = userService.getUsuario();
        vm.pokemons = pokemonService.getPokemons();


        vm.editarTreinador = function (treinador) {
            vm.treinadorEditavel = treinador;
            vm.treinadorParaAdicionarPokemon = treinador;
            vm.flagEditar = true;
        };


        vm.concluirEdicao = function () {
            vm.flagEditar = false;
            for (var i = 0; i < vm.usuario.pokemons.length; i++) {
                delete vm.usuario.pokemons[i].selecionado;
            }
        };

        vm.excluirPokemonDaListaTemporaria = function (indicePokemon, listaTemporaria, pokemon) {
            if (listaTemporaria.length > 1) {
                listaTemporaria.splice(indicePokemon, 1);
                vm.pokemons[pokemon.id].selecionado = false;
            } else {
                $rootScope.$emit('erro', 'Minimo de 1 pokemon.');
            }
        };

        vm.selecionarTreinador = function (treinador) {
            vm.treinadorSelecionado = treinador;
        };
    });