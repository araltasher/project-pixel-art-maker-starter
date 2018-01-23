// Select color input
var color = $("#colorPicker").val();

// When size is submitted by the user, call makeGrid()

$("#submission").click(function makeGrid(e) {
  e.preventDefault();

  var table, height, width;

  table = $("#pixel_canvas");
  height = $("#input_height").val();
  width = $("#input_width").val();

  if (height > 200) {
    height = 200;
  }
  if (width > 50) {
    width = 50;
  }

  $("#pixel_canvas").empty();

  for (i = 0; i < height; i++) {
    var row = $("<tr></tr>");
    table.append(row);
    for (j = 0; j < width; j++) {
      $("<td></td>").appendTo(row);
    }
  }

  console.log();
});

$("#colorPicker").on("change", function() {
  color = $("#colorPicker").val();
});

$("#pixel_canvas").on("click", "td", function() {
  if ($(this).css('background-color') !== "rgba(0, 0, 0, 0)") {
    $(this).css("background-color", "rgba(0, 0, 0, 0)");
  } else {
    $(this).css("background-color", color);
  }
});
