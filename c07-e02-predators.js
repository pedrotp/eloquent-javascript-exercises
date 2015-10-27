World.prototype.count = function(ch) {
  var space = this.grid.space, count = 0;
  for (var i = 0; i < space.length; i++) {
    if (space[i] !== null && space[i].originChar == ch) count++;
  }
  return count;
}

View.prototype.superFind = function(ch) {
  var dirs = ["n","e","s","w"], vector = this.vector, grid = this.world.grid;
  var limits = { "n": vector.y, "e": grid.width - vector.x, "s": grid.height - vector.y, "w": vector.x };
  iloop:
  for (var i = 0; i < dirs.length; i++) {
    var dir = dirs[i], beam = vector;
    jloop:
    for (var j = 0; j < limits[dir]; j++) {
      beam = beam.plus(directions[dir]);
      if (grid.get(beam) !== null) {
        if (grid.get(beam).originChar === ch) {
          return dir;
        }
        else {
          continue iloop;
        }
      }
    }
  }
  return false;
}

function SmartPlantEater() {
  PlantEater.call(this);
}

SmartPlantEater.prototype = Object.create(PlantEater.prototype);
  
SmartPlantEater.prototype.act = function(view) {
  var space = view.superFind("*") ? view.superFind("*") : view.find(" ");
  if (this.energy > 80 && space) {
    return {type: "reproduce", direction: space};
  }
  var plant = view.find("*");
  var plantCount = view.world.count("*");
  if (plant && plantCount > Math.floor(Math.random() * 5) + 5 && view.findAll("*").length > 1) {
    return {type: "eat", direction: plant};
  }
  if (space) {
    return {type: "move", direction: space};
  }
};

function Tiger() {
  this.energy = 60;
}

Tiger.prototype.act = function(view) {
  var space = view.superFind("O") ? view.superFind("O") : view.find(" ");
  if (this.energy > 100 && space) {
    return {type: "reproduce", direction: space};
  }
  var plantEater = view.find("O");
  var plantEaterCount = view.world.count("O");
  if (plantEater && plantEaterCount > Math.floor(Math.random() * 3) + 6) {
    return {type: "eat", direction: plantEater};
  }
  if (space) {
    return {type: "move", direction: space};
  }
};

animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));