(function(angular){
    angular.module('treinadorPokemon')
        .controller('batalhaController',batalhaController);

        batalhaController.$inject = [
            'userService',
            '$timeout',
            '$routeParams'
        ];

        function batalhaController(userService, $timeout, $routeParams){
            var vm = this;

            vm.carregando = true;

            vm.treinador = userService.getUsuario();
            vm.timeTreinador = [];
            vm.oponente = userService.getUsuario($routeParams.id);

            $timeout(function(){
                vm.carregando = false;
                vm.selecionando = true;
            },2000);

            vm.setPronto = function(){
                vm.carregando = true;
                vm.selecionando = false;
                $timeout(function(){
                    vm.carregando = false;
                },2000);
            };
        }
})(angular);