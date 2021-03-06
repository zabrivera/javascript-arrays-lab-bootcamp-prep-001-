//define your array here
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
]

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  const newArray = [...kittens, name]
  return newArray
}

function prependKitten(name){
  const newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(){
  const newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

function removeFirstKitten(){
  const newArray = kittens.slice(1)
  return newArray
}
