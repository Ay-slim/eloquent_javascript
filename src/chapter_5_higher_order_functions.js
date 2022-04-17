const SCRIPTS = require('../datasets/scripts');

function flatten (nestedArray) {
    return nestedArray.reduce((finalUnnestedArray, element) => finalUnnestedArray.concat(element))
}

function loop (argList) {
    const {start, end, step, value, testFunc, bodyFunc, updateFunc} = argList;
    for (let j = start; j<=end; j = j+step) {
        if(!testFunc(value)) break;
        bodyFunc(value);
        return updateFunc(value);
    }
}

function every (arrayToTest, func) {
    for(el of arrayToTest) {
        if(!func(el)) return false
    }
    return true
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
                return script;
            }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function dominantWritingDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
        }).filter(({name}) => name != "none");
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    let highestCountObj = scripts.reduce((script1, script2) => {
        return script2.count > script1.count ? script2 : script1;
    });
    const highestOccurringScriptName = highestCountObj.name;
    const correspondingScript = SCRIPTS.find(el=> el.name === highestOccurringScriptName);
    return correspondingScript.direction;
}

// const testTestFunction = p => p > 5;
// console.log(every([6,7,8,9], testTestFunction)) 

// const testNestedArray = [[1536, 1541], [1542, 1548], [1549, 1563], [1564, 1565]];
// console.log(flatten(testNestedArray))
console.log(dominantWritingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));