/*
  Graph Data Structure
*/
var Graph = /** @class */ (function () {
    function Graph() {
        this.nodes = new Map();
    }
    Graph.prototype.addFriend = function (person, friend) {
        if (!this.nodes.has(person)) {
            this.nodes.set(person, []);
        }
        if (!this.nodes.has(friend)) {
            this.nodes.set(friend, []);
        }
        this.nodes.get(person).push(friend);
        this.nodes.get(friend).push(person);
    };
    Graph.prototype.getFriends = function (person) {
        return this.nodes.get(person) || [];
    };
    return Graph;
}());
var socialGraph = new Graph();
socialGraph.addFriend('Nimol', 'Bopha');
socialGraph.addFriend('Nimol', 'Lihong');
socialGraph.addFriend('Dary', 'Lihong');
var nimolFriends = socialGraph.getFriends('Nimol');
console.log("Nimol friends: ".concat(nimolFriends));
var LihongFriends = socialGraph.getFriends('Lihong');
console.log("Lihong friends: ".concat(LihongFriends));
