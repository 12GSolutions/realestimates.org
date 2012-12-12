
function calculateRealEstimate( estimate, confidence, buffer ) {
  return Math.ceil(estimate * confidence * buffer);
}

function doFormSubmission(alertOnBlankEstimate) {
    var estimate = $("#estimate").val();
    var confidence = $("#confidence").val();
    var buffer = $("#buffer").val();

    if(alertOnBlankEstimate && !estimate) {
      alert("You must at least enter an estimate in minutes");
    }
    else {
      if(!confidence) {
        confidence = 1.0;
      }
      if(!buffer) {
        buffer = 1.25;
      }

      var realEstimate = calculateRealEstimate( parseFloat(estimate), parseFloat(confidence), parseFloat(buffer) );

      $("#realEstimate").html( realEstimate + " minutes" );
    }
}

$(document).ready(function() {

  $("#estimate").change(function() {
    doFormSubmission( false );
  });
  $("#confidence").change(function() {
    doFormSubmission( true );
  });
  $("#buffer").change(function() {
    doFormSubmission( true );
  });

  $("#calculate").click(function(event) {
    doFormSubmission( true );

    event.preventDefault();
    event.stopPropagation();
  });

  $("#estimate").focus();
});