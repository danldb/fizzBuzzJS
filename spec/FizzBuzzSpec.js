describe('FizzBuzz', function(){
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it('should know that a number is divisible by a divisor', function() {
    expect(fizzBuzz.divisibleBy(3, 3)).toBe(true);
  });

  it('should know that a number is divisible by a divisor', function() {
    expect(fizzBuzz.divisibleBy(3, 1)).toBe(false);
  });

  it('should return Fizz for 3', function() {
    expect(fizzBuzz.play(3)).toBe('Fizz');
  });

  it('should return Buzz for 5', function() {
    expect(fizzBuzz.play(5)).toBe('Buzz');
  });

  it('should return FizzBuzz for 15', function() {
    expect(fizzBuzz.play(15)).toBe('FizzBuzz');
  });

  it('should return 1 for 1', function() {
    expect(fizzBuzz.play(1)).toBe(1);
  });

  it('should return 99 for 99', function() {
    expect(fizzBuzz.play(1)).toBe(1);
  });

});