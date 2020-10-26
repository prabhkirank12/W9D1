//ask a TA
//arguments
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

//rest
function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};

// console.log(sum(1, 2, 3, 4)); // === 10;
// console.log(sum(1, 2, 3, 4, 5));// === 15;

//arguments
Function.prototype.myBind = function (context) {
    const outerArgs = [];
    for (let i = 1; i < arguments.length; i ++) {
      outerArgs.push(arguments[i]);
    }
    const that = this; //saves the context into a variable
    return function () {
      const innerArgs = [];
      for (let i = 0; i < arguments.length; i++) {
        innerArgs.push(arguments[i]);
      }
        return that.apply(context, outerArgs.concat(innerArgs));
    };
};
//rest
Function.prototype.myBind = function (context, ...bindArgs) {
  const that = this; //saves the context into a variable
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// sumThree(4, 20, 6); // == 30

// // you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30

function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    
    if (numbers.length === numArgs) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i ++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  }
}

// const exampleSum = curriedSum(4);
// console.log(exampleSum(5)(10)(12)(2));

//uses .apply
Function.prototype.curry = function (numArgs) {
    const that = this;
  let args = [];
   return function _curried(num){
    args.push(num);
    if (args.length === numArgs){
        return that.apply(null, args);
    }else {
        return _curried;
    }
  };
}

//uses ...
Function.prototype.curry = function (numArgs) {
  const that = this;
  let args = [];
   return function _curried(num){
    args.push(num);
    if (args.length === numArgs){
        return that(...args);
    }else {
        return _curried;
    }
  };
}


function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(2)(1)(1));
//return a function
//will accept single argument
//add args to arg array
//check of numArgs w/ args.length