//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"If you look what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
}, {
    quote: `"Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth."`,
    person: `Mark Twain`
}, {
    quote: `"When we are no longer able to change a situation - we are challenged to change ourselves."`,
    person: `Viktor E. Frankl`
}, {
    quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
    person: `Helen Keller`
}, {
    quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    person: `Bernard M. Baruch`
}, {
    quote: `"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."`,
    person: `Bil Keane`
}, {
    quote: `"Challenges are what make life interesting and overcoming them is what makes life meaningful."`,
    person: `Joshua J. Marine`
}, {
    quote: `"Do not go where the path may lead; go instead where there is no path and leave a trail."`,
    person: `Ralph Waldo Emerson`
}, {
    quote: `"Wise men talk because they have something to say; fools, because they have to say something."`,
    person: `Plato`
}, {
    quote: `"There is only one corner of the universe you can be certain of improving, and that's your own self."`,
    person: `Aldous Huxley`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})