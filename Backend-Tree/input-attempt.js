#!/usr/bin/node

const RealiTree = require('./tree-testing');
const TreeGen = require('./tree-generation');
const args = process.argv;

var BST = new RealiTree();

TreeGen.tree_generation(BST)

BST.insert(args[2], "tree")

BST.inorder(BST.root);
