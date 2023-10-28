//---------task-1-----------
let createAnArr = (start, end) => {
  let arr = []
   for(i = start; i <= end; ++i) {
    arr.push(i)
  }
  return arr;
  }
  let myArray = createAnArr(1, 10);
  console.log(myArray);

  //---------task-2-----------
  function numbers(a,b) {
    const arr = [];
    for(let i = a; i <= b; ++i){
      for(let j = a; j <= i; ++j){
        arr.push(i);
      }
    }
    return arr;
  }
  
  console.log(numbers(1, 5));

  //-------task-3---------------
  function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; ++i){
      const randomNum = Math.floor(Math.random() * 500) + 1;
      arr.push(randomNum);
    }
    return arr;
  }
  console.log(randArray(20));

  //------------task-4-------------
  const arr = [1, 2, 2, 2, 5, 6, 2, 6, 8, 9, 7];
  let filteredArr = arr => Array.from(new Set(arr));
  console.log(filteredArr(arr));

  //------------task-5--------------
  let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

let arrNew = arr => {
  let result = {
    number: [],
    string: [],
    array: [],
    other: []
  };
  arr.forEach(element => {
    if (typeof element === 'number' && !isNaN(element)) {
      result.number.push(element);
    } else if (typeof element === 'string') {
      result.string.push(element);
    } else if (Array.isArray(element)) {
      result.array.push(element);
    } else {
      result.other.push(element);
    }
  });
  return result;
};

console.log(arrNew(arr));
  //------------task-6---------------
  function calc(a, b, op) {
    if (op === 1) {
      return a - b;
    } else if (op === 2) {
      return a * b;
    } else if (op === 3) {
      return a / b;
    } else {
      return a + b;
    }
  }
  
  console.log(calc(1, 2, 4));
  //-------------task-7--------------
  let findUnique = arr => {
    let uniqueSet = new Set(arr);
    return (uniqueSet.size === arr.length)
    }
    const arr1 = [1, 1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4];
    console.log(findUnique(arr1));
    console.log(findUnique(arr2));
  //------------task-8---------------
  let create = (password) => {
    return (input) => {
      return password === input;
    }
    }
    const tom = create('pass');
    console.log(tom('passss'));
    console.log(tom('pass'));
  
  
 