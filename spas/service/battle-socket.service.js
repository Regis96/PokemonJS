(function(angular){
    angular.module('treinadorPokemon')
        .service('batalhaService',batalhaService);

        batalhaService.$inject = [
            '$scope'
        ];

        var url = '';
        function batalhaService($scope){
            $scope.socket = new WebSocket(url);
        }
})(angular);