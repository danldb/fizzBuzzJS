function FizzBuzz() {
  this.divisibleBy = function(divisor, number) {
    return number % divisor === 0;
  };
  this.play = function(number) {
    if (this.divisibleBy(15, number)) {
      return 'FizzBuzz'
    }
    else if (this.divisibleBy(3, number)) {
      return 'Fizz'
    }
    else if (this.divisibleBy(5, number)){
      return 'Buzz'
    }
    else {
      return number
    }
  };
}
