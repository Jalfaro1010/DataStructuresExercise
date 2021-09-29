// 1 A
const jedi = [];

// 1 B
jedi[0] = "Luke";
console.log(jedi);

// 1 C
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1 D
jedi.unshift("Yoda");
console.log(jedi);

// 1 E
console.log(jedi[1]);
console.log(jedi);

// 1 F
jedi.pop("Obi-Wan Kenobi");
console.log(jedi);

// 1 G
jedi.shift("Yoda");
console.log(jedi);

// 2 A
const sithLords = ["Darth Vader",
"Darth Sidious",
"Darth Maul"
]
console.log(sithLords);

// 2 B
const imperialOfficers = [
    "Grand Moff Tarkin", "Orson Krennic"
]
console.log(imperialOfficers);

// 2 C
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2 D
starWarsVillains.slice(0, 1);
console.log(starWarsVillains);

// 3 A
const droids = { astromech: "R2-D2", protocol: "C-3PO",  assassin: "IG-88"};
console.log(droids);

// 3 B
console.log(droids["astromech"]);

// 3 C
console.log(droids.protocol);

// 3 D
droids["assassin"] = "IG-11";
console.log(droids);