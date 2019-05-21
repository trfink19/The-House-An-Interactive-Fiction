// Create the contents of your room here.


alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("hallway");
let kitchen = new Room("kitchen", "The kitchen is wet with fresh blood.");
let bedroom = new Room("master bedroom", "The bedroom floor creaks every time you step with a sound coming from the closet.")
let basement = new Room("basement", "The basement is pitch black with sound of water drops and footsteps.");
let chaosCorner = new Room("guest bedroom", "You find yourself in the middle of chaos, dolls moving and tweezers slicing.")
let butcherHollow = new Room("butchers basement", "You see a man slicing dead animals and he's coming for you.")
let towel = new Item("towel", "soaking in blood.")
let bread = new Item("bread", "moldy with bite marks.")
let doll = new Item("doll", "slowly walking towards you and whispering things to you.")
let tweezers = new Item("tweezer", "sharp with blood on the tip and fingerprints in blood.")
let sword = new Item("sword", "silver with a diamond handle.")
let skeletonBone = new Item("skeletonBone", "dry with remains of humans.")
let vase = new Item("vase", "golden with symbols of war.")
let suitcase = new Item("suitcase", "ripped with bodies inside.")
let roosterFeet = new Item("roosterFeet", "rotten with a mold scent coming off of it.")
let pigBrain = new Item("pigBrain", "squishy and shredded by the butcher.")
addLine("Fuctions lick, beat, and touch are now available")
// Put them in their spots
kitchen.addItem(towel);
kitchen.addItem(bread);
kitchen.addItem(butcherHollow);
kitchen.addItem(basement);
bedroom.addItem(suitcase);
bedroom.addItem(vase);
bedroom.addItem(chaosCorner);
basement.addItem(sword);
basement.addItem(skeletonBone);
chaosCorner.addItem(doll);
chaosCorner.addItem(tweezers);
butcherHollow.addItem(roosterFeet);
butcherHollow.addItem(pigBrain);
let locations = [];
locations.push(kitchen, bedroom);

hallway.addItems(locations);

player.move(hallway);

let beatAction = /beat/;
let beat = function(action, player, object) {
  if (action == 'beat') {
    object.beat();
    //player.location.removeItem(object.name);
  }
  return player;
}
addAction(beatAction, beat);

Item.prototype.beat = function() {
  addLine("You beat the " + this.name + " and it's been destroyed.");
}


let lickAction = /lick/;
let lick = function(action, player, object) {
  if (action == 'lick') {
    object.lick();
  }
  return player;
}
addAction(lickAction, lick);

Item.prototype.lick = function() {
  addLine("You lick the " + this.name + " and you have been burned.");
}

let touchAction = /touch/;
let touch = function(action, player, object) {
  if (action == 'touch') {
    object.touch();
  }
  return player;
}
addAction(touchAction, touch);

Item.prototype.touch = function() {
  addLine("You touch the " + this.name + " and your hands are wet.");
}
