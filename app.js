
var a = "Name"
const obj ={["a"]:"yashmin",age:23}
console.log(obj)

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}// 3 3 3 due to var and to avoid it we need to use let of IIFE

for (let j = 0; j < 3; j++) {
  Promise.resolve().then(() => {
    console.log(j);
  });
}

console.log("End");// End 0 1 2  first syncrhonus then asyncrohnous code will execute

const obj2 = {
  name: "MERN",
  regular() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj2.regular();// MERN

const fn = obj2.regular;
fn();// here fn is standalone function  whose this no more bound to the object  so it will give undefined
// to avoid it use bind method which strictly bound the fn to the object

obj2.arrow();//undefined as arrow function inherit this lexically to avoid it we need to use 
// the normal function or rape the arrown function inisde the normal function

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

queueMicrotask(() => {
  console.log(4);
});

console.log(5);//1  5 3 4 2

const a = {
  name: "JS"
};

const b = a;

b.name = "React";

const c = {
  name: "Node"
};

b = c;

console.log(a.name);// here what happn object a and object b share
//  same  referce so any will affect the original  referce so we will get"React" as output
console.log(b.name);//here object b and object c share same referce so any change will refelct to the original refece
// most important thing is now b is no more point to the previous referce in the heap it will point to the new referce in the heap
// so we will get Node

function test() {
  console.log(a);// here we will get complete function a as we have object and variable with same so here non primitive get higher
  // preferce

  var a = 10;

  function a() {}

  console.log(a);//10
}

test();
Promise.resolve(1)
  .then((x) => {
    console.log(x);
    return x + 1;
  })
  .then((x) => {
    throw new Error("Error");
  })
  .catch((err) => {
    console.log("Caught");
    return 100;
  })
  .then((x) => {
    console.log(x);
  });// 1 caught 100

  const user = {
  name: "Backend",
  greet() {
    return function () {
      console.log(this.name);
    };
  }
};

user.greet()();// here we have greet function which return normal function  whose this is no more bound to the object it
// will give undefined to avoid it we need to use the arrow which inheirt this lexically

const arr = [1, 2, 3];

arr.forEach(async (num) => {
  await Promise.resolve();
  console.log(num);
});

console.log("Done");//Done [undefined,undefined,undefined]

console.log([] == false);// true
console.log([] == ![]);// true
console.log(null == undefined);// true
console.log(NaN == NaN);//false
console.log({} == {});//false due to different referce
async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);

  setTimeout(() => {
    console.log(3);
  }, 0);

  Promise.resolve().then(() => {
    console.log(4);
  });

  console.log(5);
}

test();

console.log(6);// 6 1 2 5 4 3

function outer() {
  let count = 0;

  return function inner() {
    console.log(count++);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();//1
fn1();//2
fn2();//1
fn1();//3

console.log(test);// Hello  as we have test as variable  and function so function get highest priority because of non primitve has higher prefrce

var test = 100;

function test() {
  console.log("Hello");
}

console.log(test);//100

console.log("A");

Promise.resolve()
  .then(() => {
    console.log("B");
  })
  .then(() => {
    console.log("C");
  });

setTimeout(() => {
  console.log("D");
}, 0);

console.log("E");// A E B C D

const obj1 = {
  user: {
    name: "MERN"
  }
};

const obj3 = { ...obj1 };

obj3.user.name = "React";

console.log(obj1.user.name);// as obj3 is the shallow copy of the obj1 so the outer key point to the different referce in the heap but 
// nested point to the referce of object1 so  if we made any change will reflect on the original referce so  we will get React
console.log(obj3.user.name);//React

const obj4 = {
  name: "NodeJS",
  getName() {
    return this.name;
  }
};

const get = obj4.getName;//get is a standalone fucntion which is no more bound to the object so we will get undefined to avoid it 
// we need to bound the object to the function using bind method which bound the object permanently to the object

console.log(obj4.getName());//NodeJs
console.log(get());//undefined

setTimeout(() => console.log(1), 0);

Promise.resolve().then(() => {
  console.log(2);
});

queueMicrotask(() => {
  console.log(3);
});

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log(4);
  }, 0);
});

console.log(5);//5 2 3 1 4

async function test() {
  console.log("A");

  await 10;

  console.log("B");
}

console.log("C");

test();

console.log("D");//C A B D

const arr2 = [1, , 3];

console.log(arr2.length);//3

arr.forEach((item) => {
  console.log(item);//[undefined,empty,undefined]
});

console.log(arr.map((x) => x));//[1,empty,3]

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside timeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

(async function () {
  console.log("Async Start");

  await null;

  console.log("Async End");
})();

console.log("End");
//start
//Async Start
//Async End 
//End
//1
//Timeout 1
//Promise inside the Timeout