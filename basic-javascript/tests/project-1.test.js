const assert = require('chai').assert;
const funcs = require('../src/project-1');
const sinon = require('sinon');
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
    })

    it('should return zero when input is zero', () => {
      assert.equal(multiplyByTen(0), 0);
    })

    it('should return a negative number when input is negative', () => {
      assert.equal(multiplyByTen(-0.1), -1);
    })

    it('it should return the correct answer', () => {
      const num = Math.floor(Math.random() * Math.floor(10)) + 1;
      const ans = num * 10;
      assert.equal(multiplyByTen(num), ans);
    })
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });

    it('should return a number', () => {
      assert.typeOf(subtractFive(10), 'number');
    })

    it('should return same number when input is zero', () => {
      assert.equal(subtractFive(0), 0 - 5);
    })

    it('it should return the correct answer', () => {
      const num = Math.floor(Math.random() * Math.floor(10)) + 1;
      const ans = num - 5;
      assert.equal(subtractFive(num), ans);
    })

    it('it should return the correct answer', () => {
      const num = 0 - Math.floor(Math.random() * Math.floor(10)) + 1;
      const ans = num - 5;
      assert.equal(subtractFive(num), ans);
    })
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(areSameLength('', ''), 'boolean')
    })

    it('should return the correct answer', () => {
      assert.equal(areSameLength('foo', 'bar'), true)
    })

    it('should return the correct answer', () => {
      assert.equal(areSameLength('foo', 'hello'), false)
    })
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });

    it('should return a boolean', () => {
      assert.typeOf(areEqual('', ''), 'boolean')
    })

    it('should return the correct answer for strings', () => {
      assert.equal(areEqual('foo', 'foo'), true)
    })

    it('should return the correct answer for strings', () => {
      assert.equal(areEqual('foo', 'hello'), false)

    })

    it('should return the correct answer for numbers', () => {
      assert.equal(areEqual(3, 3), true)
    })

    it('should return the correct answer for numbers', () => {
      assert.equal(areEqual(11, 2), false)
    })
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
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