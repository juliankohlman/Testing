const assert = require('chai').assert;
const funcs = require('../src/project-1');
// we've gone ahead and gotten a start here for you, except,
// for some reason, none of our current
// assertions are working. first step is to make sure all
// these assertions work. `then make sure you
// have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the
// functions and get expected output.
// hint 2. - you should test to see if the expected return output
// is of a specified type,  as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    const multiplyByTen = funcs.multiplyByTen;

    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(multiplyByTen(10), 'number');
    });

    it('should return zero when input is zero', () => {
      assert.equal(multiplyByTen(0), 0);
    });

    it('should return a negative number when input is negative', () => {
      assert.equal(multiplyByTen(-0.1), -1);
    });

    it('it should return the correct answer', () => {
      const num = Math.floor(Math.random() * Math.floor(10)) + 1;
      const ans = num * 10;
      assert.equal(multiplyByTen(num), ans);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(subtractFive(10), 'number');
    });

    it('should return same number when input is zero', () => {
      assert.equal(subtractFive(0), 0 - 5);
    });

    it('it should return the correct answer', () => {
      const num = Math.floor(Math.random() * Math.floor(10)) + 1;
      const ans = num - 5;
      assert.equal(subtractFive(num), ans);
    });

    it('it should return the correct answer', () => {
      const num = 0 - Math.floor(Math.random() * Math.floor(10)) + 1;
      const ans = num - 5;
      assert.equal(subtractFive(num), ans);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(areSameLength('', ''), 'boolean');
    });

    it('should return the correct answer', () => {
      assert.equal(areSameLength('foo', 'bar'), true);
    });

    it('should return the correct answer', () => {
      assert.equal(areSameLength('foo', 'hello'), false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(areEqual('', ''), 'boolean');
    });

    it('should return the correct answer for strings', () => {
      assert.equal(areEqual('foo', 'foo'), true);
    });

    it('should return the correct answer for strings', () => {
      assert.equal(areEqual('foo', 'hello'), false);
    });

    it('should return the correct answer for numbers', () => {
      assert.equal(areEqual(3, 3), true);
    });

    it('should return the correct answer for numbers', () => {
      assert.equal(areEqual(11, 2), false);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;

    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(lessThanNinety(1), 'boolean');
    });

    it('should return the correct answer', () => {
      assert.equal(lessThanNinety(100), false);
    });

    it('should return the correct answer', () => {
      assert.equal(lessThanNinety(89), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;

    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(greaterThanFifty(1), 'boolean');
    });

    it('should return the correct answer', () => {
      assert.equal(greaterThanFifty(51), true);
    });

    it('should return the correct answer', () => {
      assert.equal(greaterThanFifty(49), false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;

    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(add(0, 0), 'number');
    });

    it('should return the correct answer', () => {
      assert.equal(add(5, 1), 6);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;

    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(subtract(0, 0), 'number');
    });

    it('should return the correct answer', () => {
      assert.equal(subtract(5, 1), 4);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;

    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(divide(1, 1), 'number');
    });

    it('should return the correct answer', () => {
      assert.equal(divide(10, 2), 5);
    });

    it('should return Infinity when dividing by zero', () => {
      assert.equal(divide(1, 0), Infinity);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;

    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(multiply(1, 1), 'number');
    });

    it('should return the correct answer', () => {
      assert.equal(multiply(2, 5), 10);
    });

    it('should return zero when multiplying by zero', () => {
      assert.equal(multiply(1, 0), 0);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;

    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(getRemainder(10, 2), 'number');
    });

    it('should return the correct answer', () => {
      assert.equal(getRemainder(11, 2), 1);
    });

    it('should return NaN when dividing by zero', () => {
      assert.isNaN(
        getRemainder(1, 0),
        'Cannot get a remainder from dividing by zero.',
      );
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;

    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(isEven(1));
    });

    it('should return the correct answer', () => {
      assert.equal(isEven(50), true);
    });

    it('should return the correct answer', () => {
      assert.equal(isEven(49), false);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;

    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(isOdd(1));
    });

    it('should return the correct answer', () => {
      assert.equal(isOdd(49), true);
    });
    it('should return the correct answer', () => {
      assert.equal(isOdd(50), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
