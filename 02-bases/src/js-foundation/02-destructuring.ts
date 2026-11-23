// console.log(process.env);

const { OS, PATHEXT, PROMPT } = process.env;
// console.table({OS, PATHEXT, PROMPT});

export const caracteres = ["Flash", "Superman", "Green Lantern", "Batman"];

const [ f,s,,batman] = caracteres;

// console.log(batman);