
alert("Loading main.js!");
player = new Player()

let hallway = new Room("dusty hallway", "The wooden floor squeaks with each step and there are creaks in it.");
let creaks = new Item("creaks", "Is looks like they are filled dried drops of blood!");
//let bedroomdoor = new Room("bedroomdoor", "the door has knife stabs on it.")
let bedroom = new Room("dark bedroom", "There are three beds, a table, and a picture frame on the wall.");
let table = new Item("table", "There are a lot of newspaper on the table with the head line 'Tombstone's Reaper Escaped Tombstone Psychiatric Hospital.' It sounds like the guy left some dark footprints in this town.");
let beds = new Item("beds", "2 of the beds are bloody! The smallest one is clean though.");
let frame = new Item("picture frame", "The picture is of 2 twins sharing a birthday cake. The date on the picture goes back exactly 5 years which means that today is their birthday. It's weird how similar the person holding the cake in the picture and I look a like.");
let bathroom = new Room("smelly bathroom", "There is a bathtube, a sink, and a mirror.");
let mirror = new Item("mirror", "'It was supposed to be only me, myself, and I' is written on the mirror ... ");
let bathtube = new Item("bathtube", "It's filled with a black, slimy liquid that smells just like the acids in the laundry room; only worse.");
let closetdoor = new Room("closetdoor", "It smells like something is rotting in there.");
let closet = new Room("closet", "Finally someone in this house! It the twins. Wait; no way. It not the twins, it's my twins; or to be more exact it's my dead twins ... What did I do.");
let kitchen = new Room("dirty kitchen", "It looks like it hasn't been cleaned for ages. There are cake leftovers on the counter and it smells fresh. Someone has been here not so long ago.");
let cake = new Item("cake", "The frosting on the leftover piece says 'Happy Deathday Brothers!'");
let livingroom = new Room("neglected livingroom", "There is a couch with stitches in its middle and a small clock on the wall.");
let couch = new Item("couch", "you cut open the stitches in the couch and find a key with a small piece of paper that is attached that says 'It's Over Now.'");
let clock = new Item("clock", "The clock is stuck on 11:59 am. This is the same time the photo -in the picture frame- in the bedroom was taken");
let laundryroom = new Room("smelly laundryroom", "There are cloths in the washing machine that need to be washed.");
let acids = new Item("acids", "They are dissolving acids, and they smell horrible. What would they be doing in a laundry room???");
let cloths = new Item("cloths", "All of the cloths are SOAKED IN BLOOD AND TORN! It's getting scary. You guess it was an animal attack but no animal can do that much damage.");

let eat = /eat/;
let eatAction =  function(action, player, object) {
    if (action == 'eat') {
      object.eat();
    }
    return player;
  }
addAction(eat, eatAction)

cake.eat = function () {
    addLine("You take a small piece which tastes weird ... you feel a little dizzy but don't give it much thought."),

}


hallway.addItem(creaks);
//hallway.addItem(bedroomdoor);
hallway.addItem(bedroom);
bedroom.addItem(beds);
bedroom.addItem(frame);
bedroom.addItem(table);
bedroom.addItem(bathroom);
bathroom.addItem(mirror);
bathroom.addItem(bathtube);
bathroom.addItem(closetdoor);
closetdoor.addItem(closet);
hallway.addItem(kitchen);
kitchen.addItem(cake);
kitchen.addItem(laundryroom);
laundryroom.addItem(acids);
laundryroom.addItem(cloths);
laundryroom.addItem(livingroom);
livingroom.addItem(couch);
livingroom.addItem(clock);




player.move(hallway);
