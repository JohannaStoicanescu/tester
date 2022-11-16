/*function Enemy(name, level, emoji, attackName) {
  this.name = name;
  this.level = level;
  this.emoji = emoji;
  this.attackName = attackName;

  this.attack = function () {
    return `${this.name} ${this.attackName} you!`;
  };
}

const spider = Enemy("Spider", 1, "🕷", "bites");
console.log(spider);
*/



const letter = ["a", "b", "c", "d", "e", "f", "g", "h"]

function buildDamier() {
  const ligne = new Array(8);
  for (let i = 0; i < 8; i++) {
    const colonne = new Array(8);
    ligne[i] = colonne;

    for (let j = 0; j < 8; j++) {
      ligne[i][j] = `${letter[i]} - ${[j + 1]}`;
    }

  }

  return (ligne)
}

console.log(buildDamier());




