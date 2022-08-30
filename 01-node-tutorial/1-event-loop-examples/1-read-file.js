const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
// offload this one, only after I get the result, THEN run the callback
readFile('./content/first.txt', 'utf8', (err, result) => {
  // callback
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')

/* started a first task
starting next task
Hello this is first text file
completed first task */