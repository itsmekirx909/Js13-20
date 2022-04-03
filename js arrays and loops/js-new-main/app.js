// chap13-15

// Q1
// var arr = []

// Q2
// var arr = new Array()

// Q3
// var stringArr = ['' , '']

// Q4
// var numArr = [0 , 1]

// Q5
// var booleanArr = [true , false]

// Q6
// var mixedArr = ['' , 1 ,false]

// Q7
// var arr = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write('<h1>Qualifications<h1/> <br/>')
// for(var i = 0 ; i < arr.length ; i++){
//      document.write( (i+1)+')' + arr[i] + '<br/>')
// }

// Q8
// var students = ['Michael' , 'John' , 'Tony']
// var totalMark = [320 , 230 , 480]
// var per1 = (totalMark[0]/500)*100
// var per2 = (totalMark[1]/500)*100
// var per3 = (totalMark[2]/500)*100
// var perr = [per1 , per2 , per3]

// for(var i = 0 ; i < students.length ; i++){
//     document.write('Score of ' + students[i] + ' is ' + totalMark[i] + '.' + ' Percentage is: ' + perr[i] + '<br/>' )
// }

// Q9
// var colors = [' red ' , ' blue ' , ' green ' , ' yellow ' , ' orange ' , ' black ' , ' white ' , ' pink']
// document.write('<h1>' + colors + '<h2/>' + '<br/>' + '<br/>')

// document.write('<h2> What color do you want to add first <h2/>' + '<br/>')
// colors.shift()
// colors.unshift(prompt('Enter color you want to be first'))
// document.write(colors + '<br/>' + '<br/>')

// document.write('<h2> What color do you want to add last <h2/>' + '<br/>')
// colors.pop()
// colors.push(prompt('Enter color you want to be last'))
// document.write(colors + '<br/>' + '<br/>')

// document.write('<h2> Which index do you want to add a new color <h2/>' + '<br/>')
// colors.splice(prompt('Which index do you want to add color') , 0 , prompt('What color do u want to add'))
// document.write(colors + '<br/>' + '<br/>')

// document.write('<h2> Which index do you want to delete color <h2/>' + '<br/>')
// colors.splice(prompt('Which index do you want to delete color color') , +prompt('How many colors you want to delete') , '')
// document.write(colors + '<br/>' + '<br/>')

// Q10
// var scores = [ 320 , 230 , 480 , 120]
// document.write('Scores of students: ' + scores + '<br/>' )

// scores.sort()
// document.write('Scores of students in ascending order: ' + scores + '<br/>' )

// scores.reverse()
// document.write('Scores of students in decending order: ' + scores + '<br/>' )

// Q11
// var cities = [prompt('Enter first city') , prompt('Enter second city') , prompt('Enter third city') , prompt('Enter fourth city') , prompt('Enter fifth city')]
// document.write('Cities list:' + '<br/>' + cities + '<br/>' + '<br/>')

// document.write('Selected cities:' + '<br/>' + cities.slice(1 , 3) + '<br/>' + '<br/>')

// Q12
// var arr = ['This' ,  'is' ,  'my' , 'cat']
// alert( 'Array: ' + arr)
// alert('String: ' + arr.join(' '))

// Q13
// var devices = ['keyboard ' , 'mouse ' , 'monitor ' , 'printer ']
// document.write('Devices:' + '<br/>' + devices + '<br/>' + '<br/>')

// for(var i = 0 ; i < devices.length ; i++){
//     document.write('Out:' + '<br/>' + devices[i] + '<br/>' + '<br/>')
// }

// Q14
// var devices = ['keyboard ' , 'mouse ' , 'monitor ' , 'printer ']
// document.write('Devices:' + '<br/>' + devices + '<br/>' + '<br/>')

// for(var i = devices.length ; i > 0 ; i--){
//     document.write('Out:' + '<br/>' + devices[i-1] + '<br/>' + '<br/>')
// }

// Q15
// var arr = ['Apple' , 'Samsung', 'Motorola' , 'Nokia' , 'Sony' , 'Haier']

// document.write('<select name="" id="">')
// for(i = 0 ; i< arr.length ; i++){
    
//     document.write('<option value="">' + arr[i] + '</option>')
// }
// document.write('</select>')


// chap17-20

// Q1
// var arr = [ [ [] , [] ] , [] , [] , []]

// Q2
// var arr = [ [0 , 1 , 2 , 3] , [1 , 0 , 1 , 2] , [2 , 1 , 0 , 1]]
// console.log(arr)

// Q3
// for(var i = 1 ; i <= 10 ; i++){
//     document.write(i + '<br/>')
// }

// Q4
// var num = +prompt('Enter number')
// var length = +prompt('Enter length')
// for(var i = 1 ; i <= length ; i++){
//     document.write(num + 'x' + i + '=' + num*i + '<br/>')
// }

// Q5
// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for(var i = 0 ; i < fruits.length ; i++){
//     document.write(fruits[i] + '<br/>' + '<br/>')
// }

// for(var j = 0 ; j < fruits.length ; j++){
//     document.write('Element at index ' + j + ' is ' + fruits[j] + '<br/>')
// }

// Q6
// document.write('Counting: ')
// for(i = 1 ; i <= 15 ; i++){
//     document.write(i + ',')
// }
// document.write('<br/>' + 'Reverse counting: ')
// for(j = 15 ; j >= 1 ; j--){
//     document.write(j + ',')
// }
// document.write('<br/>' + 'Even numbers: ')
// for(k = 0 ; k <= 14 ; k+=2){
//     document.write(k + ',')
// }
// document.write('<br/>' + 'Odd numbers: ')
// for(l = 1 ; l <= 15 ; l+=2){
//     document.write(l + ',')
// }
// document.write('<br/>' + 'Series: ')
// for(k = 2 ; k <= 14 ; k+=2){
//     document.write(k + 'k' + ',')
// }

// Q7
// var arr = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
// var userInp= prompt('Welcome! What do you want')

// var ifTrue= false
// for(i = 0 ; i < arr.length ; i++){
//     if(userInp === arr[i]){
//         alert(arr[i] + ' is availabe at ' + i + ' index')
//         var ifTrue= true
//     }
// }
// if(ifTrue == false){
//     alert('Not found')
// }

// Q8
// var arr = [24 , 53 , 78 , 91 , 12]
// document.write('Array numbers are: ' + arr + '<br/>')
// var nums = arr.sort()
// var largest = nums.slice(-1)
// document.write('Largest number: ' + largest)

// Q9
// var arr = [24 , 53 , 78 , 91 , 12]
// document.write('Array numbers are: ' + arr + '<br/>')
// var nums = arr.sort()
// var smallest = nums.slice(0 , 1)
// document.write('Largest number: ' + smallest)

// Q10
// for(i = 0 ; i <= 100 ; i+=5){
//     document.write(i + '<br/>')
// }