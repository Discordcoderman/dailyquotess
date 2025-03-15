const quotesArray = [
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        text: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        text: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        text: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        text: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "If you really look closely, most overnight successes took a long time.",
        author: "Steve Jobs"
    },
    {
        text: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it.",
        author: "Barack Obama"
    },
    {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson"
    },
    {
        text: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein"
    },
    {
        text: "Don't be distracted by criticism. Remember, the only taste of success some people get is to take a bite out of you.",
        author: "Zig Ziglar"
    },
    {
        text: "I never dreamed about success, I worked for it.",
        author: "Estée Lauder"
    },
    {
        text: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened.",
        author: "Helen Keller"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Nothing is impossible, the word itself says, 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "The question isn't who is going to let me; it's who is going to stop me.",
        author: "Ayn Rand"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn"
    },
    {
        text: "Learn from yesterday, live for today, hope for tomorrow.",
        author: "Albert Einstein"
    },
    {
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius"
    },
    {
        text: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "Life is what we make it, always has been, always will be.",
        author: "Grandma Moses"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        text: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "It's not what happens to you, but how you react to it that matters.",
        author: "Epictetus"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling"
    },
    {
        text: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },
    {
        text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: "Oscar Wilde"
    },
    {
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        author: "Mark Twain"
    },
    {
        text: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "William Shakespeare"
    },
    {
        text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author: "Bill Keane"
    },
    {
        text: "I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        text: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        text: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        text: "We accept the love we think we deserve.",
        author: "Stephen Chbosky"
    },
    {
        text: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
    {
        text: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author: "Martin Luther King Jr."
    },
    {
        text: "We are all in the gutter, but some of us are looking at the stars.",
        author: "Oscar Wilde"
    },
    {
        text: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        author: "Neil Gaiman"
    },
    {
        text: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
        author: "Jane Austen"
    },
    {
        text: "There is no greater agony than bearing an untold story inside you.",
        author: "Maya Angelou"
    },
    {
        text: "You can never get a cup of tea large enough or a book long enough to suit me.",
        author: "C.S. Lewis"
    },
    {
        text: "You have to be odd to be number one.",
        author: "Dr. Seuss"
    },
    {
        text: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    },
    {
        text: "A day without sunshine is like, you know, night.",
        author: "Steve Martin"
    },
    {
        text: "This above all: to thine own self be true.",
        author: "William Shakespeare"
    },
    {
        text: "If you cannot do great things, do small things in a great way.",
        author: "Napoleon Hill"
    },
    {
        text: "If opportunity doesn't knock, build a door.",
        author: "Milton Berle"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        text: "Do what you feel in your heart to be right – for you'll be criticized anyway.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Either write something worth reading or do something worth writing.",
        author: "Benjamin Franklin"
    },
    {
        text: "Happiness is not a goal; it is a by-product.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author: "Henry Ford"
    },
    {
        text: "Rome wasn't built in a day.",
        author: "ethan"
    }
];