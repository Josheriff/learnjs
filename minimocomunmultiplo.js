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
  
  //console.log(primenumbers); // a partir de aqui tengo primenumbers solo los primos del array total, hora de hacer la factorización.
  
  //ahora vamos a recorrer completearr dividiendolo entre primenumbers mientras que %=0 y almacenarlo en un array
  var factors=[];
  var preresult=[];
  
    for(var i=0;i<completearr.length;){  //recorring the completearr
      for(var j=0;j<primenumbers.length;){//recorring primenumbers (but i want to be recorred when necesary)
        if(completearr[i]==1){
          factors[i]=preresult;
          preresult=[];
          i++;    //si es uno directamente es que ya tengo que dejar de factorizar
          
        }
        
        if(completearr[i]%primenumbers[j]==0){
          completearr[i]=completearr[i]/primenumbers[j];
          preresult.push(primenumbers[j]);  // in the future preresult[i].push..... and i will have the factorize for each one, then i have to put them all together to have the mcm
          
        
        }
        else {
          
          j++;
        }
      }
    }
    
       // console.log(factors);
        //console.log(primenumbers);
        var factorstringed=[];
        var primecount=[];
            //from here my problem is, i have an array of arrays, and i have to know how many times is repeated numbers into another array, and take only the most repeated ones.
           //the array that conteins my array of arrays is factors, and the array that has the elementes to repeat is factors.
           //so, how many times is repeated factors[i] in each array, and just get the one subarray with more repeats and forget the rests.
           
        
        
        for(var g=0;g<factors.length;g++){
          factorstringed[g]=factors[g].toString();
        }
        //now i have the arrays in string and can apply factortostring[g].split("2").length-1
        
      
        for(var r=0;r<factorstringed.length;r++){
          for(var j=0;j<primenumbers.length;j++){
            primecount[r]=[0,0];  //defining the bidemensional array or matrix.
          }
        }
        //console.log(primecount);
        
        for(var g=0;g<factorstringed.length;g++){
          for (var ga=0;ga<primenumbers.length;ga++){
            primecount[g][ga]=factorstringed[g].split(primenumbers[ga]).length-1;
          }
        }
        // console.log(primenumbers); now console numbers is a matrix, and have how many times prime[i], is repited
         //console.log(primecount);// i need to get the hightest number in any colum
        var result=[];
        for(var r=0;r<factorstringed.length;r++){
          for(var j=0;j<primenumbers.length;j++){
            result[r]=[0,0];  //defining the bidemensional array or matrix.
          }
        }
        
        for(var g=0;g<factors.length;g++){
          for(var ga=0;ga<primenumbers.length;ga++){
            result[ga][g]=primecount[g][ga];
          }
        }
            
            //console.log('SEPARACION');
            // console.log(typeof(result[0]));
             //console.log(primenumbers.length);
             //now the first "fila" its 2, and i only need the highest number to do the mcm.
          var resultados=[];   
          var maximo=[];
        for(var g=0;g<primenumbers.length;g++){
          maximo[g] = Math.max.apply(Math,result[g]);
          
        }
        for(var g=0;g<primenumbers.length;g++){
         resultados[g] = Math.pow(primenumbers[g],maximo[g]);
         
        }
        resultados=resultados.reduce(function(a, b){ return a * b; });
        //console.log()
        console.log(primenumbers);
        console.log(maximo);
        console.log(resultados);
    
}
smallestCommons([13,1]);
//nota del ejercicio de freecodecamp, a lo mejor si se repite varias veces el mismo numero primo no es necesario meterlo en el array, es decir el 2 una vez, el 3 una vez, el 5 una vez... y asi una vez por cada numero
