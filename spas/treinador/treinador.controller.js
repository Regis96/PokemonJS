angular.module('treinadorPokemon')
    .controller('treinadorController',function(userService, pokemonService){
        var vm = this;

        vm.usuarios = userService.getUsuarios();
        vm.usuario = userService.getUsuario();
        vm.pokemons = pokemonService.getPokemons();
        // vm.apagarTreinador = function (treinador) {
        //     var novosTreinadores;
        //     novosTreinadores = vm.treinadores.filter(function(treinadorCorrente){
        //         return treinadorCorrente.nome !== treinador.nome;
        //     });

        //     vm.treinadores = novosTreinadores;
        // };


        vm.editarTreinador = function (treinador) {
            vm.treinadorEditavel = treinador;
            vm.treinadorParaAdicionarPokemon = treinador;
            vm.flagEditar = true;
        };


        vm.concluirEdicao = function(){
            vm.flagEditar = false;
            for(var i = 0; i < vm.usuario.pokemons.length; i++){
                delete vm.usuario.pokemons[i].selecionado;
            }
        };

        vm.excluirPokemonDaListaTemporaria = function(indicePokemon, listaTemporaria, pokemon){
            listaTemporaria.splice(indicePokemon, 1);
            vm.pokemons[pokemon.id].selecionado = false;
        };

        vm.selecionarTreinador = function(treinador){
            vm.treinadorSelecionado = treinador;
        };
    });