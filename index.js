// Iteration 1: Names and Input
const hacker1 = 'Patrícia';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Yane';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let driverCapital = hacker1.toUpperCase();

let driverCapitalSpace = '';

for (let i = 0; i < driverCapital.length; i++) {
  driverCapitalSpace += `${driverCapital[i]} `;
}
console.log(driverCapitalSpace);

let navigatorReverse = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorReverse += `${hacker2[i]}`;
}

console.log(navigatorReverse);

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

alphabet = alphabet.toLocaleUpperCase();

let driverInitial = hacker1[0];
let navigatorInitial = hacker2[0];

if (alphabet.indexOf(driverInitial) < alphabet.indexOf(navigatorInitial)) {
  console.log(`The driver's name goes first.`);
} else if (
  alphabet.indexOf(driverInitial) > alphabet.indexOf(navigatorInitial)
) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus Time
// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus magna lectus, in porttitor lorem feugiat ut. Suspendisse potenti. Aenean faucibus condimentum velit. Praesent egestas libero massa, quis hendrerit nisl imperdiet ornare. Suspendisse volutpat nisi nibh, quis vestibulum enim semper quis. Duis volutpat dolor leo, sed mollis sem pharetra quis. Mauris venenatis cursus urna, sit amet lobortis tortor lobortis ut. Praesent scelerisque mattis nunc, sit amet facilisis elit. Suspendisse quis bibendum nulla. Morbi eu sem in dui mattis tempor. Nullam iaculis luctus ex, sed finibus nunc fermentum eget. Nulla facilisi.

Cras mattis elit at augue laoreet gravida. Duis velit metus, facilisis mattis blandit in, commodo a lorem. Nam gravida quam a turpis viverra, at vulputate dolor lobortis. Integer gravida elit ac orci tempus sagittis. Quisque sit amet nisi sed mi malesuada sagittis. Quisque aliquet purus quis leo pellentesque rhoncus nec mollis odio. Nulla elementum fringilla nulla, non varius massa imperdiet ac. Nullam vitae metus tempus, congue nisl at, efficitur diam. Mauris ultrices elit ac quam aliquam, a laoreet lorem interdum.

Praesent molestie mi sed risus placerat, sit amet commodo libero mattis. Cras accumsan orci arcu, ut eleifend magna vestibulum id. Quisque non blandit leo, sed placerat sem. Morbi at sem fringilla, condimentum eros quis, porta ipsum. Nunc pulvinar ultricies nisl, et accumsan nunc pretium sed. Nam massa ipsum, scelerisque vel nisl eu, aliquam ornare ante. Nunc mattis ut tortor et aliquet. Sed bibendum quam ipsum, sit amet vulputate orci tincidunt a. Vivamus tincidunt nibh justo, id iaculis tortor fermentum eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tempus fringilla sapien vitae fermentum. Cras ut arcu nulla. Etiam malesuada bibendum ex varius porttitor. Suspendisse nibh massa, vestibulum et mauris vitae, viverra luctus nisi. Vivamus egestas lectus non ornare tempus. Vivamus mattis nisl in ultricies pulvinar.`;

let word = (longText.match(/et/g) || []).length;
console.log(word);

function countWords(str) {
  const arr = str.split(' ');

  return arr.filter(word => word !== '').length;
}

console.log(
  countWords(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec dignissim orci. Vivamus pulvinar finibus nisl a varius. Ut tristique ex erat, sit amet sodales dui tincidunt sed. Quisque placerat elit eget pretium hendrerit.'
  )
);

// Bonus 2

function phraseToCheck(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}
const string = 'eye';
const value = phraseToCheck(string);

console.log(value);
