angular.module('treinadorPokemon')
    .controller('treinadorController',function(){
        var vm = this;

        vm.treinadores = [
            {nome : 'Régis', cpf : '12345678900', pokemons : []}
        ];

        vm.pokemons = [
            {nome : 'Charmander', id: 0},
            {nome : 'Squirtle', id: 1},
            {nome : 'Bulbassauro', id: 2}
        ]

        vm.cadastrarTreinador = function(treinador){
            treinador['pokemons'] = [];
            vm.treinadores.push(treinador);
            delete vm.treinador;
            vm.flagFormularioCadastrar = false;
        }

        vm.apagarTreinador = function(treinador){
            var novosTreinadores;
            novosTreinadores = vm.treinadores.filter(treinadorCorrente => {
                return treinadorCorrente.nome !== treinador.nome;
            });
            
            vm.treinadores = novosTreinadores;
        }

        vm.editarTreinador = function(treinador){
            vm.treinadorEditavel = treinador;
            vm.flagEditar = true;
        }

        vm.concluirEdicao = function(treinador){
            vm.treinadorEditavel = null;
            vm.flagEditar = false;
        }

        vm.abrirFormularioDePokemons = function(treinador){
            vm.treinadorParaAdicionarPokemon = treinador;
            vm.flagCadastrarPokemonNoTreinador = true;
        }

        vm.salvarPokemonsNoTreinador = function(pokemon,treinador){
            for(var pokemonTemp of treinador.pokemons){
                if(pokemonTemp.id === pokemon.id){
                    //mostrar mensagem de erro
                    return;
                }
            }
            treinador.pokemons.push(pokemon);
            pokemon = null;
        }

        vm.concluirSalvarPokemonsNoTreinador = function(){
            vm.flagCadastrarPokemonNoTreinador = false;
            vm.treinadorParaAdicionarPokemon = null;
            vm.pokemon = null;
        }

        vm.mostrarTelaDeCadastro = function(){
            console.log('x')
            vm.flagFormularioCadastrar = true;
        }
    });