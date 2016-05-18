/* This course starts looking more like a math class... but well, i will refresh my math knowledge...
first i will factorize the components and multiply the result for having the scm.

*/
function smallestCommons(arr) {
  if (arr[1]<arr[0]){
    arr[2]=arr[0];     //the array is from less to more
    arr.splice(0,1);
  }
  var completearr=[]; //here we will put all the numbers
  for(var i=arr[0];i<=arr[1];i++){
    completearr.push(i);
  }
  
  function esprimo(number) {  //to factorize i will need the prime numbers
    if (number <= 1) {
      return false;
    }
    for (var i = 2; i <= number / 2; i++) {
      if (number % i === 0) { //if is divisible is not prime.
        return false;
      }
    }
    return true;
  }
  
  var primenumbers=[]; //here i will storage the prime numbers.
  
     for(var j=0;j<completearr.length;j++){
      if(esprimo(completearr[j])){
        primenumbers.push(completearr[j]);
      }
       
     }
  
  
  //comentado
  console.log('ha funcionado el push');
  return primenumbers;
}


smallestCommons([5,1]);