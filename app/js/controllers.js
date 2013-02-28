/* Controllers */

function EventListController($scope, $http) {
  $http.get('data/events.json').success(function (data) {
    $scope.events = data;
  });
}