var countUp = function(countBy, maxNumber) {
  var values = [];

  for(var i = countBy; i <= maxNumber; i += countBy){
      values.push(i);
  }
  var results = values.join(",");
  return results;
}

$(document).ready(function() {

  $("form#countUp").submit(function(event){
    var countBy = Math.abs(parseInt($("input#countBy").val()));
    var maxNumber = Math.abs(parseInt($("input#maxNumber").val()));
    var result = countUp(countBy, maxNumber);

    $("#resultstext").text(result);
    $("#resultsBox").show();

    event.preventDefault();
  });
});
