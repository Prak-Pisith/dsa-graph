/* 
  Graph Data Structure
*/

class Graph {

  private nodes: Map<string, string[]>;

  constructor() {
    this.nodes = new Map<string, string[]>();
  }

  addFriend(person: string, friend: string): void {
    if (!this.nodes.has(person)) {
      this.nodes.set(person, []);
    }
    if (!this.nodes.has(friend)) {
      this.nodes.set(friend, []);
    }
    this.nodes.get(person)!.push(friend);
    this.nodes.get(friend)!.push(person);
  }

  getFriends(person: string): string[] {
    return this.nodes.get(person) || [];
  }
}

const socialGraph = new Graph();

socialGraph.addFriend('Nimol', 'Bopha');
socialGraph.addFriend('Nimol', 'Lihong');
socialGraph.addFriend('Dary', 'Lihong');


const nimolFriends = socialGraph.getFriends('Nimol');
console.log(`Nimol friends: ${nimolFriends}`);

const LihongFriends = socialGraph.getFriends('Lihong');
console.log(`Lihong friends: ${LihongFriends}`);