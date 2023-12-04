var quote_array = [
    ['Life is a big canvas, throw all the paint on it you can.', 'Danny Kaye'],
    ['The past is an illusion. You must learn to live in the present and accept yourself for what you are now. What you lack in flexibility and agility you must make up with knowledge and constant practice.', 'Bruce Lee'],
    ['It doesn\'t interest me how old you are. I want to know if you will risk looking like a fool for love, for your dreams, for the adventure of being alive.', 'Oriah Dreamer'],
    ['The great pleasure in life is doing what people say you cannot do.', 'Walter Bagehot'],
    ['It doesn\'t interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart\'s longing.', 'Oriah Dreamer'],
    ['If we are ever to enjoy life, now is the time, not tomorrow or next year -- Today should always be our most wonderful day.', 'Thomas Dreier'],
    ['The trouble with life is, that you\'re halfway through it before you realize that it\'s a \'do it yourself\' thing.', 'anon'],
    ['To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life.', 'Walter Mitty'],
    ['To have striven, to have made an effort, to have been true to certain ideals -- this alone is worth the struggle. We are here to add what we can to, not to get what we can from, life.', 'Sir William Osler'],
    ['Live with intention. Walk to the edge. Play with abandon. Listen well. Choose without regret. Do what you love. Appreciate your friends. Act as if this is all there is.', 'J.N.Kemsley'],
    ['Neo, sooner or later you\'re going to realize just as I did that there\'s a difference between knowing the path and walking the path.', 'Morpheus'],
    ['And those who say, I\'ll try anything once, often try nothing twice, three times, arriving late at the gate of dreams worth dying for.', 'Carl Sandburg'],
    ['Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming \'Wow! What a ride!\'', 'Hunter S. Thompson'],
    ['Look again at that dot. That\'s here. That\'s home. That\'s us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives.', 'Carl Sagan'],
    ['Make no little plans. They have no magic to stir men\'s blood.', 'D. H. Burnham'],
    ['About the only difference between stumbling blocks and stepping stones is the way you use them.', 'Bernard Meltzer'],
    ['It takes courage to push yourself to places that you have never been before... to test your limits... to break through barriers. And the day came when the risk it took to remain tight inside the bud was more painful than the risk it took to blossom.', 'Anais Nin'],
    ['Life is to be lived. If you have to support yourself, you had bloody well better find some way that is going to be interesting.', 'Katharine Hepburn'],
    ['The wonderful things in life are the things you do, not the things you have.', 'Reinhold Messner'],
    ['Ultimately time is all you have and the idea isn\'t to save it, but to savor it', 'Ellen Goodman'],
];

let quote = document.getElementById("quote");
let quote_author = document.getElementById("quote-author");
if (quote && quote_author)
{
    let r = Math.floor(Math.random() * quote_array.length);
    quote.textContent = quote_array[r][0];
    quote_author.textContent = '~ ' + quote_array[r][1];
}
