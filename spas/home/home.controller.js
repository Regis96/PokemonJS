(function (angular) {
    angular.module('treinadorPokemon')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$scope',
        '$timeout',
        'userService'
    ];

    function homeController($scope,$timeout,userService) {
        var vm = this;

        vm.treinadores = [];
        vm.treinador = userService.getUsuario();

        userService.getUsuarios().then(function (response) {
            vm.treinadores = response.data;
            $timeout($scope.$apply(vm.treinadores),100);
        },function(error){

        });
    }
})(angular);