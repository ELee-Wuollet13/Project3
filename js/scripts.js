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

// User Interface logic
$(document).ready(function() {
  $("#input form").submit(function(event) {
    $('ul').empty()
    event.preventDefault();
    var num = $('input#intake').val();
    var array = arrMkr(num);
    var results = glitch(array, num);
    results.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    })
  })
})
