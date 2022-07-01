import { tokenizeText, buildMarkovModel, sampleFromProbabilities } from "./functions"



const testText = `

Sea trials and modifications lasted more than a year, and once she entered active service in October 1899, the ship became the flagship of Prince Heinrich in I Squadron of the German Heimatflotte (Home Fleet). I Squadron was primarily occupied with training exercises throughout each year, and also made numerous trips to other European countries, particularly Great Britain and Sweden–Norway. In 1901, the ship was severely damaged after striking submerged rocks in the Baltic Sea; the incident contributed to design changes in later German battleships to make them more resistant to underwater damage.

Kaiser Friedrich III was extensively modernized in 1908; her secondary guns were reorganized and her superstructure was cut down to reduce top-heaviness. After returning to service in 1910, Kaiser Friedrich III was placed in the Reserve Formation; she spent the next two years laid up, being activated only for the annual fleet maneuvers. The years 1913 and 1914 passed without any active service until the outbreak of World War I in July 1914. Though obsolete, Kaiser Friedrich III and her sister ships served in a limited capacity as coastal defense ships in V Battle Squadron in the early months of the war, tasked with defending Germany's North Sea coastline. The ships conducted two operations in the Baltic but did not encounter any hostile warships. By February 1915, Kaiser Friedrich was withdrawn from service and eventually decommissioned in November, thereafter being employed as a prison ship and later as a barracks ship. She was scrapped in 1920.`;
//node -r esm index.js
async function main() {
    console.log(sampleFromProbabilities({ with: 1, at: 12, back: 2, '.': 1 }))
}

main();
