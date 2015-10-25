function chessboard(height, width) {
  if (width === undefined) width = height;
  var counter = 0;
  for (var i = 0; i < height; i++, counter++) {
    var line = "";
    for (var j = 0; j < width; j++, counter++) {
      counter % 2 ? line += "#" : line += " ";
    };
    console.log(line);
  };
};

chessboard(8); // or chessboard(8,8);

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 