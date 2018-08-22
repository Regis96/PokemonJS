angular.module('treinadorPokemon')
    .controller('treinadorController',function(){
        var vm = this;

        vm.treinadores = [
            {nome : 'Régis', cpf : '12345678900', pokemons : []}
        ];

        vm.pokemons = [
            {nome : 'Charmander'},
            {nome : 'Squirtle'},
            {nome : 'Bulbassauro'}
        ]

        vm.cadastrarTreinador = function(treinador){
            vm.treinadores.push(treinador);
            delete vm.treinador;
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
            treinador.pokemons.push(pokemon);
            pokemon = null;
        }

        vm.concluirSalvarPokemonsNoTreinador = function(){
            vm.flagCadastrarPokemonNoTreinador = false;
            vm.treinadorParaAdicionarPokemon = null;
            vm.pokemon = null;
        }
    });