function generateLore(event) {
    event.preventDefault();

 new Typewriter("#lore", {
  strings: "Await the unveiling of timeless lore.",
  autoStart: true,
  delay:1,
  cursor: "",
});
}

let loreForm= document.querySelector("#lore-form");
loreForm.addEventListener("submit",generateLore);