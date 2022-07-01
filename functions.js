



export function sampleFromProbabilities(probabilities) {
    // probabilities =  {
    //     "is": 0.3,
    //     "gains": 0.2,
    //     "at": 0.01,
    // }

    let total = Object.values(probabilities).reduce((a, c) => a + c, 0);
    let r = Math.random() * total;
    let acc = 0;
    for (let k of Object.keys(probabilities)) {
        let probAtK = probabilities[k];
        if (r < probAtK + acc) {
            return k;
        }
        else {
            acc = acc + probAtK;
        }
    }
}

export function buildMarkovModelsUpToOrder(tokens, order = 2, sep = "|") {
    return Array(order + 1).fill(0).map((_, i) => buildMarkovModel(tokens, i, sep));
}

export function buildMarkovModel(tokens, order = 1, sep = "|") {
    if (order == 0) {
        let model = {}
        for (let t of tokens) {
            if (model[t]) {
                model[t]++;
            }
            else {
                model[t] = 1;
            }
        }
        return model;
    }
    let model = {}
    let state = Array(order).fill("");
    for (let i = 0; i < tokens.length - 1; i++) {
        let t = tokens[i];
        let nextT = tokens[i + 1];
        state.shift();
        state.push(t);
        if (i < order - 1) {
            continue;
        }



        let key = state.join(sep);
        if (!model[key]) {
            model[key] = {}
        }
        if (model[key][nextT]) {
            model[key][nextT]++;
        }
        else {
            model[key][nextT] = 1;
        }
    }
    return model;
}

export function tokenizeText(text) {
    //Split by White Space
    return text.replaceAll(".", " . ")
        .replaceAll("?", " ? ")
        .replaceAll('!', ' ! ')
        .replaceAll("(", "")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .replaceAll(")", "")
        .replaceAll('"', "")
        .replaceAll("'", "")
        .split(/\s+/)
        .filter(e => e);
}
