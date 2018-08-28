// Cria uma diretiva tendo como parametros uma string e uma function
angular.module('treinadorPokemon')
    .directive('pesquisaPokemon', function () {
        return {
            restrict: '',
            templateUrl: 'spas/pokemon/pesquisa-pokemon-directive/pesquisa.directive.tpl.html',
            scope: {
                listaAlvo: '=',
                pokemonsLocais: '='
            },
            controller: function ($scope, pokemonService) {
                $scope.listaPokemonsPesquisado = $scope.pokemonsLocais;
                $scope.tipos = pokemonService.getTipos();
                $scope.ordenacao = false;
                $scope.atributo = 'nome';
                // $scope.chave = 'nome';

                $scope.adicionarNaListaAlvo = function (pokemon, listaAlvo) {
                    if (pokemon) {
                        if (pokemonJaExiste(pokemon, listaAlvo)) {
                            $scope.$emit('erro', { mensagem: 'Pokémon ja existe.' });
                            return;
                        } else if (listaAlvo.length > 2) {
                            $scope.$emit('erro', { mensagem: 'O límite de Pokémons por treinador foi atingido.' });
                        } else {
                            listaAlvo.push(angular.copy(pokemon));
                            pokemon.selecionado = true;
                        }
                    }
                };

                $scope.pesquisarPokemon = function (termoPesquisado, pokemons, tipos) {
                    for (var each of pokemons) {
                        each.escondido = devoEsconderPokemon(each, termoPesquisado, tipos);
                    }
                };

                $scope.filtrarPorTipos = function (tipos, pokemons, termoPesquisado) {
                    for (var each of pokemons) {
                        each.escondido = devoEsconderPokemon(each, termoPesquisado, tipos);
                    }
                };

                $scope.ordernarPorAtributo = function (atributo, ordernacao) {
                    $scope.chaveOrdenacao = atributo;
                    if ($scope.atributo === atributo) {
                        $scope.ordenacao = !ordernacao;
                    } else {
                        $scope.atributo = atributo;
                        $scope.ordenacao = false;
                    }
                };
            }
        };
    });

function pokemonJaExiste(pokemon, listaPokemons) {
    for (var pokemonTemp of listaPokemons) {
        if (pokemonTemp.id === pokemon.id) {
            return true;
        }
    }
    return false;
}

function devoEsconderPokemon(pokemon, termoPesquisado, tipos) {
    if (termoPesquisado) {
        if (!pokemon.nome.toLowerCase().includes(termoPesquisado.toLowerCase())) {
            return true;
        }
    }

    if (tipos[0] || tipos[1]) {
        if (tipos[0] && tipos[1] && tipos[0] !== tipos[1]) {
            if (pokemon.tipos[0] !== tipos[0].toLowerCase() && pokemon.tipos[0] !== tipos[1].toLowerCase() || pokemon.tipos[1] !== tipos[0].toLowerCase() && pokemon.tipos[1] !== tipos[1].toLowerCase()) {
                return true;
            }
        } else if (tipos[0] && !tipos[1]) {
            if (pokemon.tipos[0] !== tipos[0].toLowerCase() && pokemon.tipos[1] !== tipos[0].toLowerCase()) {
                return true;
            }
        } else if (!tipos[0] && tipos[1]) {
            if (pokemon.tipos[0] !== tipos[1].toLowerCase() && pokemon.tipos[1] !== tipos[1].toLowerCase()) {
                return true;
            }
        } else if (tipos[0] === tipos[1]) {
            if (pokemon.tipos[1] || pokemon.tipos[0] !== tipos[0].toLowerCase()) {
                return true;
            }
        }
    }

    return false;
}