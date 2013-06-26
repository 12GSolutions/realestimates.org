angular.element(document).ready(function() {

  module = angular.module('RealEstimateModule', []);
  module.HOURS_IN_ONE_DAY = 8;

  module.filter('riskAssessment', function() {
      return function(risk) {
        if(risk >= 1 && risk < 2) {
          assessment = "I know this like the back of my hand.";
        }
        else if( risk >= 2 && risk < 3) {
          assessment = "I've had bad experiences with this in the past."
        }
        else if( risk >= 3 && risk < 4) {
          assessment = "I'm heading into completely uncharted territory here..."
        }
        else if( risk >= 4 && risk < 5) {
          assessment = "I'm seriously serious, you don't want to go there.";
        }
        else {
          assessment = "<a target='_blank' href='http://www.youtube.com/watch?v=k7LpNJdhMwU'>I told you not to go there!</a>";
        }
        return "<span class='risk risk-"+Math.floor(risk)+"'>" + assessment + "</span>";
      };
    });

  module.filter('inMinutes', function() {
    return function(hours) {
      return hours * 60;
    };
  });

  module.filter('withMinutesLabel', function() {
    return function(minutes) {
      var label = "minutes";
      if(minutes == 1) {
        label = "minute";
      }
      return  minutes + " " + label;
    };
  });

  module.filter('inDays', function() {
    return function(hours) {
      return hours / module.HOURS_IN_ONE_DAY ;
    };
  });

  module.filter('withDaysLabel', function() {
    return function(days) {
      var label = "days";
      if(days == 1) {
        label = "day";
      }
      return  days + " " + label;
    };
  });

  angular.bootstrap(document, ['RealEstimateModule']);


});

function RealEstimate($scope) {
  $scope.estimate = 0;
  $scope.risk = 1.0;
  $scope.buffer = 1.25;
}



