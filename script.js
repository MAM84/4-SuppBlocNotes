const inputNotes = document.getElementById("note");
const btnAdd = document.getElementById("add");
const blocNotes = document.getElementById("allNotes");

function addNote(e){
    const notes = document.createElement("p");
    notes.textContent = inputNotes.value;
    notes.classList.add("notes");

    const btnSupp = document.createElement("button");
    btnSupp.textContent = "Supprimer";
    notes.appendChild(btnSupp);
    
    blocNotes.appendChild(notes);
    e.preventDefault();

    btnSupp.addEventListener("click",function(){
        blocNotes.removeChild(notes)
    })
}

btnAdd.addEventListener("click",addNote)

