#!/usr/bin/node

const RealiTree = require('./tree-testing');
const TreeGen = require('./tree-generation');
const args = process.argv;

var BST = new RealiTree();

TreeGen.tree_generation(BST)

BST.insert(args[2], "tree")
// BST.insert(args[3], "tree")

// BST.inorder(BST.root);
console.log("Balance:")
console.log(BST.check_balance(BST.root))

console.log("Full:")
if (BST.check_full(BST.root) === 1){
    console.log("True")
}
else {
    console.log("False")
}
