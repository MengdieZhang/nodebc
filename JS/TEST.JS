let number = 0;

function add(n, callback) {
  n++;
  console.log('first n',n)
  callback(n);
  console.log('second n',n);
}

add(number, function(result) {
  console.log(result); // 1
});

console.log(number); // 0