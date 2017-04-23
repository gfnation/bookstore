var app = angular.module('BookApp',[]);
app.controller('bookCtrl', function($scope){
  $scope.submit = function(){
    var data = $param({
      book: JSON.stringify({
        isbn: $scope.isbn,
        title: $scope.title,
        author: $scope.author,
        publisher: $scope.publisher,
        price: $scope.price,
        year: $scope.year,
        category: $scope.category
      })
    });
    $http.post("/api/book/", data).success(function(data, status){
      console.log('Data posted');
    })
  }
});
