var scripts = [
  'main',
  'student',
];

var modules = [];

player = new Player();

let hallway = new Room('hallway', 'description');
for(i in scripts) {
  modules.push(new Module(scripts[i]+".js"));
  hallway.addItem(modules[i]);
}

player.move(hallway);
