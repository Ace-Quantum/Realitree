#!/usr/bin/node

const RealiTree = require('./tree-testing');
const TreeGen = require('./tree-generation');
const args = process.argv;

var BST = new RealiTree();

TreeGen.tree_generation(BST)

BST.insert(80, "tree")
BST.insert(81, "tree")
BST.insert(79, "tree")
// BST.insert(60, "tree")
BST.insert(40, "tree")
BST.insert(33, "tree")
BST.insert(31, "tree")
BST.insert(7, "tree")

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

console.log("Perfect:")
if (BST.check_perfect(BST.root) === 1){
    console.log("True")
}
else {
    console.log("False")
}
