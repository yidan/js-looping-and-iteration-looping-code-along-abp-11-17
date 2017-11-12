// Code your solutions in this file
function printBadges(emps){
  for (let i=0; i<emps.length;i++){
    console.log(`Welcome ${emps[i]}! You are employee #${i+1}.`)
  }
  return emps;
}

function tailsNeverFails(){
  let coin = Math.random()
  let count = 0
  while (coin < 0.5){
    count++
    coin = Math.random()
  }

  return `You got ${count} tails in a row!`
}