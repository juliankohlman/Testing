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
      assert.equal(getBiggest(0, 1), 1)
    })
    it('should return the correct answer', () => {
      assert.equal(getBiggest('', 'foo'), 'foo');
    })
  });

  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      assert.isString(greeting(''));
    })
    it('should return the correct answer', () => {
      assert.equal(greeting('German'), 'Guten Tag!');
    })
    it('should return the correct answer', () => {
      assert.equal(greeting('Spanish'), 'Hola!');
    })
    it('should return the correct answer', () => {
      assert.equal(greeting(), 'Hello!');
    })
  });

  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(isTenOrFive());
    })

    it('should return the correct answer', () => {
      assert.equal(isTenOrFive(10), true);
    })
    it('should return the correct answer', () => {
      assert.equal(isTenOrFive(5), true);
    })
    it('should return the correct answer', () => {
      assert.equal(isTenOrFive(), false);
    })
    it('should return the correct answer', () => {
      assert.equal(isTenOrFive('not five or ten'), false);
    })

  });


  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      assert.isBoolean(isInRange(0))
    })
    it('should return the correct answer', () => {
      assert.equal(isInRange(19), false);
    })
    it('should return the correct answer', () => {
      assert.equal(isInRange(49), true);
    })
    it('should return the correct answer', () => {
      assert.equal(isInRange(51), false);
    })
    it('should return the correct answer', () => {
      assert.equal(isInRange('21'), false);
    })
  });


  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;

    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });

    it('should return a boolean', () => {
      assert.isBoolean(isInteger(0))
    })

    it('should return the correct answer', () => {
      assert.equal(isInteger(19), Number.isInteger(19));
    })

    it('should return the correct answer', () => {
      assert.equal(isInteger(19.7), Number.isInteger(19.7));
    })
  });


  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });

    it('should return a string', () => {
      assert.isString(fizzBuzz(0));
    })
    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    })

    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(5), 'buzz');
    })

    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(3), 'fizz');
    })
    it('should return the correct answer', () => {
      assert.equal(fizzBuzz(1), 1);
    })

  });


  describe('`isPrime`', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
  });


  describe('`returnFirst`', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
  });


  describe('`returnLast`', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
  });


  describe('`getArrayLength`', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
  });


  describe('`incrementByOne`', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
  });


  describe('`addItemToArray`', () => {
    it('should be a function', () => {
      const addItemToArray = funcs.addItemToArray;
      assert.typeOf(addItemToArray, 'function');
    });
  });


  describe('`addItemToFront`', () => {
    it('should be a function', () => {
      const addItemToFront = funcs.addItemToFront;
      assert.typeOf(addItemToFront, 'function');
    });
  });


  describe('`wordsToSentence`', () => {
    it('should be a function', () => {
      const wordsToSentence = funcs.wordsToSentence;
      assert.typeOf(wordsToSentence, 'function');
    });
  });


  describe('`contains`', () => {
    it('should be a function', () => {
      const contains = funcs.contains;
      assert.typeOf(contains, 'function');
    });
  });


  describe('`addNumbers`', () => {
    it('should be a function', () => {
      const addNumbers = funcs.addNumbers;
      assert.typeOf(addNumbers, 'function');
    });
  });


  describe('`averageTestScore`', () => {
    it('should be a function', () => {
      const averageTestScore = funcs.averageTestScore;
      assert.typeOf(averageTestScore, 'function');
    });
  });


  describe('`largestNumber`', () => {
    it('should be a function', () => {
      const largestNumber = funcs.largestNumber;
      assert.typeOf(largestNumber, 'function');
    });
  });
});