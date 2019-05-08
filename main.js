// Handle user input
document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
  if(e.key == "Enter") {
    let input = document.getElementById('inputsm').value
    //execute input script
    addLine("> " + input)
    // Remove input trash
    let articleRegex = / the| a| an/
    input = input.replace(articleRegex, '')
    // Parser for entering a room
    let enter = /enter /;
    let goBack = /go back/;
    if(enter.test(input)){
      let newLocation = input.replace(enter, '')
      console.log("Regex test passed! New string: " + newLocation)
      // Check to see which room we are trying to enter
      let loop = true;
      let i = 0;
      while (loop == true) {
        if(newLocation == myLocation.contents[i].name) {
          //get object to enter
          let object = myLocation.contents[i];
          console.log("Moving to " + object.name + ".")
          myLocation.exit();
          cameFrom = myLocation;
          myLocation = object;
          myLocation.enter();
          loop = false;
        }
        i++;
        if (i > myLocation.contents.length) {
          addLine("You don't see a " + newLocation + " here.");
          loop = false;
        }
      }
    }
    if(goBack.test(input)) {
      let object = cameFrom;
      console.log("Moving to " + object.name + ".");
      myLocation.exit()
      cameFrom = myLocation;
      myLocation = object;
      myLocation.enter();
    }
    document.getElementById("inputsm").value = "";
  }
}

// Print message to the screen
function addLine(text) {
  let para = document.createElement("P");
  let t = document.createTextNode(text);
  para.appendChild(t);
  document.getElementById("feed").appendChild(para);
}

// Room class
class Room {
  constructor(name, descriptor, contents) {
    this.name = name;
    this.descriptor = descriptor;
    if(contents != null) {
      this.contents = contents;
    } else {
      this.contents = [];
    }
  }

  enter() {
    addLine("You find yourself in a " + this.name + ".")

    //Get contents of room
    let contents = ""
    if (this.contents.length > 0) {
      for(var i = 0; i < this.contents.length; i++) {
        if (i == this.contents.length - 1) {
          if(i > 0) {
            contents = contents + " and " + this.contents[i].name + ".";
          } else {
            contents = contents + this.contents[i].name + ".";
          }
        } else {
          contents = contents + this.contents[i].name + ", ";
        }
      }
      if(this.descriptor) {
        addLine(this.descriptor)
      }
      addLine("You see a " + contents);
    } else {
      addLine("You see nothing")
    }
  }

  exit() {

  }

  addItems(items) {
    for(var i = 0; i < items.length; i++) {
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
    return description
  }
}



// Create the contents of your room here.
alert("Loading main.js!")
var cameFrom;
let hallway = new Room("dusty hallway")
let vase = new Item("vase", "made of blue glass, chipped on top. Filled with a dark liquid.")
let room = new Room("dark room")
hallway.addItem(vase)
let locations = []
locations.push(hallway, room)
var myLocation = new Room("hallway");

myLocation.addItems(locations)

myLocation.enter();
