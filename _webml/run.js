const tf = require("@tensorflow/tfjs-node");
const toxicity = require("@tensorflow-models/toxicity");

const threshold = 0.9;

async function analyzeToxicity(sentences) {
  try {
    const model = await toxicity.load(threshold);

    for (const sentence of sentences) {
      const predictions = await model.classify(sentence);

      console.log(`Predictions for "${sentence}":`);
      predictions.forEach((result) => {
        console.log(`${result.label}: ${result.results[0].match}`);
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

const data = ["You are a terrible person."];
analyzeToxicity(data);

/*

Predictions for "You are a terrible person." :

identity_attack: false
insult: true
obscene: false
severe_toxicity: false
sexual_explicit: false
threat: false
toxicity: true 

*/
