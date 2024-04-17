

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
