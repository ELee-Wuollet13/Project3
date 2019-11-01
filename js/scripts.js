// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var input = parseInt($('#input').val());
    var result = counter(input)
    alert(result)


    event.preventDefault();
  })
})


// Business logic
