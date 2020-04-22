// function first() {
//   setTimeout( function() {
//     console.log(1);
//   }, 500 );
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS (lang, callback){
//   console.log("Я учу " + lang);
//   callback();
// }

// learnJS ('JavaScript', function() {
//   console.log('Я прошел 3й урок');
// });

// function done() {
//   console.log('Я прошел 3й урок');
// }

// learnJS ('JavaScript', done);

let options = {
  width: 1024,
  height: 1024,
  name: 'test'
};

console.log(options.name);

options.bool = false;
options.colors = {
  border: 'black',
  bg: 'red'
};

delete options.bool;

console.log(options);

for (let key in options) {
  console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);