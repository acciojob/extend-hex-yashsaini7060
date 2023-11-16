const extendHex = (shortHex) => {
 let hexlength= shortHex.length;
 let out=["#"]
  for(var i=1; i<hexlength; i++){
      out.push(shortHex[i]);
      out.push(shortHex[i]);
  }
  let text = out.join("");
  return text;
  
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
