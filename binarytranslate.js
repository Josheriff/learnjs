
function binaryAgent(str) {
  // i have to loop between every 8 digits existing in the array, so arr[0]= the 8 numbers.
  str=str.toString();
  var binaryblock=[];
  var numberofloops=8;
  var i=0;
  for (i;i<numberofloops;i+8){
      binaryblock[i-8]=str[i-8]+str[i-7]+str[i-6]+str[i-5]+str[i-4]+str[i-3]+str[i-2]+str[i-1]+str[i];
      if(str[numberofloops+2]){
          i+=8;
          numberofloops+=8
      }
      console.log(binaryblock);
  }
  console.log(str[1]);
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
