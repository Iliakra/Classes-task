/* eslint-disable max-classes-per-file */
export default class Character {
  constructor() {
    this.life = 1;
    this.level = 0;
    this.health = 15;
    this.attack = 15;
    this.defence = 15;
  }

  levelUp() {
    if (this.life !== 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего!');
    }
  }
}
export class Bowman extends Character {
  constructor() {
    super();
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor() {
    super();
    this.attack = 40;
    this.defence = 10;
    this.life = 0;
  }
}

export class Magician extends Character {
  constructor() {
    super();
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor() {
    super();
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor() {
    super();
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor() {
    super();
    this.attack = 40;
    this.defence = 10;
  }
}
