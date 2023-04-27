const dividers = [
  {
    number: 3,
    sound: "Pling",
  },
  {
    number: 5,
    sound: "Plang",
  },
  {
    number: 7,
    sound: "Plong",
  },
];

export function convert(num) {
  let result = [];

  dividers.map((div) => {
    num % div.number === 0 && result.push(div.sound);
  });

  if (result.length === 0) result.push(num);

  return result.join("");
}
