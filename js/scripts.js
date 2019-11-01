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
  array = []
  for (i = 0; i <= num; i++) {
    array.push(i.toString());
  };
};
// User Interface logic
$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var num = $('input#intake').val();
    consle.log(num)
    var array = arrMkr(num);
    console.log(array);
    var results = glitch(array, num);
    console.log(result);
    results.forEach(function(element) {
  $('#solution').append("<li>" + element + "</li>");
  })
})
})
