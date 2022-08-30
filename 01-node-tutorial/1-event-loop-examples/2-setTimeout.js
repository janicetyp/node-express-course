// started operating system process
console.log('first')

// async gets offloaded
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
