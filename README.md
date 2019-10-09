# The-House-An-Interactive-Fiction

**The House** is a framework to help you create interactive fictions. Using the frameowork, you can create a series of rooms which are connected by doors. The player moves through them, and sees different objects in the rooms. You can add your own code to create an adventure where players solve puzzles, talk to people, fight monsters, or discover the secrets of the House.

----

# Table of Contents

* [Getting Started](#getting-started)
* [Adding the Player](#adding-the-player)
* [Adding Rooms](#adding-rooms)
* [Connecting Rooms](#connecting-rooms)

----

# Getting Started

To get started, you need to download the source code and edit the files using a text editor. Follow the steps below to get set up.

### Step 1: Text Editor

The text editor is the software you will use to write your code. Click one of the links below to download:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Atom](https://atom.io/)

Both are free. Choose one, they are very similar so don't get too worried about it.

### Step 1.5: GitHub Desktop

GitHub Desktop is an excellent tool for sharing code and managing versions. We strongly recommend that you download it if you have not already. Use the link below:

* [GitHub Desktop](https://desktop.github.com/)

You don't need it, but it makes things very simple for you.

### Step 2: The House Source Code

You can download the source code for **The House** from GitHub. Here are some detailed steps for downloading the project:

#### Method 1: With GitHub Desktop

1. Open **GitHub Desktop**
2. Click `Clone a Repository` (if you don't see a button, go to `File > Clone a Repository`)
3. Click the `URL` tab
4. Paste this link into the text box: [https://github.com/HarrisonburgHighSchool/The-House-An-Interactive-Fiction](https://github.com/HarrisonburgHighSchool/The-House-An-Interactive-Fiction)
5. Click `Clone`

To **edit your code**, follow these steps:

1. Open **GitHub Desktop**
2. Go to `Repository > Open in Atom` or `Repository > Open in Visual Studio Code`
3. Make changes to the `main.js` file

To **run your code**, follow these steps:

1. Open **GitHub Desktop**
2. Go to `Repository > Show in Explorer` (Windows) or `Repository > Show in Finder` (Mac)
3. Double-click the `index.html` file

#### Method 2: Without GitHub Desktop

1. Go to the project GitHub page: [https://github.com/HarrisonburgHighSchool/The-House-An-Interactive-Fiction](https://github.com/HarrisonburgHighSchool/The-House-An-Interactive-Fiction)
2. Click the green `Clone or Download` button in the upper right-hand corner
3. Choose `Download ZIP`
4. Extract the zipped files that downloaded to your computer

To **edit your code**, follow these steps:

1. Find your extracted folder containing the project files
2. Open the folder in your text editor
3. Make changes to the `main.js` file

To **run your code**, follow these steps:

1. Find your extracted folder containing the project files using Finder or the File Explorer
2. Open the project folder
3. Double-click on `index.html`

----

# Adding the Player

Before you start adding rooms to the game, there are a couple of important things to know. First, the code in your `main.js` file runs from top to bottom. The first two lines of your `main.js` file should be this:

```javascript
alert('Loading game...');
var player = new Player(); // Create the player
```

These two lines should not change. You will not be able to run the game if you do not have a player created!

# Adding Rooms

To add rooms, you need to do a couple of things:

1. Create a `variable` to store the rooms in
2. Use the `new Room()` function to create a room
3. Give the room a `name` and a `description`
4. Move the player to the starting room

### Step 1: Create a variable to store the room in

To create a variable, use `var` followed by a word. It can be any word, but it's best to choose a word that describes what you are trying to store in it. In this example, I am going to create a hallway, so I will choose to use `hallway` to store my `Room` data in.

Add this code underneath where you created the `player`:

```javascript
var hallway
```

### Step 2: Use the `new Room()` function to create a room

Now that we have created our `hallway` variable, we need to store `Room` data in it. To do that, use the `Room()` function.

Change the line where you created your `hallway` variable so it looks like this:

```javascript
var hallway = new Room();
```

The `new Room()` function creates `Room` data, which we have stored inside the variable named `hallway`.

### Step 3: Give the `Room` a name and description

We need to give the `Room` we created a `name` and a `description`. To do that, you need to add some data to the `new Room()` function.

Change the line where you created the `new Room()` so it looks like this:

```javascript
var hallway = new Room('dusty hallway`, `a hallway full of old furniture. The floor creaks as you walk');
```

The first thing we added was a `name`: 'dusty hallway'. Then we added a `description`: 'a hallway full of old furniture. The floor creaks as you walk'.

When the player enters the `hallway`, the game will say to them: `You see a dusty hallway`. If the player types `inspect hallway` into the text box, the game will read the `hallway` description.

### Step 4: Move the Player

Finally, we need to move the `player` to the starting room. We only have one room right now, so we should add the `player` to the `hallway`. 

Add this line of code underneath where you created the `hallway`:

```javascript
player.move(hallway);
```

Try running your code by finding your project folder and double-clicking the `index.html` file. What happens? Try this:

* Type `inspect hallway` and press `Enter`

----

# Connecting Rooms

Once you have created one room, you will probably want to add more. Adding rooms is a two-step process:

1. Create the new room using the `new Room()` function
2. Connect the new room to an old room

When you connect two rooms, it creates a doorway between them. Here's what you add to the code to connect two rooms:

### Step 1: Create a new room

You create new rooms the same way you create your first room: using the `new Room(name, description)` function.

Add this code to your `main.js` file near where you created the first room:

```javascript
var kitchen = new Room('dirty kitchen', ' a dirty kitchen. The sink is full of dishes, and something smells rotten')
```

The `kitchen` has a name: `dirty kitchen`. It also has a description: `' a dirty kitchen. The sink is full of dishes, and something smells rotten'`

### Step 2: Connect the new room to an old room

To connect the rooms, you need to `add()` the new room to an old room. If you are following from the [Adding Rooms](#adding-rooms) section, you already have a `hallway` and a `kitchen`. To connec the `kitchen` to the `hallway`, use the `add()` function.

Add this line of code after you make the rooms, but before you move the `player`.

```javascript
hallway.addItem(kitchen);
```

Now run the code. What happens? Try this:

* Type `enter kitchen`. What happens?
* Type `go back`. What happens?
* Type `inspect kitchen` while you are in the `hallway`. What happens?
* Type `enter kitchen`, then `inspect kitchen`. What happens now?
* Type `enter hallway` while you are in the `kitchen`. How might you solve this problem?

----
