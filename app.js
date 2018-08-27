angular.module('treinadorPokemon', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider
            // .html5Mode(true)
            .hashPrefix('');
        $routeProvider
            .when('/treinadores', {
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
            .otherwise({
                redirectTo: '/login'
            })
    }).run(function ($rootScope, userService, $location) {
        $rootScope.$on('$routeChangeStart', function ($event, next, current) {
            var usuario = userService.getUsuario();
            if ((next.$$route.originalPath === '/login'
                || next.$$route.originalPath === '/cadastrar')
                && (Object.keys(usuario).length > 0)) {
                $location.path('/treinadores');
            }

            if (next.$$route.originalPath !== '/login' && next.$$route.originalPath !== '/cadastrar' && (Object.keys(usuario).length === 0)) {
                $location.path('/login');
            }
        });
    });  