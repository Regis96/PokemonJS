angular.module('treinadorPokemon')
    .controller('usuarioController',function(){
        var uservm = this;

        var usuarios = [
            {login: 'regis', senha: '1'},
            {login: 'italo', senha: '87654321'}
        ]

        uservm.usuario = {logado:true};

        uservm.tentarLogar = function(usuario){
            for(var each of usuarios){
                if(each.login === usuario.login){
                    if(each.senha === usuario.senha){
                        uservm.usuario.logado = true;
                        uservm.usuario.login = '';
                        uservm.usuario.senha = '';
                    }
                }
            }
        }

        uservm.deslogar = function(){
            this.usuario.logado = false;
        }
    });