#!/usr/bin/node

// building a class for our binary trees
// But this may not be necessary due to the tutorial
// Not actually having this part.

const { tree_generation } = require("./tree-generation");

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
            console.log(node.data);
            console.log(node.elem);
            this.inorder(node.right);
        }
    }

    find_height(node){
        let height_left = 0;
        let height_right = 0;

        if (node === null){
            return (0);
        }

        if (node.left !== null){
            height_left = this.find_height(node.left) + 1;
        }

        if (node.right !== null){
            height_right = this.find_height(node.right) + 1;
        }

        if (height_left > height_right){
            return (height_left)
        }

        return (height_right);
    }

    check_balance(node){
        let height_left = this.find_height(node.left);
        let height_right = this.find_height(node.right);

        return (height_left - height_right);
    }

    check_full(node){
        let lnum = 0;
        let rnum = 0;

        if (node === null){
            return (0);
        }

        if ((node.left === null && node.right !== null) || (node.left !== null && node.right === null)){
            return (0);
        }

        if (node.left === null && node.right === null){
            return (1);
        }

        lnum = this.check_full(node.left);
        rnum = this.check_full(node.right);

        if ((lnum === 0 && rnum === 1) || (lnum === 1 && rnum === 0)){
            return (0);
        }

        return (1);
    }
}

module.exports = RealiTree;