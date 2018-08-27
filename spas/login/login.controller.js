angular.module('treinadorPokemon')
    .controller('loginController',['$scope','$timeout','userService',
                function ($scope,$timeout,userService) {
            var uservm = this;
            // $scope.$on('erro',function(event,args){
            //     uservm.setErro(args.mensagem);

            // });
            

            uservm.tentarLogar = function (usuario) {
                userService.logar(usuario);
            };


            uservm.deslogar = function () {
                this.userSevice.deslogar();
            };
        }]);