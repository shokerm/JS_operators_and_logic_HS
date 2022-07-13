//Ex1
function myFunc1 (a,b){
   
    
    if(a && b){
       return false;
    }
    else{
       return true;
    }

}
function myFunc2 (a,b){
   
    
    if(a && b){
       return true;
    }
    else{
       return false;
    }

}

//Ex2
function MatchHouses(step){
    if(step > 0 && step != ''){
        return step*5+1;
    }
}

//Ex3
function GetPerimeter(letter, num){
    if (letter ==='s')
    {
        return num*4;

    }
    if (letter ==='c'){
        return 2*Math.PI*num;

    }
    else{
        return 'error';
    }
}
//Ex4 
function GetNumberAndAlertIfInArray(){
    var num = parseInt(prompt("Enter a number"));
    (num >=0 && num <=1000)?alert("Ok"):alert("Not Ok");
}

function GetNumberAndAlertIfHas5numbers(){
    var num = (prompt("Enter a number"));
    (num.length >= 5)?alert("Ok"):alert("Not Ok");


}
function GetStringAndAlertIfHas5Letters(){
    var Str = (prompt("Enter a string"));
    (Str.length >= 5)?alert("Ok"):alert("Not Ok");
}

function GetWeekExpence(){
    var Expence = [];
        Expence.push(parseInt(prompt("Enter Expence for Sunday"))); 
        Expence.forEach(_ =>
            { 
                if(_ < 0 || _ === ' '){
                    alert("Error");
                    throw new Error("Stop script");
                }
                else{
                    console.log(_);
                }
            } );
        Expence.push(parseInt(prompt("Enter Expence for Monday")));
        Expence.forEach(_ =>
            { 
                if(_ < 0 || _ === ' '){
                    alert("Error");
                    throw new Error("Stop script");
                }
                else{
                    console.log(_);
                }
                
              
            } );
        Expence.push(parseInt(prompt("Enter Expence for Tuesday")));
        Expence.forEach(_ =>
            { 
                if(_ < 0 || _ === ' '){
                    alert("Error");
                    throw new Error("Stop script");
                }
                else{
                    console.log(_);
                }
                
              
            } );
        Expence.push(parseInt(prompt("Enter Expence for Wednesday")));
        Expence.forEach(_ =>
            { 
                if(_ < 0 || _ === ' '){
                    alert("Error");
                    throw new Error("Stop script");
                }
                else{
                    console.log(_);
                }
                
              
            } );
        Expence.push(parseInt(prompt("Enter Expence for Thursday")));
        Expence.forEach(_ =>
            { 
                if(_ < 0 || _ === ' '){
                    alert("Error");
                    throw new Error("Stop script");
                }
                else{
                    console.log(_);
                }
                
              
            } );
        Expence.push(parseInt(prompt("Enter Expence for Friday")));
        Expence.forEach(_ =>
            { 
                if(_ < 0 || _ === ' '){
                    alert("Error");
                    throw new Error("Stop script");
                }
                else{
                    console.log(_);
                }
                
              
            } );
        Expence.push(parseInt(prompt("Enter Expence for Saturday")));
        Expence.forEach(_ =>
            { 
                if(_ < 0 || _ === ' '){
                    alert("Error");
                    throw new Error("Stop script");
                }
                else{
                    console.log(_);
                }
                
              
            } );
        alert("The avrage is:  " + Expence.reduce((a,b) => a+b, 0) / Expence.length);
    }
    
function GetNumberAndTellWhatItIs(){

    var num = parseInt(prompt("Enter a number"));
    if(num % 5 === 0){
        alert("Five");
    }
    else if(num % 2 === 0){
        
        alert("The number is even");
    }
    else{
        (num >=10 && num <=100)?alert("The number is between 10 and 100"):(num >=101&& num<=1000)?alert("The number is between 101 and 1000"):alert("Not multiple of five and not even");
    }
}

   











//Ex5
//1
function AscilArt(){
    var str = " ";
    for(var i = 1; i <= 8; i++){
        for (var j = 1; j < i; j++){
            str +=  "$";
        }
        console.log(str);
        str = " ";
        }
        
    }

//1.1
function TreeFunc(num){
     for (var i = 0; i < num; i++) {
      
          var spaces = num-i-1;
      
          console.log(" ".repeat(spaces).concat("*".repeat(i).concat("*").concat("*".repeat(i))))
      
        }
      
        console.log(" ".repeat(num-1).concat("*"))
      
      

    }

function TreeFunc2(number){
    var str = "";
    for (var i = 1; i <= number; i++) {
        for (var s = number - 1; s >= i; s--) {
            str += (" ");
        }
        for (var j = 1; j <= i; j++) {
            str += ("* ")
        }
        str += "\n";
    }
    if (i == number + 1) {
        for (var i = 1; i <= number - 1; i++) {
            for (var s = 1; s <= i; s++) {
                str += (" ");
            }
            for (j = i; j <= number - 1; j++) {
                str += ("* ");
            }
            str += "\n";
        }
    }
    console.log(str);
    return;
}
       
        
       
            







//1.2

function a(n) {

    for (let i = 0; i < n; i++) {
  
      var spaces = n-i-1;
  
      console.log(" ".repeat(spaces).concat("*".repeat(i).concat("*").concat("*".repeat(i))))
  
    }
  
    console.log(" ".repeat(n-1).concat("*"))
  
  }
  
   
  

  
   
  
  for (var i=1; i < 101; i++){
  
      if (i % 15 == 0) console.log("FizzBuzz");
  
      else if (i % 3 == 0) console.log("Fizz");
  
      else if (i % 5 == 0) console.log("Buzz");
  
      else console.log(i);
  
  }




//2
function FizzBuzz(){
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 ){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
        
        
        
    }
}



 
   



