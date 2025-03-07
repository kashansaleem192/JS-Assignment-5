// Assignment 5

// Chapter 17 - 20

// Q 1

var arr = [[1,2,3],[3,2,1]]

// Q 2
 var arr = [[0,1,2,3], [1,0,1,2],[2,1,0,1]]
//   Q 3 
for( var i = 1 ; i<=10;i++){
    console.log( i)
}
// Q 4
var userInput = prompt("Enter a number to show multiplication table")
var length_input= prompt("Enter a length to show multiplication table")

for ( var i = 1; i <= length_input;i++){ 
console.log(userInput , "x", i , "=" + userInput*i  )
}

// Q 5
var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"]

    for ( var i = 0 ; i < fruits.length ;i++){ 
        console.log(fruits[i], "<br>")
    }
    for ( var i = 0 ; i < fruits.length;i++){ 
        console.log("`Element at index ", i ,"is",fruits[i]
         )
    }

    // Q 6
    document.write( "<h3>Counting </h3>")
    for( i = 1 ;i <=15 ;i++){
       
        document.write( i ,"," )
    }
document.write( "<br>")
document.write("<h3> Reverse Counting</h3>")
    for ( i = 10 ; i >= 1;i--)
        { 
            document.write( i,"," )}

            document.write( "<br>")
document.write("<h3> Even</h3>")
for ( i= 0;i  <=20;i+=2){ 
    document.write( i , ",")
}
document.write( "<br>")
document.write("<h3>Odd</h3>")
for ( i= 1;i  <=20;i+=2){ 
    document.write( i , ",")
}
document.write( "<br>")
document.write("<h3>Odd</h3>")
for ( i= 2;i  <=20;i+=2){ 
    document.write( i,"k", ",")
}

// Q 7
var cookies_input= prompt("welcome to United Bakery. What do you want to order sir/maam?").toLowerCase();
var  arr = ["cake", "apple pie", "cookie", "chips", "patties"]
var found = false 
for ( var i = 0; i< arr.length ;i++){ 
    if ( arr[i]===cookies_input ){ 
        found = true ;
        console.log(cookies_input ,"is available at index" ,i ,'in our bakery');
    }

}
if( !found){ 
    console.log("We are sorry." ,cookies_input ,"is not available in our bakery");
}

// Q 8

var  A = [24, 53, 78, 91, 12]
var largestNum = A[0]
for( var i = 1;i<A.length;i++){
    if( A[i]>largestNum){ 
        largestNum=A[i]
    }
 }
console.log( "Array Items", A)
console.log( "The Largest number is ",largestNum)

// Q 9

var  A = [24, 53, 78, 91, 12]
var smallestNum = A[0]
for( var i = 1;i<A.length;i++){
    if( A[i]<largestNum){ 
        largestNum=A[i]
    }
 }
console.log( "Array Items", A)
console.log( "The Largest number is ",largestNum)

// Q 10
for (var i = 5;i<=100;i+=5){
    console.log( i)

}