document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.getElementById("note-input");
  const saveButton = document.getElementById("save-note");
  const notesList = document.getElementById("notes-list");

  saveButton.addEventListener("click", () => {
    const noteText = noteInput.value;
    if (noteText.trim()) {
      const noteDiv = document.createElement("div");
      noteDiv.classList.add("note");
      noteDiv.innerHTML = `
                <p>${noteText}</p>
                <button class="delete-note">삭제</button>
            `;
      notesList.appendChild(noteDiv);
      noteInput.value = "";

      noteDiv.querySelector(".delete-note").addEventListener("click", () => {
        noteDiv.remove();
      });
    }
  });
});
