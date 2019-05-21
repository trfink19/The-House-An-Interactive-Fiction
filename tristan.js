// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room('hallway', 'It is dark, and scary.');
let dark = new Room('dark room', 'It is dark.');
let lamp = new Item('lamp', 'golden, and very tarnished.');
let closet = new Room('dark closet', 'dusty, and covered in cobwebs.');
let key = new Item('key', 'rusty, old and dusty. ');
let bathroom = new Room('dirty bathroom', 'leaking dusty.');
let airVents = new Room('rusty air vents', 'very dusty covered in cobwebs and smells like dead animals.');
let deadRat = new Item('dead rat', 'smells bad and flyes all over');
let bed = new Item('bed', 'old smelly sheets stains all over');
let dresser = new Item('broken dresser', 'old dirty clothes in the dresser');
let toothBrush = new Item('old tooth brush', 'thooth brush is all dusty and yellow');
let ratDroppings = new Item('rat droppings', 'smells bad all dryed up and spread every where');
let medicine = new Item('expired medicine', 'pills spilled everywhere');
let shoes = new Item('old worn out shoes', 'spiders crawling inside the shoes');
let rubberDuck = new Item('yellow rubber duck', 'paint falling off all yellow and dirty and smells like old water');
let stairCase = new Room('stair case', 'creaking');
let livingRoom = new Room('living room', 'dusty couches and trash everywhere');
let kitchen = new Room('kitchen', 'dirty dishes everywhere and cabinets opened');
let basement = new Room('basement', 'boxes with dust on top');
let attic = new Room('attic','empty, cobwebs everywhere, and rat droppings');
let couches = new Item('dusty couches', 'under cushions there is coins and trash');
let plant = new Item('plant', 'dead plant with spiders on it');
let knife = new Itme('bloody knife', 'dry blood all over knife');
let dishes = new Item('dirty dishes', 'old moldy food on dishes with flyes on it');
let boxes = new Item('old boxes', 'boxes filled with clothes and other objects');
let duffleBag = new Item('bloody duffle bag', 'dead body cut into pieces with dry blood all over and flyes covering the body');
let lock = new Item('locked metal box', 'rusty lock on the rusty metle box');
let paper = new Itme('wet paper', 'under the paper there is a key#2');
let keytwo = new Item('key #2', 'gold rusty key');

let pickUpaction = /pick up/;
let pickUp = function(action, player, object){
  if (action == 'pick up') {
    object.pickUp();
  }
  return player;
}
addAction(pick upAction, pick up);

Item.rubberDuck.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.shoes.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.medicine.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.ratDroppings.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.toothBrush.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.deadRat.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.key.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.paper.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.keytwo.pickUp = function() {
  addLine("You picked up " + this.name);
}
Item.duffleBag.pickUp = function() {
  addLine("You picked up " + this.name);
}

Item.dishes.pickUp = function() {
  addLine("You picked up " + this.name);
}

Item.knife.pickUp = function() {
  addLine("You picked up " + this.name);
}

attic.addItem(keytwo);
attic.addItem(lock);
attic.addItem(paper);
basement.addItem(boxes);
basement.addItem(duffleBag);
kitchen.addItem(dishes);
kitchen.addItem(knife);
livingRoom.addItem(plant);
livingRoom.addItem(couches);
hallway.addItem(attic);
stairCase.addItem(basement);
stairCase.addItem(kitchen);
stairCase.addItem(livingRoom);
hallway.addItem(stairCase);
bathroom.addItem(rubberDuck);
closet.addItem(shoes);
bathroom.addItem(medicine);
closet.addItem(ratDroppings);
bathroom.addItem(toothBrush);
dark.addItem(dresser);
dark.addItem(bed);
closet.addItem(deadRat);
dark.addItem(airVents);
dark.addItem(bathroom);
dark.addItem(key);
dark.addItem(closet);
dark.addItem(lamp);
hallway.addItem(dark);

player.move(hallway);
