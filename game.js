var scripts = [
  'main',
  'student',
];

var modules = [];

player = new Player();

let hallway = new Room('hallway', 'description');
for(i in scripts) {
  modules.push(new Module(scripts[i] + "'s room", "scripts/" + scripts[i]+".js", "You see light under the door. Shadows move back and forth as you watch."));
  hallway.addItem(modules[i]);
}

player.move(hallway);
