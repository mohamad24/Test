
loginApp.controller('loginCtrl',['$scope','$http',function($scope,$http)  {

    $scope.login= function()
    {
        $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(function (r){
            $scope.user = r.data;
        }, function(e)  {
            $scope.errorMessage = e.data.message;
        });
    }



    $scope.changepass = function () {


        $http.post('/api/change', { password:$scope.newpassword , cpassword:$scope.confirm}).then(function (r){
            $scope.user = r.data;
        }, function(e)  {
            $scope.errorMessage = e.data.message;
        });


        }




}]);
