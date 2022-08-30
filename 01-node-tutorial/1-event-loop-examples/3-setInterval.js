// the task is not completed, every two seconds the event loop invokes the callback
setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
