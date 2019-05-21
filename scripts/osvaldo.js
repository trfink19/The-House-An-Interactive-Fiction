// contents of room here
alert("Loading main.js!");
player = new Player();

//objects
let room1 = new Room("lab 1" , "Lab that produces highly dangerous substances.");
let testtubes = new Item("testing tubes", "very cloudy and has illegible writing. Filled with a dark substance.")
let brokenglass = new Item("broken glass" , "Very sharp pieces of glass on the floor. Contained a bright red substance.")
let room2 = new Room("lab 2" , "Wires are everywhere connecting to some kind of pod.");
let pods = new Item("pod" , "very cold and contains a very hairy figure inside.")
let freezer = new Item("freezer" , "contains human organs.")
let room3 = new Room("security room" , "Has camera moniters and a locked arsenal.");
let coffee = new Item("coffee maker" , "A coffee maker capable of making black coffee.")
let cctv = new Item("cctv cameras" , "Shows the dark outside world and all the rooms around the Lab.")
let room4 = new Room("elevator" , "An out of order elevator");
let buttons = new Item("elevator buttons" , "The buttons won't work...")
let room5 = new Room("analysis room");
let results = new Item("lab results" , "Mr. Whiskers, Age: 4 (in cat years), Highly Dangerous")
let coffeemug = new Item("coffee mug" , "Black coffee mug with a cat picture on it. Contains cold coffee.")
let start = new Room("Testing Lab", "You have no memory of this place.");


// spots
room1.addItem(testtubes);
room1.addItem(brokenglass);
room2.addItem(pods);
room2.addItem(freezer);
room3.addItem(cctv);
room3.addItem(coffee);
room4.addItem(buttons);
room5.addItem(results);
room5.addItem(coffeemug)
start.addItem(room1);
start.addItem(room2);
start.addItem(room3);
start.addItem(room4);
start.addItem(room5);
player.location = start;


player.move(start);





let jumpaction = /jump/;
let jump = function(action, player, object) {
  if (action == 'jump') {
    let text = "";
    addLine("You jumped. What did you think would happen? Dummy.");
    player.move(dungeon)
    player.cameFrom = null;
  }
  return player
}
addAction(jumpaction, jump);


let killaction = /kill/;
let kill = function(action, player, object) {
  if (action == '/kill') {
    let text = '';
    addLine("This isn't Minecraft, but good try though!")
    player.move(dungeon)
    player.cameFrom = null;
  }
  return player
}
addAction(killaction, kill)
