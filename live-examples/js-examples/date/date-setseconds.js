const event = new Date('August 19, 1975 23:15:30');

event.setSeconds(42);

console.log(event.getSeconds());
// expected output: 42

console.log(event);
// expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// (Note: your timezone may vary)
