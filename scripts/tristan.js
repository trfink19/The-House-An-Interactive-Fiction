// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("hallway","This hallway is very creepy.")
let bedroom = new Room("bedroom","This room is very dark and has many items including a painting, lamp, bed, vase, closet, and a desk.")
let masterBedroom = new Room("Master bedroom","Oh my there is a person on the bed and he looks dead and a closet in the corner.")
let kitchen = new Room("kitchen","This kitchen is completely empty but something is in the corner.")
let basement = new Room("basement","The only thing in the basement are chains and bones that are laying on the floor.")
let bathroom = new Room("bathroom","There is a bloody knife next to the sink and the bathtub is filled with blood.")
let lamp = new Item("lamp",".")
let painting = new Item("painting",".")
let vase = new Item("vase",".")
let deadBody = new Item("dead body",".")
let chains = new Item("chains",".")
let bones = new Item("bones",".")
let knife = new Item("knife",".")
let sink = new Item("sink",".")
let closet = new Item("closet",".")
let Closet = new Item("closet",".")
let darkFigure = new Item("dark figure",".")
let bloodyBathtub = new Item("bloody bathtub",".")




// Put them in their spots
bedroom.addItem(lamp);
bedroom.addItem(painting);
bedroom.addItem(vase);
bedroom.addItem(closet)
masterBedroom.addItem(deadBody);
masterBedroom.addItem(Closet);
basement.addItem(chains);
basement.addItem(bones);
bathroom.addItem(sink);
bathroom.addItem(knife);
bathroom.addItem(bloodyBathtub)
kitchen.addItem(darkFigure)
hallway.addItem(masterBedroom);
hallway.addItem(bedroom);
hallway.addItem(bathroom);
hallway.addItem(kitchen);
hallway.addItem(basement);

player.move(hallway);
