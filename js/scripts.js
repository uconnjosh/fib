var fibonacciSequence = function (number) {
  var fibonacciArray = [0,1];
  for (var i = 0; i < number-1; i++) {
    fibonacciArray.push(fibonacciArray[i]+fibonacciArray[i+1]);
    console.log(fibonacciArray);
  }
  return fibonacciArray[number];
};


var fib = function(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
} else {
  return fib(number-1) + fib(number-2);
}
};

$(document).ready(function() {
  
  $("form#fibbychecky").submit(function(event) {
    number = $("input#inputNumber").val();
    var result = fibonacciSequence(number);

    $("#result").text(result);

    event.preventDefault();
  });
});
