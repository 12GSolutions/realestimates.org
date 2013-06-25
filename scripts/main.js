
function RealEstimate($scope) {
  $scope.estimate = 0;
  $scope.risk = 1;
  $scope.buffer = 1.25;
  $scope.estimateChanged = function() {
    location.href="#";location.href="#realEstimate";
  }
}

angular.element(document).ready(function () {
});
