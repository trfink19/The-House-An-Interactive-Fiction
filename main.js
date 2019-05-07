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

class Person {
  constructor(name) {
    this.name = name;
  }

  enter() {
    console.log("You find yourself in " + this.name + ".")
    console.log("You see [contents]")
  }

  exit() {

  }


}
alert("Loading main.js!")
var myLocation = new Person("a hallway");
myLocation.enter();
