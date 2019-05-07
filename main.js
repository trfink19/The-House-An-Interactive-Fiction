/*
Here is the basic loop:

1.) Get object of interest
2.) Write descriptive text (append child)
3.) Listen for action
    - Move (back, or specify destination)
    - Inspect (read descriptive text)
    - Take (has to be a container or thing)
    - Talk (has to be a person)

We set up the first thing as a series of interconnected rooms, with random numbers of doors
Each door leads to a student's sketch. Each student will make a game state, I guess.

Whenever the user enters a command, a function parses it and executes it.

Essentially, the loop is:

1.) Display descriptive text
2.) Wait for input
3.) Resolve methods

Each Room is a state. So students need to instantiate their state with starting objects.
Then, they add descriptive text.

For each Room, load the rooms next to it.
That means each student gets a starting location, and each room has rooms in it.



*/

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  if(e.key == "Enter") {
    let input = document.getElementById('inputsm').value
    //execute input script
    addLine("> " + input)

    //parser goes here...
    if(/*Parser says "enter"*/5 == 5){
      //get object to enter
      let object = new Room("destination") //You won't make the object here when it's done
      myLocation.exit()
      myLocation = object
      myLocation.enter()
    }

    document.getElementById("inputsm").value = "";
  }
}


function addLine(text) {
  let para = document.createElement("P");
  let t = document.createTextNode(text);
  para.appendChild(t);
  document.getElementById("feed").appendChild(para);
}

class Room {
  constructor(name, contents) {
    this.name = name;
    if(contents != null) {
      this.contents = contents;
    } else {
      this.contents = [];
    }
  }

  enter() {
    addLine("You find yourself in " + this.name + ".")

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
      addLine("You see " + contents);
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














alert("Loading main.js!")
var objectOfInterest;
let hallway = new Room("another hallway")
var myLocation = new Room("a hallway");

myLocation.addItem(hallway)

myLocation.enter();
