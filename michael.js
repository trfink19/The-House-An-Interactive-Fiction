// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("dusty hallway", "clouds of dust kick up with every step.");
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room", "It is dark");
let boiler_room = new Room("boiler room","It's colder than normal.");
let boiler = new Room("boiler","The boiler doesn't seem to be working.");
let bodybag = new Room("bodybag","I could hide in this but I won't know when I'm safe without assistance.");
let garage = new Room("garage","The exit is welded shut.");
let closet = new Room("closet","There's something on top but I'm not tall enough.");
let attic = new Room("attic","I would need a light to see in here.");
let basement = new Room("basement","If I were to go down here like an idiot, I'll need a light to see.");
let spark_plug = new Item("spark plug","is used to power small machines.")
let oil_lamp1 = new Item("empty oil lamp","empty.")
let oil_canister = new Item("oil canister","filled to the brim with oil, strange the U.S should've bombed me by now.")
let armor_padding = new Item("padding","made of some sort of gel.")
let battering_ram = new Item("battering ram","going to help me break out, but it'll be loud.")
let ladder = new Item("large ladder","foldable.")
let wrench = new Item("wrench","rusty but it'll work as a tool and a weapon.")
let bolts = new Item("metal bolts","is useful for industrial repair.")
let metal_shard = new Item("metal shard","is from a small metal object, 'Emergency fi' is engraved on it.")
let lockbox = new Item("lockbox","locked, duh.")
let lockbox_key = new Item("lockbox key","for a lockbox, duh")
let heat_glue1 = new Item("heatproof glue","used for things that produce a lot of heat.")
let heat_glue2 = new Item("empty glue bottle","empty, but at least it can be thrown.")
let small_device = new Item("tracker","going to tell me if someone is near, I hope I won't need it.")
let swat_vest1 = new Item("SWAT vest","lacking in protective padding.")
let swat_vest2 = new Item("padded SWAT vest","now padded with gel.")
let coat = new Item("coat","heatproof, and it came with a pressure valve.")
let pressure_valve = new Item("pressure valve","in good shape dispite having a half-life of 3 years.")
let lighter1 = new Item("broken lighter","going to burn me if I use it without fixing the hole, 're Starter' is engraved on it.")
let lighter2 = new Item("lighter","now usable, has 'Emergency fire starter' engraved on it.")
let orphan = new Item("disabled orphan","only a newborn and it's already abused regularly, it's so LOUD.")
let warning = new Item("warning","saying not to look at this link, https://www.youtube.com/watch?v=dQw4w9WgXcQ strange... maybe you should ignore the warning and do it anyway.")
// Put them in their spots
hallway.addItem(vase);
hallway.addItem(boiler_room);
hallway.addItem(basement);
hallway.addItem(orphan);
hallway.addItem(warning);
boiler_room.addItem(boiler);
boiler_room.addItem(bodybag);
boiler_room.addItem(spark_plug);
boiler_room.addItem(oil_lamp1);
boiler_room.addItem(garage);
bodybag.addItem(armor_padding);
bodybag.addItem(ladder);
boiler.addItem(wrench);
boiler.addItem(metal_shard);
garage.addItem(bolts);
garage.addItem(lockbox);
garage.addItem(attic);
garage.addItem(heat_glue1);
attic.addItem(oil_canister);
attic.addItem(small_device);
closet.addItem(lockbox_key);
closet.addItem(coat);
basement.addItem(swat_vest1);
basement.addItem(battering_ram);

let feckAction = /feck/;
let feck = function(action, player, object) {
 if (action == 'feck'){
   addLine("You say feck out loud and... nothing happened.")
 }
 return player;
}
addAction(feckAction, feck);

let endmysufferingAction = /endmysuffering/;
let endmysuffering = function(action, player, object) {
  if (action == 'endmysuffering') {
    addLine("You've finally had enough of the pain and you took some painkillers, what did you think I meant?")
  }
  return player;
}
addAction(endmysufferingAction, endmysuffering);

let dabAction = /dab/;
let dab = function(action, player, object) {
  if (action == 'dab') {
    addLine("You dab and immediately get shot, when you wake a voice says welcome back and goes quiet, this is why you were put up for adoption you stupid fecker.")
  }
  return player;
}
addAction(dabAction, dab);

let eatAction = /eat/;
let eat = function(action, player, object) {
  if (action == 'eat') {
    object.eat();
  }
  return player;
}
addAction(eatAction, eat);

let sickflipAction = /sickflip/;
let sickflip = function(action, player, object) {
  if (action == 'sickflip') {
    addLine("You perform a backflip and a mysterious crowd starts to clap, very unnerving.")
  }
  return player;
}
addAction(sickflipAction, sickflip);

orphan.eat = function(){
 addLine("You gorge on the crying child to stop the screeches, it cries out in excruciating pain in a desperate but futile attempt to be spared, but no you crush it in between your teeth as you mercilessly slaughter the innocent child with nothing but bloodlust and malice chiming in your skull as blood spews everywhere and onto the walls of this damned place and powdered bone falls to the ground to be stamped out from under your boots as internal organs slop out of your gullet and stain your shirt red with blood and hatred, but this meager sacrifice cannot saciate your desire for innocent life. Are you happy with yourself? Do you feel ecstasy from the slaughter? Think of it's foster parents who where worried sick about their new child because they're unable to concive one naturally, and you just tore it apart like an animal from hell. That child has been abused all it's life and you put the nail in the coffin. Was the silence really worth it?")
}

let locations = [];
locations.push(hallway, room);
player.location = new Room("hallway", "It is dark. The floorboards creak when you walk.");
player.location.addItems(locations);
player.move(hallway);
player.location.enter();
