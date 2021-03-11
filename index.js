const hl = require("./pkg/helloworld");

console.log("get data from rust: ", hl.helloworld());
console.log("call nodejs: ", hl.example());
console.log("fibonacci: ", hl.fibonacci(20));