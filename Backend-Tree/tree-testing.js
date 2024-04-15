#!/usr/bin/node

// This is where we create the tree initially
// With the root being set to null upon creation
class RealiTree {
    constructor()
    {
        this.root = null;
    }
}

// building a class for our binary trees
class Node {
    constructor(value, element) {
        this.key = value;
        this.elem = element;

        this.left = this.right = null;
    }
}

// Helper function to create a new node
// initializes the node with it's value.
//      Note to future Ace: update this to allow 
//      a secondary value of mountains and the like.
insert(data){
    var newNode = new Node(data, element);

    if(this.root === null)
        this.root = newNode;
    else
        // I have no idea what this.root refers to
        this.insertNode(this.root, newNode);
}

insertNode(node, newNode){

}
