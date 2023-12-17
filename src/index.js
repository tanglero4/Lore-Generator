function displayLore(response){
 new Typewriter("#lore", {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor: "",
});

}
function generateLore(event) {
    event.preventDefault();

let userInput= document.querySelector("#user-input");
let apiKey= "9dbt367c43o7981d7572dbd0627af20e";
let context= "You are an expert writer like J.R Tolkien and love to write short lores. Your mission is to write a 6 line lore and separate each line with a <br/> in basic HTML format. Sign the lore with `SheCodes AI` under the last line. Please make sure to follow the user instructions and display only the final results. Please do not add a title.";
let prompt= `user instructions: Generate a lore about ${userInput.value}`;
let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiURL).then(displayLore);
console.log(`Lore generating about ${userInput.value}`)
}



let loreForm= document.querySelector("#lore-form");
loreForm.addEventListener("submit",generateLore);