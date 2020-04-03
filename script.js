const inputNotes = document.getElementById("note");
const btnAdd = document.getElementById("add");
const blocNotes = document.getElementById("allNotes");

function addNote(e){
    const notes = document.createElement("p");
    notes.textContent = inputNotes.value;
    notes.classList.add("notes");
    blocNotes.appendChild(notes);
    e.preventDefault();
}

btnAdd.addEventListener("click",addNote)