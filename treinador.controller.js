angular.module('treinadorPokemon')
    .controller('treinadorController', ['$scope','pokemonService',function ($scope,pokemonService) {
        var vm = this;
        
        

        vm.treinadores = [
            { nome: 'Régis', cpf: '12345678900', idade: 21, pokemons: [] }
        ];

        vm.pokemons = pokemonService.getPokemons();
        vm.listaPokemonTemporaria = [];

        vm.cadastrarTreinador = function (treinador) {
            treinador['pokemons'] = vm.listaPokemonTemporaria ? vm.listaPokemonTemporaria : [];
            vm.treinadores.push(treinador);
            delete vm.treinador;
            vm.flagFormularioCadastrar = false;
            vm.listaPokemonTemporaria = [];
            vm.pokemon = null;
        }

        vm.apagarTreinador = function (treinador) {
            var novosTreinadores;
            novosTreinadores = vm.treinadores.filter(treinadorCorrente => {
                return treinadorCorrente.nome !== treinador.nome;
            });

            vm.treinadores = novosTreinadores;
        }

        vm.editarTreinador = function (treinador) {
            vm.treinadorEditavel = treinador;
            vm.treinadorParaAdicionarPokemon = treinador;
            vm.flagEditar = true;
        }

        vm.concluirEdicao = function (treinador) {
            vm.treinadorEditavel = null;
            vm.flagEditar = false;
            vm.pokemon = null;
        }

        vm.mostrarTelaDeCadastro = function () {
            vm.flagFormularioCadastrar = !vm.flagFormularioCadastrar;
        }

        vm.excluirPokemonDaListaTemporaria = function (indicePokemon, listaTemporaria) {
            listaTemporaria.splice(indicePokemon, 1);
        }

        vm.excluirPokemonDoTreinador = function (indicePokemon, treinador) {
            treinador.pokemons.splice(indicePokemon, 1);
        }

        vm.mostrarTelaDePesquisa = function () {
            vm.flagPesquisarPokemon = !vm.flagPesquisarPokemon;
            vm.listaPokemonsPesquisado = vm.pokemons;
        }
    }]);

