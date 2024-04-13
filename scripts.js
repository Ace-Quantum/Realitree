

const temp_btn = document.getElementById('controller_region');
temp_btn.addEventListener('click', () => {
    console.log("function listening");
    const nodes = document.getElementsByClassName('node');
    console.log(nodes)

    for (i in nodes) {
        nodes.item(i).classList.toggle('d-none');
    }
});