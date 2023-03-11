
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes=[
{
    quote:"Do what you can, with what you have, where you are.",person:'― Theodore Roosevelt '
},{
    quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",person:'― Winston S. Churchill '
},{
    quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",person:'― J.K. Rowling '
},{
    quote:"Not all of us can do great things. But we can do small things with great love.",person:'― Mother Teresa '
},{
    quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",person:'― Martin Luther King Jr'
},{
    quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",person:'― Ralph Waldo Emerson '
},{
    quote:"I am so clever that sometimes I don't understand a single word of what I am saying",person:'― Oscar Wilde'
},{
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",person:'― Mahatma Gandhi'
},{
    quote:"A friend is someone who knows all about you and still loves you.",person:'― Elbert Hubbard '
},{
    quote:"Good friends, good books, and a sleepy conscience: this is the ideal life.",person:'― Mark Twain '
},{
    quote:"The fool doth think he is wise, but the wise man knows himself to be a fool.",person:'― William Shakespeare'
},{
    quote:"Life is what happens to us while we are making other plans.",person:'― Allen Saunders '
},{
    quote:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",person:'― Bill Keane '
},{
    quote:"“I have not failed. I've just found 10,000 ways that won't work.",person:'― Thomas A. Edison '
},{
    quote:"A woman is like a tea bag; you never know how strong it is until it's in hot water.",person:'― Eleanor Roosevelt '
},{
    quote:"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",person:'― Dr. Seuss'
},{
    quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",person:'― Lao Tzu '
},{
    quote:"For every minute you are angry you lose sixty seconds of happiness.",person:'― Ralph Waldo Emerson'
},{
    quote:"It is never too late to be what you might have been.",person:"― George Eliot "
},{
    quote:"Life isn't about finding yourself. Life is about creating yourself.",person:'― George Bernard Shaw'
}
];

btn.addEventListener('click',function(){
    let random = Math.round(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
});