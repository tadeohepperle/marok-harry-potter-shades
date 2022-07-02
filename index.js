import { generateTextFromMarkovModels, textToMarkovModels } from "./functions"
import fs from "fs"



const testText = `if this was what this was before this was a little late if this was it`;
const textFiles = ["fiftyshades.txt", "HarryPotter.txt"]
//node -r esm index.js
async function main() {
    //tokenizeText("This is Harry. And sth")
    let textFilePaths = textFiles.map(e => `./data/${e}`)
    let texts = textFilePaths.map(e => fs.readFileSync(e, "utf-8"));
    let textasOne = texts.reduce((a, c) => a + " " + c, "");
    // fs.writeFileSync("text.txt", textasOne, "utf-8")
    let models = textToMarkovModels(textasOne, 2)
    // fs.writeFileSync("models.json", JSON.stringify(models[2]), "utf-8")
    let generated = generateTextFromMarkovModels(models)
    console.log(generated);
}

main();
