let listOptions = {
  dog: 'Bart',
  turtle: 'Lisa',
  turtle: 'Sam'
}
//
// function list(names){
//   for (var i = 0; i < listOptions.length; i++) {
//     return i;
//   }
// }
//
// let animal = {
//     name : "African bush elephant",
//     scientificName : "Loxodonta africana",
//     weight : 13000, //in pounds
//     height : 11, //in feet
//     speak : function(){
//         console.log( "Trumpeting!!!" );
//     }
// };

// console.log(listOptions);
listOptions.turtle = 'Ilene';
console.log(listOptions.turtle);
console.log(listOptions.length);

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));


// console.log(Object.values(list).length);


// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''
