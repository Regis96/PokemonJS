angular.module('treinadorPokemon')
    .config(function($routeProvider,$locationProvider){
        $locationProvider
                        // .html5Mode(true)
                        .hashPrefix('');
        $routeProvider
            .when('/treinadores',{
                templateUrl: './spas/treinador/treinador.controller.tpl.html'
            })
            .when('/pokemons',{
                templateUrl: './spas/pokemon/pokemon/pokemon.controller.tpl.html'
            })
            .when('/cadastrar',{
                templateUrl: './spas/cadastro/cadastro.controller.tpl.html'
            })
            .when('/login',{
                templateUrl: './spas/login/login.controller.tpl.html'
            })
            .otherwise({
                redirectTo: '/login'
            })
    })