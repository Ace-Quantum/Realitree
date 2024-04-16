// tree stuff

// building a class for our binary trees
// But this may not be necessary due to the tutorial
// Not actually having this part.
// But surely we do need a constructor, yeah?
class Node {
    constructor(value, element) {
        this.data = value;
        this.elem = element;
        this.ID = "";

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
            newNode.ID += "_L";
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }

        else{
            newNode.ID += "_R";
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
            console.log(node.ID);
            this.inorder(node.right);
        }
    }
}
var BST = new RealiTree();

BST.insert(34, "tree");
BST.insert(12, "tree");
BST.insert(8, "tree");
BST.insert(32, "tree");
BST.insert(4, "tree");
BST.insert(74, "tree");
BST.insert(55, "tree");

BST.inorder(BST.root);

const nodes = document.getElementsByClassName('node');
let focusedNode;

for (let x = 0; x < nodes.length; x++) {
    nodes.item(x).addEventListener('click', () => {
        console.log(`node ${x} clicked!`)
        if (focusedNode) {
            focusedNode.classList.remove('focused_node');
        }
        nodes[x].classList.add('focused_node');
        focusedNode = nodes[x];
    })
}

const addBtn = document.getElementById('add_node');
const value = document.getElementById('node_value');
const info = document.getElementById('feedback');

addBtn.addEventListener('click', () => {
    info.innerHTML = value.value;
});
