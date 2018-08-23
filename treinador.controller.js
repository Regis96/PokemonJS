angular.module('treinadorPokemon')
    .controller('treinadorController', function (pokemonService) {
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

        vm.adicionarPokemonListaTemproaria = function (pokemon, treinador) {
            if (vm.listaPokemonTemporaria) {
                if (!pokemon || pokemonJaExiste(pokemon, vm.listaPokemonTemporaria)) {
                    //mensagem de erro
                    return;
                }
                vm.listaPokemonTemporaria.push(pokemon);
            } else {
                vm.listaPokemonTemporaria = [pokemon];
            }
        }

        vm.excluirPokemonDaListaTemporaria = function (indicePokemon, listaTemporaria) {
            listaTemporaria.splice(indicePokemon, 1);
        }

        vm.excluirPokemonDoTreinador = function (indicePokemon, treinador) {
            treinador.pokemons.splice(indicePokemon, 1);
        }

        vm.adicionarPokemonTreinador = function (pokemon, treinador) {
            if (!pokemon || pokemonJaExiste(pokemon, treinador.pokemons)) {
                //mensagem de erro
                return;
            }
            treinador.pokemons.push(pokemon);
        }

        vm.mostrarTelaDePesquisa = function () {
            vm.flagPesquisarPokemon = !vm.flagPesquisarPokemon;
            vm.listaPokemonsPesquisado = vm.pokemons;
        }
    });

