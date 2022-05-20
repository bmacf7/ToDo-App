document.addEventListener("click", (e) => {
  // Get the text related to the event.
  let textBody =
    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML;
  if (e.target.classList.contains("edit-me")) {
    let editedItem = prompt("Wanna change something?", textBody);
    if (editedItem) {
      axios
        .post("/update-item", {
          text: editedItem,
          id: e.target.getAttribute("data-id"),
        })
        .then(() => {
          textBody = editedItem;
        })
        .catch((e) => {
          // Handle any error cocurred in the update.
        });
    }
  }
});
