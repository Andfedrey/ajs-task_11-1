export default class TeamGenerator {
  constructor() {
    this.members = [];
  }

  addHero(hero) {
    this.members.push(hero);
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}
