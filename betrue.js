function truthCheck(collection, pre) {
  // Is everyone being true?
  var result=true;
  //console.log(collection[1]);
  
  
  for(var i=0;i<collection.length;i++){
    if(collection[i][pre]!==undefined && collection[i][pre]!==0 && collection[i][pre]!==null && collection[i][pre]!==""){
      result=true;
    }
   
    else{
      result=false;
      break;
    }
    if(collection[i][pre]!==collection[i][pre]){ //this is to pass the "single": NaN, thing
      result=false;
      break;
    }
    
  }
  
  console.log(result);
}

truthCheck([{"single": "double"}, {"single": NaN}], "single")