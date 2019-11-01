// Business logic
function glitch(array, num) {
  var result = [];
  for (i = 1; i <= num; i++) {
    if (array[i].includes("3")) {
      result.push("I'm sorry dave, I'm affraid I can't do that");
    } else if (array[i].includes("2")) {
      result.push("Boop");
    } else if (array[i].includes("1")) {
      result.push("Beep");
    } else {
      result.push(i);
    }
  }
  return result;
}

function arrMkr(num) {
  arraymk = []
  for (i = 0; i <= num; i++) {
    arraymk.push(i.toString());
  };
  return arraymk;
};

// function split(results) {
//   arr1 =[]
//   arr2 = []
//   arr3 = []
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === array[30]) {
//       array.slice(0,i).push(arr1)
//     } else if (array[i] === array[60]) {
//       array.slice(31,i).push(arr2)
//     } else {
//       array.slice(61,i]).push(arr3)
//     console.log(arr1);
//     console.log(arr2);
//     console.log(arr3);
//   })
//   )}
// }


// User Interface logic
$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var num = $('input#intake').val();
    var array = arrMkr(num);
    var results = glitch(array, num);
    // var splitResult = split(results)


    results.forEach(function(element) {

      $('#solution').append("<li>" + element + "</li>");
    })
  })
})
