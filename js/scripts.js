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

// User Interface logic
$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    $(".results").show();
    var num = parseInt($('input#intake').val());
    var array = [];
    for (i = 0; i <= num; i++) {
      array.push(i.toString());
    }
    var results = glitch(array, num);
    results.forEach(function(element) {
  $('#solution').append("<li>" + element + "</li>");
  })
})
})
