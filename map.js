// map: which return array

// make double of every element of an array
const number = [1,2,3,4,5,6,7,8,9,10];
console.log(number.map(num=>num*2));

const friendsName =['Aminur' , 'Arafat' , 'Prosenjit'];
console.log(friendsName);  // find all the element of an array
console.log(friendsName.map(name=>name.length));  // find the length of every element
console.log(friendsName.map(name=>name[0]))  // find the first letter of every element of an array


// forEach: prottek Element niye kaj korbe but return korbe na



// filter: jara conditon manbe tader array hisebe prottek take return korbe

// find the value which is grater than 6
const player = [1,2,3,4,5,6,7,8,9,10];
console.log(player.filter(p=> p > 6));


// find the name which length is less than 7
const friendName =['Aminur' , 'Arafat' , 'Prosenjit'];
console.log(friendsName.filter(name => name.length < 7));  


// find: jara condition puron korbe tader moddhe sudhu 1st element k print korbe
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.find(a => a > 5))


// reduce: prottek ta element k nibe. 
//aktar sathe r akta jog korche, last parameter initial value


const array = [1,2,3,4,5,6,7,8,9,10];
console.log(array.reduce((previous, current)=> previous + current , 0)); 