import { tokenizeText, buildMarkovModel, buildMarkovModelsUpToOrder, sampleFromProbabilities } from "./functions"
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
    let tokens = tokenizeText(textasOne);
    let models = buildMarkovModelsUpToOrder(tokens, 2);
    fs.writeFileSync("models.json", JSON.stringify(models[2]), "utf-8")
    let model2 = models[2];
    // console.log(buildMarkovModelsUpToOrder(testText.split(" "), 2))
    // //tokenizeText("This is Harry. And sth")
    // sampleFromProbabilities({ "hello": 0.3, "this": 0.2, "is": 0.01 })
    let words = ["I", "scowl"];
    for (let i = 0; i < 1000; i++) {
        let last = words[words.length - 1]
        let vorLast = words[words.length - 2]
        let probabilites = model2[`${vorLast}|${last}`]
        let nextWord = sampleFromProbabilities(probabilites);
        words.push(nextWord);
    }
    console.log(words.join(" ").replaceAll(" . ", ". "));
}

main();
