const addButton = document.querySelector("#btnAdd");
const workSpace = document.querySelector("#blocks");
const removeBtn = document.querySelector("#btnRemove");

addButton.addEventListener("click", createBlocks => {    

    const blockElem = document.createElement("div");
    blockElem.classList.add("block-elem");
    
    blockElem.innerHTML = "Block";

    const removeBtn = document.querySelector("#btnRemove");
    removeBtn.classList.add("btn-remove--visible"); 

    removeBtn.addEventListener("click", removeBlock => {
        workSpace.removeChild(blockElem);
        removeBtn.classList.remove("btn-remove--visible"); 

            
    });    
   

    workSpace.appendChild(blockElem);

});






