export default class Team {
  constructor() {
    this.members = [];
  }

  addHero(hero) {
    this.members.push(hero);
  }

  [Symbol.iterator]() {
    let i = 0;
    const { members } = this;
    return {
      next() {
        if (i < members.length) {
          const value = members[i];
          i += 1;
          return { done: false, value };
        }
        return { done: true };
      },
    };
  }
}
