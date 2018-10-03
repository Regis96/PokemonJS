angular.module('treinadorPokemon')
    .controller('treinadorController', treinadorController);
    
    treinadorController.$inject = [
        'userService',
        'pokemonService',
        '$rootScope',
        '$scope',
        '$timeout'
    ];

    function treinadorController (userService, pokemonService, $rootScope, $scope, $timeout) {
        var vm = this;

        userService.getUsuarios()
            .then(function (response) {
                vm.usuarios = response.data;
                $timeout($scope.$apply(vm.usuarios),100);
            }, function (error) {
                console.log(error);
            });
            
        vm.usuario = userService.getUsuario();
        vm.pokemons = pokemonService.getPokemons();
        
        angular.forEach(vm.pokemons,function(element,index){
            element.nome = 'Pikachu';
        });

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
    }