/**
 * Created by ТерземанЕА on 13.12.2016.
 */
angular.module("PizzaApp", [])
    .controller("PizzaConstructor", function ($scope) {

        $scope.bases = [
            {name: 'Тонкое дрожжевое тесто', price: 30},
            {name: 'Пышное дрожжевое тесто', price: 35},
            {name: 'Слоёное тесто', price: 40}];

        $scope.souces = [
            {name: 'Белый', price: 35},
            {name: 'Томатный', price: 35},
            {name: 'Сырный', price: 40}];

        $scope.ingredients = [
            {name: 'Помидоры', price: 20},
            {name: 'Сыр', price: 70},
            {name: 'Грибы', price: 40},
            {name: 'Ветчина', price: 60},
            {name: 'Петрушка', price: 15},
            {name: 'Оливки', price: 30}];

        $scope.AddIngredient = function ()
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
            return $scope.pizza.base.price +
                $scope.pizza.souce.price +
                _.reduce($scope.pizza.ingredients, function (memo, ing) {

                return memo + ing.price * ing.count},0);//3 аргумента

            $scope.pizza.ingredients = _.without($scope.pizza.ingredients, ing);
            //Возвращает массив 1 без данного элемента 2 (через запятую)
            $scope.ingredients.push(ing);
        };

        $scope.pizza =
        {
            base: $scope.bases[0],
            souce: $scope.souces[0],
            ingredients: []
        };


    });
