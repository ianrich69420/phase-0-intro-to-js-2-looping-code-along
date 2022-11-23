// Code your solutions in this file
function writeCards(stringNames, eventName) {
  const newStringNames = [];
  for (let i = 0; i < stringNames.length; i++) {
    newStringNames.splice(
      i,
      0,
      `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return newStringNames;
}

function countDown(positiveInt) {
  let i = positiveInt;
  while (i > -1) {
    console.log(i);
    --i;
  }
}
