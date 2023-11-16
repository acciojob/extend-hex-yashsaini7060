const extendHex = (shortHex) => {
 let hexlength= shortHex.length;
 let out=["#"]
 var i=(shortHex[0]==="#"? 1 : 0);
 console.log(i)
 
  while(i<hexlength)
  {
      out.push(shortHex[i]);
      out.push(shortHex[i]);
      i++
  }
  let text = out.join("");
  return text;
  
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
