//Task1
var array1 = [];
var array2 = [];
var array3 = [];

//Task2
array1 = [0, 1, 2, 3];
array2 = [1, 0, 1, 2];
array3 = [2, 1, 0, 1];

document.write(array1 + '<br>');
document.write(array2 + '<br>');
document.write(array3 + '<br>');
document.write('<br>');

//Task3
for (let i = 1; i <= 10; i++) {
    document.write(i + '<br>')
  }
document.write('<br>')

//Task4
var tableNumber = prompt('which table')
var tableLength = prompt('and table length')

document.write('Table of ' + tableNumber + '<br>')
document.write('Length ' + tableLength + '<br>')
document.write('<br>')

for (let i = 1; i <= tableLength; i++) {
    document.write(tableNumber + ' x ' + i + ' = ' + tableNumber*i + '<br>')
  }

document.write('<br>')

//Task5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawbery']

for (var i = 0; i < fruits.length; i++){
    document.write(i + ') ' + fruits[i] + '<br>')
}

//Task6
let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];;
let reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let Even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let Series = ['2k', '4k', '6k', '8k', '10k', '12k', '14k', '16k', '18k', '20k'];

document.write('<h3>Counting:</h3> <br>');
document.write(counting + '<br>');

document.write('<h3>Reverse Counting:</h3> <br>');
document.write(reverseCounting + '<br>');

document.write('<h3>Even numbers:</h3> <br>');
document.write(Even + '<br>');

document.write('<h3>Odd numbers:</h3> <br>');
document.write(Odd + '<br>');

document.write('<h3>Series:</h3> <br>');
document.write(Series + '<br>');
document.write('<br>')

//Task7
let searchItem = prompt('Welcome to Karachi bakery. What do you want to order?')
let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

let foundItem = false
let itemNumber

for (let i = 0; i <= A.length; i++) {
    if(searchItem == A[i]){
        foundItem = true
        itemNumber = i
        break
    }
}

if(foundItem == true){
    document.write(searchItem + ' is available at index ' + itemNumber + ' in our bakery.')
}
else{
    document.write('We are sorry. ' + searchItem + ' is not avilable in our bakery.')
}

document.write('<br>')
document.write('<br>')

//Task8
let numberlist = [24, 53, 78, 91, 12];
var largestNumber = numberlist[0];

for (var i = 1; i < numberlist.length; i++) {
    if (numberlist[i] > largestNumber) {
        largestNumber = numberlist[i];
    }
}

document.write('The largest number is ' + largestNumber);
document.write('<br>')
document.write('<br>')

//Task9
let numberlist2 = [24, 53, 78, 91, 12];
var smallestNumber = numberlist2[0];

for (var i = 1; i < numberlist2.length; i++) {
    if (numberlist2[i] < smallestNumber) {
        smallestNumber = numberlist2[i];
    }
}

document.write('The smallest number is ' + smallestNumber);
document.write('<br>')
document.write('<br>')

//Task10
for (let i = 1; i <= 20; i++){
    document.write(i*5 + ',');
}