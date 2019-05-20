// Handle user input
var regexes = [
  /enter/,
  /go back/,
  /inspect/,
  /take/,
  /inventory/,
]

function parse(input) {
  let articleRegex = / the| a| an/
  input = input.replace(articleRegex, '')
  let action;
  let location;
  for (var i = 0; i < regexes.length; i++) {
    if (regexes[i].test(input)) {
      //console.log("Regex test passed")
      action = input.match(regexes[i])
      console.log("Action: " + action + ".")
      input = input.replace(regexes[i], '');
      location = input;
      location = location.replace(/ /, '')
      console.log("Location: " + location + ".")
    } else {
      console.log("No match found");
    }
  }
  let results = [location, action]
  return results
}

function doAction(results, player, newLocation) {
  if (results[1] == 'enter' && newLocation != null) {
    player.cameFrom = player.location;
    player.location = newLocation
    player.location.enter();
  }
  if (results[1] == 'inspect') {
    console.log("Inspecting " + newLocation.name)
    newLocation.inspect(player)
  }
  if (results[1] == 'go back') {
    let destination = player.cameFrom;
    player.cameFrom = player.location;
    player.location = destination;
    player.location.enter();
  }
  if (results[1] == 'take') {
    console.log("Taking " + newLocation.name)
    player.take(newLocation);
    object.take()
  }
  if (results[1] == 'inventory') {
    console.log(player.location.name)
    console.log("Printing inventory...")
    player.printInventory();
  }
  return player
}

// This function gets triggered whenever the 'enter' key gets pressed
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  if (e.key == "Enter") {
    let input = document.getElementById('inputsm').value
    if (input.length > 0) {
      //execute input script
      addLine("> " + input, 'user')
      // Parse the input
      let results = parse(input);
      let newLocation

      let i = 0
      //while(newLocation == null) {
      for (i = 0; i < player.location.contents.length; i++) {
        console.log(player.location.name == results[0])
        if (results[0] == player.location.contents[i].name) {
          console.log("Match!")
          newLocation = player.location.contents[i];
        }
      }
      if (results[0] == player.location.name) {
        console.log("Action refers to self!");
        newLocation = player.location;
        console.log(newLocation.descriptor);
      }

      player = doAction(results, player, newLocation)
      console.log("Player location: " + player.location.name)
    } else {
      addLine("Time passes...You start feeling nervous. It feels like you're being watched")
    }
    document.getElementById("inputsm").value = "";
  }
  let elmnt = document.getElementById("footer");
  elmnt.scrollIntoView();
}

// Print message to the screen
function addLine(text, id) {
  let para = document.createElement("P");
  if (id != null) {
    para.setAttribute("id", id);
  }
  let t = document.createTextNode(text);
  para.appendChild(t);
  document.getElementById("feed").appendChild(para);
}

// Room class
class Room {
  constructor(name, descriptor, contents) {
    this.name = name;
    this.descriptor = descriptor;
    if (contents != null) {
      this.contents = contents;
    } else {
      this.contents = [];
    }
  }

  enter(mode) {
    addLine("You are now in the " + this.name + ".")

    //Get contents of room
    let contents = ""
    if (this.contents.length > 0) {
      for (var i = 0; i < this.contents.length; i++) {
        if (i == this.contents.length - 1) {
          if (i > 0) {
            contents = contents + " and a " + this.contents[i].name + ".";
          } else {
            contents = contents + this.contents[i].name + ".";
          }
        } else {
          contents = contents + this.contents[i].name + ", ";
        }
      }
      addLine("You see a " + contents);
    } else {
      addLine("You see nothing")
    }
  }

  inspect(player) {
    if (this.descriptor && player.location == this) {
      console.log("Printing description")
      addLine(this.descriptor);
    } else {
      addLine("You're too far away to see it well.")
    }
  }


  exit() {

  }

  addItems(items) {
    for (var i = 0; i < items.length; i++) {
      this.contents.push(items[i]);
    }
  }

  addItem(item) {
    this.contents.push(item);
  }
}

class Item {
  constructor(name, descriptor) {
    this.name = name;
    this.descriptor = descriptor;
  }

  inspect() {
    let description = this.descriptor
    addLine("The " + this.name + " is " + description)
  }
}

class Player {
  constructor(location) {
    this.location = location;
    this.cameFrom = null;
    this.inventory = [];
  }

  take(item) {
    addLine("You put the " + item.name + " into your inventory")
    this.inventory.push(item);

    Item.prototype.take()
  }

  printInventory() {
    console.log("reading inventory...");
    let list = '';
      for(var i in this.inventory) {
        list = list + this.inventory[i].name;
      }
      addLine("You have a " + list + " in your inventory");
    }
  }



// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let hallway = new Room("long hallway");
let pedastal = new Item("pedastal", "an onyx colored marble webbed with white veins, chipped around the top edges and down the side. It has a dark liquid dripping out of the bowl and down the face. The liquid disappears down a slit at the base of the pedastal")
let potion = new Item ("strange vial", "a large glass bottle, filled with a dark liquid and corked with a winestop")

let room = new Room("dark room", "The room smells of sulfer. The floor is covered in thick dust and there are footprints leading through the door");
let door = new Room ("door", "The door is solid oak with black, iron hinges on this side.")
let table = new Item ("table", "light wood, covered in stains and cuts. It has two drawers")

let foyer = new Room("huge foyer", "The foyer has two sets of stairs. One set goes up, one goes down.")
let stand = new Item("stand", "small. It has robes on it.")
let robes = new Item ("robe", "dark and covered in stains")

let stairsup = new Room ("stairs up", "It is a large set of hardwood steps extending up into nothing. They're rarely used and covered in dust.")
let nail = new Item ("nail", "rusty and covered in blood. It is bent out of shape.")

let stairsdown = new Room ("stairs down", "It is a narrow set of concrete stairs going down into nothing. They seem to be used extremely often. A dark liquid drips down the stairs.")

// Put them in their spots
hallway.addItem(pedastal);
hallway.addItem(potion);

let locations = [];
locations.push(hallway, room);
player.location = new Room("hallway");

room.addItem(door);
room.addItem(table);

door.addItem(foyer);

foyer.addItem(stairsup);
foyer.addItem(stairsdown);
foyer.addItem(robes);
foyer.addItem(stand);

stairsup.addItem(nail);

player.location.addItems(locations);

player.location.enter();
