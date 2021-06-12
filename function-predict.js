/**
 * I was able to predict the outcome of these three code snippets on my own
 */

//Predict 1
function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting(); //initializes and sets var word to result of greeting function
    console.log(word); //prints value of word to console
//Output: Hello    

//Predict 2
function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
    var result1 = add(3,5); //result1 set to value of add function with 3 and 5 as arguments
    var result2 = add(4,7); //result2 set to value of add function with 4 and 7 as arguments
    console.log(result1); //prints value of result1 to console
    console.log(result2); //prings value of resut2 to console
//Output:
    //Summing Numbers!
    //num1 is: 3
    //num2 is: 5
    //Summing Numbers!
    //num1 is: 4
    //num2 is: 7
    //8
    //11

//Predict 3
function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }

//In this scenario the function is created but never run so nothing is printed to the console. well, you will get an undefined returned if you run this. 
    
    