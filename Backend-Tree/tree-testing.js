#!/usr/bin/node

// building a class for our binary trees
// But this may not be necessary due to the tutorial
// Not actually having this part.
// But surely we do need a constructor, yeah?
class Node {
    constructor(value, element) {
        this.data = value;
        this.elem = element;

        this.left = this.right = null;
    }
}

// This is where we create the tree initially
// With the root being set to null upon creation
class RealiTree {
    constructor()
    {
        this.root = null;
    }


    // Helper function to create a new node
    // initializes the node with it's value.
    //      Note to future Ace: update this to allow 
    //      a secondary value of mountains and the like.
    //          Did that I think lol We'll see
    insert(data, element) 
    {
        var newNode = new Node(data, element);

        if(this.root === null)
            this.root = newNode;
        else
            // I have no idea what this.root refers to
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode)
    {
        if(newNode.data < node.data){
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }

        else{
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.key);
            console.log(node.elem);
            this.inorder(node.right);
        }
    }

    

}

module.exports = RealiTree;