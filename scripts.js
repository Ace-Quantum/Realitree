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
        {
            this.root = newNode;
            const rootRender = document.getElementById("root");
            rootRender.innerHTML = newNode.data;
            console.log(newNode.data);

        }
        else
        {
            console.log(`new node to be inserted: ${newNode.data}`);
            // I have no idea what this.root refers to
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode)
    {
        if(newNode.data < node.data){
            newNode.ID += "_L";
            if(node.left === null)
            {
  
                node.left = newNode;
                console.log(`Final position of node ${newNode.data}: ${newNode.ID}`)
                const nodeRender = document.getElementById(newNode.ID);
                nodeRender.classList.remove("node_inactive");
                nodeRender.classList.add("node_active");
                nodeRender.innerHTML = newNode.data;
            }
            else
            {
                this.insertNode(node.left, newNode);
            }
        }

        else{
            newNode.ID += "_R";
            if (node.right === null)
            {

                node.right = newNode;
                console.log(`Final position of node ${newNode.data}: ${newNode.ID}`)
                const nodeRender = document.getElementById(newNode.ID);
                nodeRender.classList.remove("node_inactive");
                nodeRender.classList.add("node_active");
                nodeRender.innerHTML = newNode.data;
            }
            else
            {
                this.insertNode(node.right, newNode);
            }
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
        if (node === null){
            return (1);
        }

        if (node.left === null && node.right === null){
            return (1);
        }

        if (node.left === null && node.right !== null){
            return (0);
        }

        if (node.left !== null && node.right === null){
            return (0);
        }

        return this.check_full(node.left) && this.check_full(node.right);
    }

    check_size(node){
        let size_left = 0;
        let size_right = 0;

        if (node === null){
            return(0);
        }

        if (node.left !== null){
            size_left = this.check_size(node.left);
        }

        if (node.right !== null){
            size_right = this.check_size(node.right)
        }

        return (size_left + size_right +1);
    }
    
    check_perfect(node){
        let size_left = 0;
        let size_right = 0;

        if (node === null){
            return (0);
        }

        if (node.left !== null){
            size_left = this.check_size(node.left);
        }

        if (node.right !== null){
            size_right = this.check_size(node.right);
        }

        if (size_left !== size_right){
            return (0);
        }

        return (1);
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
    BST.insert(value.value);
    if (BST.check_balance(BST.root) === 0 && BST.check_full(BST.root) === 1 && BST.check_perfect(BST.root) === 1) {
        // change body style
        body = document.querySelector("body");
        logo = document.getElementById("logo");
        body.classList.remove('body_disordered');
        body.classList.add('body_balanced');
        logo.src = "images/favicon.png";
        // change controller style
        let controller = document.getElementById('controller_region');
        controller.classList.remove('controller_disordered');
        controller.classList.add('controller_balanced');
        // change tree_display style
        let display = document.getElementById('feedback_region');
        display.classList.remove('feedback_disordered');
        display.classList.add('feedback_balanced');
        let nodeList = document.getElementsByClassName('node');
        for (i = 0; i < nodes.length; i++) {
            nodes[i].classList.remove('node_inactive');
            nodes[i].classList.add('node_empty');
        }
    }
});
