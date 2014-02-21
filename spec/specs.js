describe('fibonacciSequence', function () {
  it('should return the correct Fibonacci value for the index', function () {
    fibonacciSequence(9).should.equal(34);
  });
});
//modification
describe('fibonacciSequence', function () {
  it('should return the correct Fibonacci value for the index', function () {
    fib(9).should.equal(34);
  });
});
