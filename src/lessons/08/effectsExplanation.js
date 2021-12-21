const doSomething = () => {
  console.log('doSomething');
};

//---------------------------------

console.log('start');
const test = 1;

doSomething();

useLayoutEffect();

setTimeout(() => {
  useEffect();
}, 0);

console.log('end');

