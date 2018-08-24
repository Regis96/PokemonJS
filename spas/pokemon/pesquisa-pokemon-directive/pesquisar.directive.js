// Cria uma diretiva tendo como parametros uma string e uma function
angular.module('treinadorPokemon')
    .directive('pesquisaPokemon', function (pokemonService) {
        return {
            restrict: '',
            templateUrl: 'pesquisa.directive.tpl.html',
            scope: {
                listaAlvo: '=',
            },
            controller: ['$scope', function ($scope) {
                $scope.pokemonsLocais = pokemonService.getPokemons();
                $scope.listaPokemonsPesquisado = $scope.pokemonsLocais;
                $scope.ordenacao = false;
                $scope.atributo = 'nome';

                $scope.adicionarNaListaAlvo = function (pokemon, listaAlvo) {
                    if (pokemon) {
                        if (pokemonJaExiste(pokemon, listaAlvo)) {
                            $scope.$emit('erro', { mensagem: 'Pokémon ja existe.' });
                            return;
                        } else if (listaAlvo.length > 2) {
                            $scope.$emit('erro', { mensagem: 'O límite de Pokémons por treinador foi atingido.' });
                        } else {
                            listaAlvo.push(angular.copy(pokemon));
                        }
                    }
                }

                $scope.pesquisarPokemon = function (termoPokemonPesquisado, pokemons) {
                    var listaTempPokemons = [];
                    for (var indice in $scope.pokemonsLocais) {
                        if ($scope.pokemonsLocais[indice].nome.toUpperCase().includes(termoPokemonPesquisado.toUpperCase())) {
                            listaTempPokemons.push($scope.pokemonsLocais[indice]);
                            continue;
                        }
                        for (var tipo of $scope.pokemonsLocais[indice]['tipos']) {
                            if (tipo.toUpperCase().includes(termoPokemonPesquisado.toUpperCase())) {
                                listaTempPokemons.push($scope.pokemonsLocais[indice]);
                                break;
                            }
                        }
                    }
                    $scope.listaPokemonsPesquisado = listaTempPokemons;
                }

                $scope.ordernarPorAtributo = function (atributo, ordernacao) {
                    $scope.chaveOrdenacao = atributo;
                    if ($scope.atributo === atributo) {
                        $scope.ordenacao = !ordernacao;
                    } else {
                        $scope.atributo = atributo;
                        $scope.ordenacao = false;
                    }
                }
            }]


        }
    });

function pokemonJaExiste(pokemon, listaPokemons) {
    for (var pokemonTemp of listaPokemons) {
        if (pokemonTemp.id === pokemon.id) {
            return true;
        }
    }
    return false;
}
