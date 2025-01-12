var url = "{%wasm-url%}";
WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const leading0 = result.instance.exports.leading0;

    console.log("Leading zeros: " + leading0(0b00000000_10000000_00000000_00000000));
  }
);
