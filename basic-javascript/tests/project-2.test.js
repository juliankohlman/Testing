const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Tests for Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    const getBiggest = funcs.getBiggest;
    it('should be a function', () => {
      assert.typeOf(getBiggest, 'function');
    });
    it('should return one of the values', () => {
      assert.equal(getBiggest(0, 1), 1);
    });
    it('should return the correct answer', () => {
      assert.equal(getBiggest('', 'foo'), 'foo');
    });
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      assert.isString(greeting(''));
    });
    it('should return the correct answer', () => {
      assert.equal(greeting('German'), 'Guten Tag!');
    });
    it('should return the correct answer', () => {
      assert.equal(greeting('Spanish'), 'Hola!');
    });
    it('should return the correct answer', () => {
      assert.equal(greeting(), 'Hello!');
    });
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(isTenOrFive());
    });

    it('should return the correct answer', () => {
      assert.equal(isTenOrFive(10), true);
    });
    it('should return the correct answer', () => {
      assert.equal(isTenOrFive(5), true);
    });
    it('should return the correct answer', () => {
      assert.equal(isTenOrFive(), false);
    });
    it('should return the correct answer', () => {
      assert.equal(isTenOrFive('not five or ten'), false);
    });
  });

  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      assert.isBoolean(isInRange(0));
    });
    it('should return the correct answer', () => {
      assert.equal(isInRange(19), false);
    });
    it('should return the correct answer', () => {
      assert.equal(isInRange(49), true);
    });
    it('should return the correct answer', () => {
      assert.equal(isInRange(51), false);
    });
    it('should return the correct answer', () => {
      assert.equal(isInRange('21'), false);
    });
  });

  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;

    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(isInteger(0));
    });

    it('should return the correct answer', () => {
      assert.equal(isInteger(19), Number.isInteger(19));
    });

    it('should return the correct answer', () => {
      assert.equal(isInteger(19.7), Number.isInteger(19.7));
    });
  });

  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });

    it('should return a string', () => {
      assert.isString(fizzBuzz(0));
    });
    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    });

    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(5), 'buzz');
    });

    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(3), 'fizz');
    });
    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(1), 1);
    });
  });

  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;

    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(isPrime(-2));
    });

    it('should return the correct answer', () => {
      assert.equal(isPrime(11), true);
    });

    it('should return the correct answer', () => {
      assert.equal(isPrime(4), false);
    });
  });

  describe('`returnFirst`', () => {
    const returnFirst = funcs.returnFirst;

    it('should be a function', () => {
      assert.typeOf(returnFirst, 'function');
    });

    it('should return the first element', () => {
      const arr = [1, 2, 3];

      assert.equal(returnFirst(arr), 1);
    });

    it('should return undefined', () => {
      const arr = [];

      assert.equal(returnFirst(arr), undefined);
    });
  });

  describe('`returnLast`', () => {
    const returnLast = funcs.returnLast;

    it('should be a function', () => {
      assert.typeOf(returnLast, 'function');
    });

    it('should return the last element', () => {
      const arr = [1, 2, 3];

      assert.equal(returnLast(arr), 3);
    });

    it('should return undefined', () => {
      const arr = [];

      assert.equal(returnLast(arr), undefined);
    });
  });

  describe('`getArrayLength`', () => {
    const getArrayLength = funcs.getArrayLength;

    it('should be a function', () => {
      assert.typeOf(getArrayLength, 'function');
    });

    it('should return the correct length', () => {
      const arr = [1, 2, 3];

      assert.lengthOf(arr, 3);
    });

    it('should return the correct length', () => {
      const arr = [];

      assert.lengthOf(arr, 0);
    });
  });

  describe('`incrementByOne`', () => {
    const incrementByOne = funcs.incrementByOne;

    it('should be a function', () => {
      assert.typeOf(incrementByOne, 'function');
    });

    it('should return an array', () => {
      assert.isArray(incrementByOne([]));
    });

    it('should return the correct answer', () => {
      const arr = [1, 2, 3];

      assert.sameOrderedMembers(incrementByOne(arr), arr.map(e => e++));
    });
  });

  describe('`addItemToArray`', () => {
    const addItemToArray = funcs.addItemToArray;

    it('should be a function', () => {
      assert.typeOf(addItemToArray, 'function');
    });

    it('should return an array', () => {
      assert.isArray(addItemToArray([], 0));
    });

    it('should return the correct answer', () => {
      const arr = [1, 2, 3];

      assert.sameOrderedMembers(addItemToArray(arr, 4), [1, 2, 3, 4]);
    });
  });

  describe('`addItemToFront`', () => {
    const addItemToFront = funcs.addItemToFront;

    it('should be a function', () => {
      assert.typeOf(addItemToFront, 'function');
    });

    it('should return an array', () => {
      assert.isArray(addItemToFront([], 0));
    });

    it('should return the correct answer', () => {
      const arr = [1, 2, 3];

      assert.sameOrderedMembers(addItemToFront(arr, 0), [0, 1, 2, 3]);
    });
  });

  describe('`wordsToSentence`', () => {
    const wordsToSentence = funcs.wordsToSentence;

    it('should be a function', () => {
      assert.typeOf(wordsToSentence, 'function');
    });

    it('should return an array', () => {
      assert.isString(wordsToSentence([]));
    });

    it('should return the correct answer', () => {
      const arr = ['Mocha', 'Chai', 'Sinon', 'Boring'];

      assert.equal(wordsToSentence(arr), 'Mocha Chai Sinon Boring');
    });
  });

  describe('`contains`', () => {
    const contains = funcs.contains;

    it('should be a function', () => {
      assert.typeOf(contains, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(contains([]));
    });

    it('should return the correct answer', () => {
      assert.equal(contains([1, 2], 2), true);
    });

    it('should return the correct answer', () => {
      assert.equal(contains([1, 2], 3), false);
    });
  });

  describe('`addNumbers`', () => {
    const addNumbers = funcs.addNumbers;

    it('should be a function', () => {
      assert.typeOf(addNumbers, 'function');
    });

    it('should return a number', () => {
      assert.isNumber(addNumbers([]));
    });

    it('should return the correct answer', () => {
      assert.equal(addNumbers([1, 2, 3]), [1, 2, 3].reduce((s, e) => s + e));
    });
  });

  describe('`averageTestScore`', () => {
    const averageTestScore = funcs.averageTestScore;

    it('should be a function', () => {
      assert.typeOf(averageTestScore, 'function');
    });

    it('should return a number', () => {
      assert.isNumber(averageTestScore([]));
    });

    it('should return the correct answer', () => {
      assert.equal(averageTestScore([1, 2, 3]), 2);
    });

    it('should return the correct answer', () => {
      assert.equal(averageTestScore([0, 0, 0, 0]), 0);
    });
  });

  describe('`largestNumber`', () => {
    const largestNumber = funcs.largestNumber;

    it('should be a function', () => {
      assert.typeOf(largestNumber, 'function');
    });

    it('should return a number', () => {
      assert.isNumber(largestNumber([]));
    });

    it('should return the correct answer', () => {
      assert.equal(largestNumber([0, 1, 1000]), Math.max(...[0, 1, 1000]));
    });
  });
});
