angular.module('treinadorPokemon')
    .controller('usuarioController',['$scope','$timeout',function ($scope,$timeout) {
            var uservm = this;

            $scope.$on('erro',function(event,args){
                uservm.setErro(args.mensagem);

            })

            var usuarios = [
                { login: 'regis', senha: '1' },
                { login: 'italo', senha: '87654321' }
            ]

            uservm.usuario = { logado: true };

            uservm.tentarLogar = function (usuario) {
                for (var each of usuarios) {
                    if (each.login === usuario.login) {
                        if (each.senha === usuario.senha) {
                            uservm.usuario.logado = true;
                            uservm.usuario.login = '';
                            uservm.usuario.senha = '';
                            uservm.erro = false;
                            return;
                        }
                    }
                }
                uservm.setErro('Usúario ou senha incorretos.');
            }

            uservm.setErro = function (mensagem) {
                uservm.mensagemErro = mensagem;
                uservm.erro = true;
                $timeout(function(){
                    uservm.erro = false;
                },1500);
            }

            uservm.deslogar = function () {
                this.usuario.logado = false;
            }
        }]);