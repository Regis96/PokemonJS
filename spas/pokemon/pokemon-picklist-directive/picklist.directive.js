(function (angular) {
    angular.module('treinadorPokemon')
        .directive('picklist', picklist);

    function picklist() {
        return {
            restrict: '',
            templateUrl: 'spas/pokemon/pokemon-picklist-directive/picklist.directive.tpl.html',
            scope: {
                listaOriginal: '=',
                listaItemSelecionado: '=',
                parametroComparacao: '@', // Recebe uma String
                tituloColuna: '='
            },
            link: function ($scope) {
                $scope.listaTemporaria = angular.copy($scope.listaOriginal);

                $scope.adicionarItemLista = function () {
                    $scope.listaTemporaria.forEach((element, indice) => {
                        if (element.isSelected) {
                            delete element.isSelected;
                            $scope.listaItemSelecionado.push(angular.copy(element));
                            element.flagDelete = true;
                        }
                    });
                    $scope.listaTemporaria = $scope.listaTemporaria.filter(function (element) {
                        return !element.flagDelete;
                    });
                };

                $scope.adicionarTodosItensLista = function () {
                    $scope.listaItemSelecionado = angular.copy($scope.listaOriginal);
                    $scope.listaTemporaria = [];
                };

                $scope.excluirItemListaTemporaria = function () {
                    angular.forEach($scope.listaItemSelecionado, function (objeto, indice) {
                        if (objeto.isSelected) {
                            delete objeto.isSelected;
                            $scope.listaTemporaria.push(angular.copy(objeto));
                            objeto.flagDelete = true;
                        }
                    });
                    $scope.listaItemSelecionado = $scope.listaItemSelecionado.filter(function (objeto) {
                        return !objeto.flagDelete;
                    });
                    if ($scope.parametroComparacao) {
                        $scope.listaTemporaria.sort(function (a, b) {
                            return a[$scope.parametroComparacao] - b[$scope.parametroComparacao];
                        });
                    }
                };

                $scope.excluirTodosItensListaTemporaria = function () {
                    $scope.listaTemporaria = angular.copy($scope.listaOriginal);
                    $scope.listaItemSelecionado = [];
                };
            }
        };
    }
})(angular);