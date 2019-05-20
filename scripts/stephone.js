
// Create the contents of your room here.
alert("Loading main.js!"); //Don't change this line



player = new Player();

//Create your objects
let livingRoom = new Room('living room', 'This is a room to relax in.');
let table = new Item('table', 'brown, made of wood.');
let mirror = new Item('mirror','a portal to another room within the house')
let bedroom = new Room('bedroom', 'a place to sleep');
let bed = new Item('bed, wood frame');
let tv = new Item('tv, black');
let mirror = new Item('mirror2','another portal to another room')
let dresser = new Item('dresser', 'brown and made of word');
let bedroom2 = new Room('bedroom', 'This is a room to also sleep in' );
let vase = new Item('vase','This vase is a red, white and gold honeycombed textured vase')
let bedroom3 = new Room('bedroom3', 'This room is a guest room ');
let mirror = new Item('mirror3',' this mirror leads to another room')
let bed2 = new Item('bed2','the bed is blue in color with a king sized matress');
let kitchen = new Item('kitchen','the kitchen the the place to cook meals');
let oven = new Item('oven','the oven is where you can prepare food');
livingRoom.addItem(table);
livingRoom.addItem(mirror);
livingRoom.addItem(kitchen);
livingRoom.addItem(bedroom);
bedroom.addItem(bedroom2);
bedroom.addItem(mirror2);
bedroom.addItem(bedroom3);


bedroom.addItem(bed);
bedroom.addItem(tv);

bedroom2.addItem(vase);
bedRoom3.addItem(mirror3)
bedroom3.addItem(kitchen);

player.move(livingRoom);
