/**
 * Created by ТерземанЕА on 13.12.2016.
 */
angular.module("KitchenApp", [])
    .controller("KitchenConstructor", function ($scope) {

        $scope.bases = [ //тип столешницы
            {name: 'ЛДСП', price: 2},
            {name: 'Мраморные', price: 3}];

        $scope.shkaf = [ //ручки шкафов
            {name: 'Обычные', price: 250},
            {name: 'Хромированные', price: 350},
            {name: 'Позолоченные', price: 300}];

        $scope.no = [ //ножки шкафов
            {name: 'Обычные', price: 35},
            {name: 'Хромированные', price: 40}];

        //$scope.dv = [ //шкафы
        //    {name: '1 дверные', price: 35, square: 0.3},
        //   {name: '2 дверные', price: 35, square: 0.6}];

        $scope.ingredients = [  //Типы шкафов
            {name: 'Подвесные 1 дверные', price: 250, square: 0, nogi: 0, ruchki: 1},
            {name: 'Угловые 1 дверные', price: 350, square: 5600, nogi: 1, ruchki: 1},
            {name: 'Напольные 1 дверные', price: 300, square: 3000, nogi: 1, ruchki: 1},
            {name: 'Подвесные 2 дверные', price: 250, square: 0, nogi: 0, ruchki: 1},
            {name: 'Напольные 2 дверные', price: 300, square: 6000, nogi: 1, ruchki: 1},
            {name: 'Барная стойка', price: 1000, square: 3000, nogi: 1, ruchki: 0}];

        $scope.AddSh = function ()
        {
            $scope.shkaf = _.without($scope.shkaf, $scope.currentIng1);
            //Возвращает массив 1 без данного элемента 2 (через запятую)
            $scope.currentIng1.count = 1;
            $scope.pizza.shkaf.push($scope.currentIng1);
        };

        $scope.RemoveIng1 = function (ing1)
        {
            $scope.pizza.shkaf = _.without($scope.pizza.shkaf, ing1);
            //Возвращает массив 1 без данного элемента 2 (через запятую)
            $scope.shkaf.push(ing1);
        };

        $scope.num = function() {
            $scope.c = ($scope.newItem * $scope.newItem1);
            //$scope.newItem = "";
        }





        $scope.AddIngredient = function ()//тип шкафов
        {
            $scope.ingredients = _.without($scope.ingredients, $scope.currentIng);
            //Возвращает массив 1 без данного элемента 2 (через запятую)
            $scope.currentIng.count = 1;
            $scope.pizza.ingredients.push($scope.currentIng);
        };

        $scope.RemoveIng = function (ing)
        {
            $scope.pizza.ingredients = _.without($scope.pizza.ingredients, ing);
            //Возвращает массив 1 без данного элемента 2 (через запятую)
            $scope.ingredients.push(ing);
        };

        $scope.TotalPrice = function ()
        {
            return _.reduce($scope.pizza.ingredients, function (memo, ing) {
                return memo + (ing.square * ing.count * $scope.pizza.base.price) + (ing.count*ing.price)
                    + ($scope.pizza.no.price * ing.count * 4 * ing.nogi) + (ing.count*$scope.pizza.shkaf.price * ing.ruchki)},0);//3 аргумента

            $scope.pizza.ingredients = _.without($scope.pizza.ingredients, ing);
            //Возвращает массив 1 без данного элемента 2 (через запятую)
            $scope.ingredients.push(ing);
        };

        $scope.pizza =
        {
            base: $scope.bases[0],
            shkaf: [],
            no: [],
            ingredients: []
        };


    });
