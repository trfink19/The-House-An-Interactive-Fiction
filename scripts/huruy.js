alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
let bedroom = new Room('bedroom', 'It is a bedroom')
var key = new Item('rusty key', 'It is a large, heavy brass key.')
let dungeon = new Room('dungeon', 'Long, rusty chains hang from hooks on the walls. The floor is damp, and the room smells of mold and must.')
let Remote= new Item (" remote i control the channels through that.")
let TvRoom = new Room(" i watching movie,and listen music in that place.")
let knife =new Item ( " i cut thing by knife.")
let spoon = new Item ( i use it to eat food such as like pasta.")
let kitchen = new Room (" a place i use to made food.'')
let shower = new Item (" a place i use it to clean my self."")
let toilet = new Item ( a white paper.")
let bathroom =new Room (" clean Semling bad.")
let oil motor = new Item (" i am change my car oil at the Garage it's liquid.")
let work gloves = new Item(" i use it to fix my car it's always dirty.")
let Garage = new Room(" a lot of dusty oil in the ground as well as a lot another dirty items.")
let blanket = new Item('' blanket made of clothes white and blue color i cover it in the night to protect from bad weather."
let pillows = new Item( pillows made of clothes gray color i used it in the bed when sleep.'')
let bedroom =new room('' nice clean and semling good.'');






//Add the function to the action list



// Put them in their spots
hallway.addItem(vase);
hallway.addItem(room);
hallway.addItem(key);
room.addItem(bedroom);
room.addItem(hallway);


player.move(hallway)
