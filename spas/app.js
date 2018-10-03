angular.module('treinadorPokemon', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider
            // .html5Mode(true)
            .hashPrefix('');
        $routeProvider
            .when('/home', {
                templateUrl: './spas/home/home.controller.tpl.html'
            })
            .when('/treinador', {
                templateUrl: './spas/treinador/treinador.controller.tpl.html'
            })
            .when('/pokemons', {
                templateUrl: './spas/pokemon/pokemon/pokemon.controller.tpl.html'
            })
            .when('/cadastrar', {
                templateUrl: './spas/cadastro/cadastro.controller.tpl.html'
            })
            .when('/login', {
                templateUrl: './spas/login/login.controller.tpl.html'
            })
            .when('/batalhar/:id', {
                templateUrl: './spas/batalha/batalha.controller.tpl.html'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }).run(function ($rootScope, userService, $location) {
        $rootScope.$on('$routeChangeStart', function ($event, next, current) {
            var usuario = userService.getUsuario();
            if (next.$$route && ((next.$$route.originalPath === '/login' || next.$$route.originalPath === '/cadastrar') && (Object.keys(usuario).length > 0))) {
                $location.path('/home');
                return;
            }

            if (next.$$route && next.$$route.originalPath !== '/login' && next.$$route.originalPath !== '/cadastrar' && (Object.keys(usuario).length === 0)) {
                $location.path('/login');
            }
        });
    });