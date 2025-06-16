// Asynchronous JavaScript refers to the ability of JavaScript to perform tasks without blocking the execution of other code. This feature is crucial for improving the performance and responsiveness of applications, especially when dealing with tasks like fetching data from a server, reading files, or executing timers.

// Sync vs Async
console.log('Sync operation 1');
console.log('Sync operation 2');
console.log('Sync operation 3');

console.log('Sync operation 1');
setTimeout(()=>{
    console.log('Sync operation 2');
},2000);

console.log('Sync operation 3');