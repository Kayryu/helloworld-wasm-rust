# "Hello world" examples with WebAssembly + Rust

Hello world code with WebAssembly and Rust.

This code is from this article: 

- https://aralroca.com/blog/first-steps-webassembly-rust

## Compile with Web

```
wasm-pack build --target web
```

Start with

```
npx serve .
```

And then open http://localhost:5000.


## Compile with nodejs

```
wasm-pack build --target nodejs
```

Start with
```
npm install

node ./index.js
```