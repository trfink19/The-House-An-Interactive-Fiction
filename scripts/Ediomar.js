// Handle user input

var regexes = [
  /enter/,
  /go back/,
  /inspect/,
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
    newLocation.inspect()
  }
  if (results[1] == 'go back') {
    let destination = player.cameFrom;
    player.cameFrom = player.location;
    player.location = destination;
    player.location.enter();
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
      for (i = 0; i < player.location.contents.length; i++) {
        if (results[0] == player.location.contents[i].name) {
          console.log("Match!")
          newLocation = player.location.contents[i]
        } else if(results[0] == player.location.name) {
          console.log("Action refers to self!")
          newLocation = player.location;
          console.log(newLocation.descriptor)
        }
      }

      player = doAction(results, player, newLocation)
      // if (results[1] == 'enter' && newLocation != null) {
      //   player.cameFrom = player.location;
      //   player.location = newLocation
      //   player.location.enter();
      // }
      // if (results[1] == 'inspect' && newLocation != null) {
      //   console.log("Inspecting...")
      //   newLocation.inspect()
      // }
      // if (results[1] == 'go back') {
      //   let destination = player.cameFrom;
      //   player.cameFrom = player.location;
      //   player.location = destination;
      //   player.location.enter();
      // }
    } else {
      addLine("Time passes... You start feeling nervous.")
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
    addLine("You find yourself in a " + this.name + ".")

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
      if (this.descriptor) {
        addLine(this.descriptor)
      }
      addLine("You see a " + contents);
    } else {
      addLine("You see nothing")
    }
  }

  inspect() {
    if(this.descriptor) {
      console.log("Printing description")
      addLine(this.descriptor);
    }
  }


  exit() {

  }

  addItems(Items) {
    for (var i = 0; i < Items.length; i++) {
      this.contents.push(Items[i]);
    }
  }

  addItem(Item) {
    this.contents.push(Item);
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
  }
}

// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line
player = new Player()

//Create your objects
let aRoom = new Room("aRoom","A cold room with only a table and a tv with a message and a note");
let tv = new Item("tv", "with a message on the screen-- enter next room");
let note = new Item("note","A note right next to the tv with a message that reads--You are in for a surprise")
let livingRoom = new Room("livingRoom","A samll livingRoom with two tables and a sofa");
let thumbDrive = new Item("thumbDrive","Siting on the big table a thumbDrive holds something withing it");
let battery = new Item("bettery","A very shiny bettery and a powerfull one as well");
let library = new Room("library"," A small sized library with only two book stands");
let headset = new Item("headset","A nice lookign headset with a gold plating");
let basement = new Room("basement","It feels very cold but there is sometihng legendary here");
let legenDaryController = new Item("legenDary Controller","Inside the chest there is a legendary gaming controlle")
let chest = new Item("chest","Inside of it there is sometihng trully special.");
let TheRoom = new Room("TheRoom","TheRom has a big tv and a very comfortable chair");
let bigTV = new Item("bigTV"," it is a 4k gaming TV");
let TvRemote = new Item("Tv Remote","A silver plated remote");
let chair = new Item("chair"," very comfortable chair with a soda dispenser");

TheRoom.addItem(bigTV);
TheRoom.addItem(TvRemote);
TheRoom.addItem(chair);
basement.addItem(legenDaryController);
basement.addItem(chest);
livingRoom.addItem(thumbDrive);
livingRoom.addItem(battery);
library.addItem(headset);
aRoom.addItem(TheRoom);
aRoom.addItem(basement);
aRoom.addItem(tv);
aRoom.addItem(livingRoom);
aRoom.addItem(library);
aRoom.addItem(note);

player.location = aRoom;
player.location.enter();
