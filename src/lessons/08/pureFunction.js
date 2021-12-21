const counter = {
  current: 0,
};

function invokeCount() {
  counter.current += 1;
  return counter.current
}

function printObjectField(obj) {
  obj.test = 1
  console.log(Object.keys(obj));
  return undefined
}

const counter1 = invokeCount()
const counter2 = invokeCount()
const counter3 = invokeCount()

function sum(n1, n2) {
  return n1 + n2
}

const sum1 = sum(1, 2);
const sum2 = sum(1, 2);
const sum3 = sum(1, 2);
