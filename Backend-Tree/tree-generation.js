#!/usr/bin/node

const RealiTree = require('./tree-testing');

exports.tree_generation = function(BST){

    BST.insert(34, "tree");
    BST.insert(12, "tree");
    BST.insert(8, "tree");
    BST.insert(32, "tree");
    BST.insert(4, "tree");
    BST.insert(74, "tree");
    BST.insert(55, "tree");

    BST.inorder(BST.root);
}


