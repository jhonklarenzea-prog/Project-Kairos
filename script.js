/* =====================================================================
   KAIROS OBSERVATORY - COMPLETE JAVASCRIPT GUIDE

   This file controls all interactive behavior on the website.
   Each section is clearly labeled with descriptions of what it does.

   HOW TO CUSTOMIZE:
   - All content is in the CONFIG object at the top
   - Change text, add songs, modify petal messages
   - Adjust icon sizes in CONFIG.iconSizes
   - No need to touch code below CONFIG unless adding features
   ===================================================================== */


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ CONFIGURATION OBJECT
   ★
   ★ This is where you customize ALL content and settings.
   ★ Everything below this section is the engine that makes it work.
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var CONFIG = {
  /* ═══════════════════════════════════════════════════════════════
     PERSONAL NAMES
     ═══════════════════════════════════════════════════════════════ */
  herName: "Angelic",                    /* Recipient's name */
  fromName: "Renze",      /* Your name */

  /* ═══════════════════════════════════════════════════════════════
     IMAGES
     Leave empty ("") to use default graphics
     ═══════════════════════════════════════════════════════════════ */
  image: "",              /* Main sunflower photo */
  glimpseImage: "",  /* Picture that grows to fill the screen when the envelope opens */
  petalImage: "",         /* Custom petal shape (optional) */

  /* ═══════════════════════════════════════════════════════════════
     ICONS
     Use emojis (🌻) or image file paths ("images/icon.png")
     ═══════════════════════════════════════════════════════════════ */
  icons: {
    seal: "Seal.png",           /* Wax seal on gift envelope */
    glimpse: "",        /* Icon rising from opened envelope */
    menuObs: "Telescope.png",        /* Observatory menu card */
    menuLetters: "Letter.png",    /* Letters menu card */
    menuArchive: "PICTURE.png",    /* Archive menu card (PNG/SVG path or emoji) */
    menuQuestion: "Question.png",   /* Question menu card */
    letterStamp: "Stamp.png"     /* Stamp on letter envelopes */
  },

  /* ═══════════════════════════════════════════════════════════════
     ICON SIZES (in pixels)
     Change these numbers to make icons bigger or smaller
     ═══════════════════════════════════════════════════════════════ */
  iconSizes: {
    seal: 41,             /* Wax seal size */
    glimpse: 64,          /* Rising icon size */
    menuCards: 48,        /* Menu card icon size */
    letterStamp: 22,      /* Letter stamp size */
    discoveries: 40       /* Telescope/notebook icon size */
  },

  /* ═══════════════════════════════════════════════════════════════
     MUSIC SETTINGS
     Add songs to tracks array: { title: "Song Name", src: "music/song.mp3" }
     Leave tracks empty ([]) to disable music player
     ═══════════════════════════════════════════════════════════════ */
  music: {
    tracks: [{ title: "Kairos", src: "musc.mp3" }],  /* ← PUT YOUR SONG FILE(S) HERE */
    loop: true,           /* Restart playlist when it ends? */
    volume: 0.6,          /* Default volume (0.0 to 1.0) */
    autoplayOnEnvelopeOpen: true  /* Start the music when the seal is clicked */
  },

  /* ═══════════════ ANIMATION TIMING (milliseconds) ═══════════════ */
  animations: {
    envelopeOpenMs: 1400,     /* Flap opens + glimpse rises before the zoom starts */
    imageZoomMs: 1800,        /* Glimpse image growing to fill the screen */
    zoomFadeMs: 900,          /* Fade from the zoom image into the menu */
    letterTypingSpeed: 35     /* ms per character in petal/star/whisper letters */
  },

  /* ═══════════════════════════════════════════════════════════════
     DUST PARTICLES
     Change the number below to increase or decrease floating particles
     ═══════════════════════════════════════════════════════════════ */
  dustParticleCount: 300,     /* Number of golden dust particles (default: 150) */

  /* Subtitle on the Question card while locked / unlocked */
  lockedHint: "open the other three first",
  unlockedHint: "the one I finally asked",

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 1: GIFT ENVELOPE
     The opening screen text
     ═══════════════════════════════════════════════════════════════ */
  giftTitle: "Hi! Accept this invitation Ma'am!",

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 2: MAIN MENU
     Title and four navigation cards
     ═══════════════════════════════════════════════════════════════ */
  menuTitle: "Welcome to this Simple Observatory!",

  menu: [
    {
      go: "obs",                          /* Internal screen ID - don't change */
      icon: "menuObs",                    /* Which icon to use */
      name: "The Observatory",            /* Card title */
      hint: "a Sunflower, Uniquely made for You, Ayik"  /* Subtitle */
    },
    {
      go: "letters",
      icon: "menuLetters",
      name: "Unsent Letters",
      hint: "sealed & saved, waiting for you"
    },
    {
      go: "archive",
      icon: "menuArchive",
      name: "Our Archive",
      hint: "Highlights of our time together"
    },
    {
      go: "ask",
      icon: "menuQuestion",
      name: "The Question",
      hint: "......"
    }
  ],

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 3: OBSERVATORY - SUNFLOWER PETALS
     Eight glowing petals around the flower
     Each petal reveals a personal message when clicked
     ═══════════════════════════════════════════════════════════════ */
  petals: [
    "It's the little things about you that you probably don't even notice, but somehow, they're the things I remember most.",
    "SOMETHING I GENUINELY ADMIRE ABOUT YOU:\n\n I love how you always do your best, no matter what situation you're in. I see the hardships you go through, even the ones you don't always talk about, and I admire you more than you know. I'll never get tired of telling you that you've inspired me to become a better person.",
    "SOMETHING THAT MAKES ME SMILE ABOUT YOU:\n\n You have this way of making an ordinary moment feel special. Even on the most stressful days, your presence alone can make things feel lighter. Just having you around is already enough to make my day a little better.",
    "A REAL MEMORY ONLY WE SHARE:\n\n If there's one memory that's always hold special place in my heart, it's the day that I met you during intrams where I got a chance to get to know you, wandering around the museum together, and talking about ourselves felt so special. I don't know how to explain it properly ma'am, but there's something about that day that felt almost heavenly. ",
    "..... :\n\n You never fail to make me smile, Ayik, my cutecutehoneybunch sugar plum.❤️ And, of course, my ngohiong seller HAHAHA. It's funny how the simplest and most random things can become something so special when they're connected to you. Maybe nobody else would understand why these little things mean so much to me, but that's what makes them ours. And honestly, I wouldn't trade these little pieces of us for anything.",
    "A DETAIL THAT MAKES YOU UNIQUELY YOU:\n\n I hope you never feel like you have to change the little things that make you who you are. I love discovering more about you ma'am, even the tiniest details and the random things connected to you. I hope I get to keep discovering those things, one little detail at a time. ",
    "A MOMENT MY FEELINGS GREW STRONGER:\n\n Honestly, even I'm still a little puzzled about how everything started to feel so real. I can't pinpoint the exact moment when my feelings began to grow into something deeper, but somewhere along the way, you became someone I genuinely wanted to be there for. I want to accompany you through your ups and downs, celebrate your happiest moments, and stay beside you when things get difficult.",
    "SOMETHING I HAVE WANTED TO TELL YOU:\n\n Love, If there's one thing I hope you take away from all these little petals, it's that I'm genuinely grateful I got to know you. I'm grateful for the memories we've made, the laughter we've shared, and all the little moments that have slowly become meaningful to me. And if life somehow gave me the chance to go back and meet you all over again, knowing everything I know now, I'd still choose to get to know you."
  ],

  /* Observatory hint text (shown at start) */
  observatoryHint: "Turn the flower. Touch a glowing petal.",

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 3: HIDDEN WHISPERS
     Messages revealed by rotating the flower to specific angles
     from/to are in degrees (0-360)
     ═══════════════════════════════════════════════════════════════ */
  hidden: [
    { from: 40, to: 80, text: "Somehow, you became one of my favorite parts of a life you weren't even in before." },
    { from: 130, to: 170, text: "I hope life becomes as gentle to you as you are to the people around you po" },
    { from: 220, to: 260, text: "I will always understand and love you, Ayik the chorizo addict. mwa mwa\n\n(Joke ra ma'am mwa)" },
    { from: 300, to: 335, text: "I hope we look back at these little beginnings and smile at how far we've come." }
  ],

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 3: CENTER LETTER
     Opens when all 8 petals have been clicked
     ═══════════════════════════════════════════════════════════════ */
  centerLetter: {
    title: "From the center of the flower",
    body: "Angelic,\n\n I hope this sunflower reminds you how much I adore you for simply being you. Getting to know you, sharing little moments, and remembering the day we met at the museum are things I'll always treasure. Having you in my life is a blessing, and I'd love to keep making memories with you and discovering all the little things that make you special. Of all the people I could have met, I'm  glad I met you In this lifetime ma'am.\n\n- Renze"
  },

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 3: CLICKABLE STARS
     Small glowing stars in the night sky
     x and y are percentages (0-100)
     ═══════════════════════════════════════════════════════════════ */
  stars: [
    { x: 14, y: 22, title: "The Way You See the World, ", text: "I love how selfless you are ma'am, even in the smallest things. Seeing how much you care for others changed the way I see things and inspired me to become a better person too." },
    { x: 84, y: 30, title: "What's make you Special:,", text: "Everything about you is Special.\n\n\n (Direct to the point masyado boss HAHHA)" },
    { x: 20, y: 62, title: "A Wish for You,", text: "I wish you good health always, and I hope that all the sacrifices you're making today will pay off someday. I'm genuinely looking forward to seeing you succeed po, and I'll always be rooting for you success!" },
    { x: 88, y: 66, title: "If I Could Tell You One Thing,", text: " Maybe the thing that I would say is keep striving for success and don't get tired chasing your dreams, I know sometimes things become so much for you, I can even notice how stress you are with it. but I know these challenges will build you and I hope that time when you achieve everything. I am there, clapping for you" }
  ],

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 3: DISCOVERIES
     Larger interactive objects (telescope, notebook, etc.)
     ═══════════════════════════════════════════════════════════════ */
  discoveries: [
    { icon: "tel.png", size: 40, x: 8, y: 86, title: "Through the telescope", text: "I wish you could see yourself the way I see you, Love. I admire how you always do your best, how selfless you are, and how you still choose to be kind even when things get hard. I notice your efforts, even the times you probably feel like you're not doing enough. You may not realize it, but you've inspired me to become a better person, too. I just hope that when things get overwhelming and you start doubting yourself, you'll remember that I'm always rooting for you. I believe in you po, and I hope someday you get to see yourself the way I see you. " },
    { icon: "qui.png", size: 40, x: 92, y: 86, title: "For you too keep", text: "In case today gets too heavy, here's a little reminder that you don't have to have everything figured out right away. Take a your time and rest when needed. I'm proud of you always! I hope you never forget to enjoy the little moments along the way." }
  ],

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 4: UNSENT LETTERS
     Sealed envelope letters on a shelf
     ═══════════════════════════════════════════════════════════════ */
  lettersTitle: "The Unsent Letters Archive",

  letters: [
    { label: "October 5,  2026", title: "Letter Uno",  
    body: "Dear Angelic\n\n\n\nAnother Celebration\n\nA day when teachers celebrated their day, yet I was celebrating mine. I honestly used to find Teachers' Day dull and not such a great event, but what happened today changed my perspective. Seeing you walking along the sidewalk while holding a bunch of homemade flowers made me realize how thoughtful you are toward everyone around you. The fact that you spent sleepless nights making those flowers proves how much you care about the people surrounding you, and that made this event memorable to me, too!\n\nYou showed me that this event isn't only about giving gifts to teachers but also about making them feel that they matter. The effort you put into it proves just that, and that's what makes me admire you the most. Having you in my life is honestly a blessing, Angelic, and I'm so lucky that the universe allowed me to discover you. You've taught me a lot of things I never really cared about before. You've shown me the good things I never thought existed. You inspire me to do better, and that inspires me to keep working hard and discovering the good things in life.\n\nI actually don't know why I wrote this letter HAHAHAHA, but I hope that someday, these unsaid words will reach your eyes and soul. I adore you more than anything, Angelic, and I'm glad you came into my life.\n\n- renze"},
    { label: "October 10, 2026", title: "Segunda", 
    body: "'Segunda'\n\nA title worthy for this letter. Who would've thought that our bond would grow stronger? From strangers who randomly met during the intramurals to two people who now go on dates together. Another milestone has been achieved, another great time with you, and as always, you never fail to make everything special. Today was the day we had our second date, the karaoke date! Honestly, this was one of the most wholesome experiences I've had with you. A ton of laughs, teases, and lastly, quality time together. It's funny how we can enjoy such simple things and still make them memorable. We didn't really need anything grand to make the day special because, for me, being with you was already enough.\n\nSometimes, I find it hard to explain why I enjoy spending time with you this much, HAHAHAHA. Maybe it's because I get to be myself around you, or maybe it's because you have this way of making ordinary moments feel different. I love how we're slowly getting comfortable with each other, and how we're creating memories that I never expected we'd have when we first met. Looking back, it's honestly crazy how far we've come from being strangers to having these little moments together. And the best part is that there's still so much about you that I want to discover. More stories to hear, more laughs to share, and more experiences that I hope we'll get to have together.\n\nI don't know what the future holds for us po, and honestly, I don't think I need to figure everything out right now. I'm just happy that I get to know you more, spend time with you, and create these memories that I'll probably look back on someday with a smile. I hope we continue to have moments like this, even if it's just doing simple things together. Because at the end of the day, it's not really about where we go or what we do, but who I'm spending those moments with.\n\n- renze" },
    { label: "Oct 24, 2026", title: "The Art of the Ordinary", body:"Art of Ordinary\n\nAnother day, another well-spent day with you, my love, and again, an ordinary day becomes a much more special experience because of your presence. Today marks the day you allowed me to accompany you to the carbon, which welcomed me with new experiences and another memory with you. Who would've thought that a simple hangout at the carbon could make my day feel more than complete? HAHAHAHA. We literally just went to the Carbon at night while it was raining, yet somehow, that simple moment became something worth writing about. Maybe it's because I was with you, or maybe it's because I'm slowly realizing that I don't really need anything grand to be happy. Sometimes, all it takes is a little walk, some random conversations, and your presence beside me to make an ordinary day feel different.\n\nOne thing that made this day more special to me was the fact that you allowed me to know where you've been staying. I know it might seem like a simple thing, but for me, it's another little part of your life that you've allowed me to see, and I genuinely appreciate that. It's like I'm slowly getting to know more about your world, the places you go, and the little things that make up your everyday life. And honestly, I find that really special. Walking with you through the wet streets, taking pictures together, and just enjoying each other's company made everything feel so comfortable and warm despite the cold weather. I don't know how to explain it properly, but there's something about those moments that makes me want to stay a little longer. Even the rain didn't really matter that much because I was too busy enjoying the moment with you. It's funny how we weren't really doing anything extraordinary, yet those are the kinds of memories that stay with me.\n\nI guess that's what I want to remember about this day, My Love. That happiness doesn't always have to come from big surprises, expensive dates, or perfectly planned moments. Sometimes, it's found in walking beside you while the streets are wet, taking random pictures, laughing about little things, and simply being there together.\n\n- renze"},

    { label: "Oct 29, 2026", title: "If These Words Could Stay", body: "\nLooking back at all these little moments, it's honestly crazy how someone I once knew as a stranger has become someone this special to me. From the day I saw your thoughtfulness through those homemade flowers, to our karaoke date, and even that rainy night at the Carbon, you've given me memories that I never thought I'd be writing about. We might not do anything grand, yet somehow, you make every moment worth keeping. And I guess that's what makes you different. You make me appreciate things I used to overlook, and you make me realize that happiness doesn't always have to be something big. Sometimes, it's just walking beside you, laughing at random things, or simply being there with you.\n\nI don't know where life will take us, My Love, and I don't want to pretend that I know everything about what comes next. But I'm glad that, out of all the people I could've met, I got to meet you. If someday you look back at these letters, I hope you'll remember how happy I was to share these little moments with you, and how much they meant to me. These words may only hold a few days of our lives, but each one holds a piece of what I feel for you. And if there's one thing I want you to take with you after reading these letters, it's this: thank you for being part of my life, My Love. And if I could go back and live these moments again, I'd still choose to spend them with you.\n\n- renze"},
  ],

  /* ═══════════════════════════════════════ ════════════════════════
     OUR ARCHIVE - photos of you two. Add/remove entries freely.
     src: image path ("" shows a labeled placeholder) · caption/date/note optional
     ═══════════════════════════════════════════════════════════════ */
  archiveTitle: "Our Archive",
  poemLinkText: "read the poem from the old journal",
  archive: [
    { src: "1st.jpg", caption: "First Photo Together", date: "Sep 18, 2026", note: "" },
    { src: "Date1.jpg", caption: "Our First Date", date: "Sep 18, 2026", note: "" },
    { src: "date2.jpg", caption: "Our Second Date ", date: "Oct 10, 2026", note: "" },
    { src: "Lib.jpg", caption: "Library hang out", date: "Oct 22, 2026", note: "" },
    { src: "pat.jpg", caption: "Patria De Cebu picture", date: "Oct 16, 2026", note: "" },
    { src: "Carbon.jpg", caption: "Our Carbon Date", date: "Oct 24, 2026", note: "" }
  ],

  /* ═══════════════════════════════════════════════════════════════
     POEM (kept; opened from a button inside the archive)
     Lines of a poem on a journal page
     Use empty string "" for blank lines
     ═══════════════════════════════════════════════════════════════ */
  poemTitle: "Kairos - The right moment",

  poem: [
    "I never thought that day would mean this much,",
    "Meeting you and felt something I can't explain as such.",
    "Meeting you was something I never planned,",                             
    "But I'm really glad life made it happen.",
    "And if life gave me that moment once again,",
    "",
    "I will always to know you all over again."
  ],

  /* ═══════════════════════════════════════════════════════════════
     SCREEN 6: THE QUESTION
     The final question with two answer buttons
     ═══════════════════════════════════════════════════════════════ */
  question: [
    "Angelic,",
    "Out of all the paths life that could have been taken, I'm glad my timeline crossed with yours. And if you'll let me, I'd love to walk beside you, through the beautiful days and the difficult ones, and make more memories with you along the way.",
    "If I could ask for one thing from all the days that are yet to come, it would be the chance to spend them beside you. So, will you let me be yours, as I hope to make you mine?"
  ],

  yesText: "Yes",                      /* Text on YES button */
  thinkText: "I need a little time",     /* Text on MAYBE button */
  yesReply: "Of all the things I could have found, I'm glad I found you.",
  thinkReply: "Take all the time you need. The universe isn't going anywhere, and neither do I.",
  /* ↑ yesReply = YOUR CELEBRATION MESSAGE (shown above the fireworks).
     ↑ thinkReply = the headline of the "a little more time" scene. */

  /* ═══════════════════════════════════════════════════════════════
     THE QUESTION SCENE - timing, extra wording, sky settings
     In the question text above, put *stars* around a word to make it glow:
     "Will you *choose* me?"   (the LAST line of CONFIG.question is the main question,
     the lines before it are the introduction; the first intro line is the big title)
     ═══════════════════════════════════════════════════════════════ */
  questionScene: {
    /* --- Reveal timing (milliseconds) --- */
    introDelayMs: 1800,       /* darkness + gold light before the first word */
    wordMs: 240,              /* time between words (lower = faster) */
    commaPauseMs: 200,        /* extra pause after , ; : */
    sentencePauseMs: 520,     /* extra pause after . ? ! */
    linePauseMs: 700,         /* pause between intro lines / letter paragraphs */
    mainPauseMs: 1000,        /* pause before the main question appears */
    answersDelayMs: 600,      /* pause before the two buttons appear */

    /* --- Atmosphere --- */
    dustRampMs: 7000,         /* how long the golden dust takes to fill the screen */
    dustCountDesktop: 220,    /* number of golden dust specks on big screens */
    dustCountMobile: 90,      /* ...on phones (fewer = smoother battery) */
    fireworksSeconds: 14,     /* how long the fireworks last before it settles into calm */
    nightFadeMs: 3000,        /* how slowly the moonlit scene fades in */

    /* --- Words on small buttons --- */
    replayText: "watch again",
    backToQuestionText: "back to the question",
    menuText: "main menu",
    skipText: "skip ›",

    /* --- "A little more time" scene: the letter under the headline (one string per paragraph).
           SAMPLE WORDING - replace it with your own. --- */
    thinkLetter: [
      "Whatever you decide, and whenever you decide it, what I wrote on these pages was true.",
      "Look up for a while. The stars are in no hurry either."
    ],

    /* --- Constellation drawn in the night sky: [x, y] as fractions of the screen (0 to 1) --- */
    constellation: [[0.10, 0.34], [0.18, 0.22], [0.29, 0.28], [0.36, 0.14], [0.47, 0.20], [0.55, 0.10], [0.66, 0.18]]
  }
};


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ HELPER FUNCTIONS
   ★
   ★ Utility functions used throughout the code
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

/* Shortcut for document.querySelector - finds first matching element */
var $ = function(selector) {
  return document.querySelector(selector);
};

/* Escape HTML special characters to prevent code injection */
var esc = function(text) {
  return String(text).replace(/[&<>]/g, function(char) {
    return {'&': '&amp;', '<': '&lt;', '>': '&gt;'}[char];
  });
};

/*
 * Creates icon HTML - handles both emoji and image files
 * If value is an image path, returns <img> tag with size
 * If value is emoji text, returns the emoji directly
 */
function icon(value, sizeInPixels) {
  var isImage = /\.(png|jpe?g|gif|webp|svg)$/i.test(value) || /^data:image/.test(value);
  if (!isImage) return esc(value);

  var style = sizeInPixels ? 'style="width:' + sizeInPixels + 'px;height:' + sizeInPixels + 'px"' : '';
  return '<img class="ico" src="' + esc(value) + '" alt="" ' + style + ' onerror="this.replaceWith(document.createTextNode(\'✦\'))">';
}


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ PAGE INITIALIZATION
   ★
   ★ Runs immediately when page loads
   ★ Sets up initial content from CONFIG
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

/* Set the main sunflower photo as a CSS variable */
document.documentElement.style.setProperty('--img', CONFIG.image ? 'url("' + CONFIG.image + '")' : 'none');

/* Fill in static text elements */
$('#giftTitle').textContent = CONFIG.giftTitle;
$('#menuTitle').textContent = CONFIG.menuTitle;
$('#lettersTitle').textContent = CONFIG.lettersTitle;
$('#archiveTitle').textContent = CONFIG.archiveTitle;
$('#poemLink').textContent = CONFIG.poemLinkText;

/* Insert icons into gift envelope */
$('#sealIcon').innerHTML = icon(CONFIG.icons.seal, CONFIG.iconSizes.seal);

/* Build the four menu cards dynamically */
$('#cards').innerHTML = CONFIG.menu.map(function(menuItem) {
  var iconHTML = icon(CONFIG.icons[menuItem.icon] || menuItem.icon, CONFIG.iconSizes.menuCards);
  return '<button class="card" data-go="' + menuItem.go + '">' +
         '<i>' + iconHTML + '</i>' +
         '<b>' + esc(menuItem.name) + '</b>' +
         '<small>' + esc(menuItem.hint) + '</small>' +
         '</button>';
}).join('');


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ ANIMATED NIGHT SKY CANVAS
   ★
   ★ Draws twinkling stars and floating golden dust particles
   ★ Runs continuously in the background
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var canvas = $('#sky');
var context = canvas.getContext('2d');
var canvasWidth = 0;
var canvasHeight = 0;
var stars = [];      /* Array of star positions and properties */
var dust = [];       /* Array of golden dust particles */

/*
 * Regenerates stars and dust when window is resized
 * Creates density based on screen size
 */
function resizeCanvas() {
  canvasWidth = canvas.width = window.innerWidth;
  canvasHeight = canvas.height = window.innerHeight;

  /* Generate stars - density based on screen area */
  stars = [];
  for (var i = 0; i < Math.round(canvasWidth * canvasHeight / 5500); i++) {
    stars.push({
      x: Math.random() * canvasWidth,      /* Random position */
      y: Math.random() * canvasHeight,
      radius: Math.random() * 1.2 + 0.2,   /* Random size */
      phase: Math.random() * 6             /* Random twinkle timing */
    });
  }

  /* Generate golden dust particles */
  dust = [];
  for (var j = 0; j < CONFIG.dustParticleCount; j++) {
    dust.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius: Math.random() * 1.8 + 0.5,
      velocity: Math.random() * 0.25 + 0.08,  /* Upward speed */
      drift: Math.random() * 6                /* Horizontal sway timing */
    });
  }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

/*
 * Main animation loop - runs every frame
 * Draws twinkling stars and floating dust
 */
(function animateCanvas(time) {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  /* Draw twinkling stars with pulsing opacity */
  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    context.globalAlpha = 0.3 + 0.5 * Math.abs(Math.sin(time / 1600 + star.phase));
    context.fillStyle = '#fff4d6';
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 7);
    context.fill();
  }

  /* Draw floating golden dust particles */
  for (var j = 0; j < dust.length; j++) {
    var particle = dust[j];
    particle.y -= particle.velocity;  /* Move upward */
    particle.x += Math.sin(time / 1200 + particle.drift) * 0.2;  /* Sway left/right */

    /* Reset particle to bottom when it reaches top */
    if (particle.y < -5) {
      particle.y = canvasHeight + 5;
      particle.x = Math.random() * canvasWidth;
    }

    context.globalAlpha = 0.35 + 0.4 * Math.abs(Math.sin(time / 900 + particle.drift));
    context.fillStyle = '#ffcf5a';
    context.shadowColor = '#ffb81f';
    context.shadowBlur = 8;
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, 7);
    context.fill();
    context.shadowBlur = 0;
  }

  requestAnimationFrame(animateCanvas);  /* Loop continuously */
})(0);


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ MUSIC BOX (bottom-right)
   ★ ONE audio element for the whole site, so music never restarts
   ★ when screens change. Songs: CONFIG.music.tracks
   ★ Position/size: --music-player-* variables in style.css
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var audioElement = $('#audio');
var playerElement = $('#player');
var musicButton = $('#music');
var tracks = CONFIG.music.tracks;
var currentTrack = 0;

if (tracks && tracks.length) {
  playerElement.classList.remove('hidden');   /* visible on every screen */
  audioElement.volume = CONFIG.music.volume;
  $('#vol').value = CONFIG.music.volume;
  loadTrack(0);
  audioElement.addEventListener('ended', function() {
    if (currentTrack < tracks.length - 1 || CONFIG.music.loop) { loadTrack(currentTrack + 1); play(true); }
    else setPlaying(false);
  });
  audioElement.addEventListener('error', function() { setPlaying(false); showPlayHint(true); });
}

/* Loads track number `index` (wraps around) and shows its title. */
function loadTrack(index) {
  currentTrack = (index + tracks.length) % tracks.length;
  audioElement.src = tracks[currentTrack].src;
  $('#trackName').textContent = tracks[currentTrack].title;
}
function setPlaying(isPlaying) { musicButton.classList.toggle('playing', isPlaying); }
function showPlayHint(show) { $('#playHint').hidden = !show; }

/* Plays/pauses. Called by the seal click (autoplay) and the ♪ button.
   If the browser refuses, show "tap ♪ to play" instead of breaking anything. */
function play(shouldPlay) {
  if (!tracks || !tracks.length) return;
  if (!shouldPlay) { audioElement.pause(); setPlaying(false); return; }
  var attempt = audioElement.play();
  if (attempt && attempt.then) {
    attempt.then(function() { setPlaying(true); showPlayHint(false); })
           .catch(function() { setPlaying(false); showPlayHint(true); });
  }
}

musicButton.onclick = function() { play(audioElement.paused); };
$('#more').onclick = function() { $('#pop').classList.toggle('on'); };
$('#next').onclick = function() { var was = !audioElement.paused; loadTrack(currentTrack + 1); if (was) play(true); };
$('#prev').onclick = function() { var was = !audioElement.paused; loadTrack(currentTrack - 1); if (was) play(true); };
$('#vol').oninput = function(event) { audioElement.volume = event.target.value; };


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ NAVIGATION + MENU LOCK
   ★ The Question (go: "ask") unlocks after every OTHER menu card has
   ★ been opened. Progress lives in `completed` (real logic, not just CSS).
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var completed = {};   /* e.g. { obs: true, letters: true } */

/* The prerequisites = every menu item except the question. */
function prerequisiteIds() {
  return CONFIG.menu.filter(function(m) { return m.go !== 'ask'; }).map(function(m) { return m.go; });
}
function questionUnlocked() {
  return prerequisiteIds().every(function(id) { return completed[id]; });
}

/* Updates every menu card: ✓ done, 🔒 locked. Plays an animation the moment the question unlocks. */
function refreshMenu() {
  var wasLocked = $('#cards').classList.contains('questionLocked');
  var unlocked = questionUnlocked();
  var cards = document.querySelectorAll('.card');
  for (var i = 0; i < cards.length; i++) {
    var id = cards[i].dataset.go;
    cards[i].classList.toggle('done', !!completed[id]);
    if (id === 'ask') {
      cards[i].classList.toggle('locked', !unlocked);
      cards[i].setAttribute('aria-disabled', unlocked ? 'false' : 'true');
      cards[i].querySelector('small').textContent = unlocked ? CONFIG.unlockedHint : CONFIG.lockedHint;
      if (wasLocked && unlocked) {
        cards[i].classList.add('justUnlocked');
        setTimeout(function(c) { c.classList.remove('justUnlocked'); }, 2200, cards[i]);
      }
    }
  }
  $('#cards').classList.toggle('questionLocked', !unlocked);
}

/* Switches screens. Called by the menu cards, back button and the intro. */
function goToScreen(screenId) {
  if (screenId === 'ask' && !questionUnlocked()) return;   /* real lock */
  closeLetterNow(); closeLightbox(); stopQuestion();

  var allScreens = document.querySelectorAll('.screen');
  for (var i = 0; i < allScreens.length; i++) {
    allScreens[i].classList.toggle('on', allScreens[i].id === screenId);
  }
  $('#back').classList.toggle('on', screenId !== 'gift' && screenId !== 'menu');

  var floaters = document.querySelectorAll('.star,.disc');
  for (var j = 0; j < floaters.length; j++) floaters[j].remove();

  if (screenId === 'menu') refreshMenu();
  if (screenId === 'obs') startObservatory();
  if (screenId === 'archive') showArchive();
  if (screenId === 'poem') showPoem();
  if (screenId === 'ask') showQuestion();
  if (screenId === 'letters') showLetters();
}

$('#back').onclick = function() { goToScreen('menu'); };

/* Menu card click. Opening a card marks it completed (change that rule here). */
var menuCards = document.querySelectorAll('[data-go]');
for (var m = 0; m < menuCards.length; m++) {
  menuCards[m].onclick = (function(card) {
    return function() {
      var id = card.dataset.go;
      if (id === 'ask' && !questionUnlocked()) {
        card.classList.add('shake');
        setTimeout(function() { card.classList.remove('shake'); }, 500);
        return;
      }
      if (id !== 'ask') completed[id] = true;
      goToScreen(id);
    };
  })(menuCards[m]);
}
refreshMenu();


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ GIFT ENVELOPE: seal click -> flap opens -> glimpse image zooms
   ★ to fill the screen -> menu. Timings: CONFIG.animations
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var giftOpened = false;   /* makes sure the sequence runs only once */

/* Puts glimpse.png inside the envelope. If the file is missing, the old emoji is shown instead. */
(function setupGlimpse() {
  var img = new Image();
  img.alt = '';
  img.onload = function() { $('#glimpseIcon').appendChild(img); $('#zoomImg').src = CONFIG.glimpseImage; };
  img.onerror = function() { $('#glimpseIcon').innerHTML = icon(CONFIG.icons.glimpse, CONFIG.iconSizes.glimpse); $('#zoom').classList.add('noImage'); };
  img.src = CONFIG.glimpseImage;
})();

/* Runs when the SEAL is clicked (a real user click, so music is allowed to start). */
function openGift() {
  if (giftOpened) return;
  giftOpened = true;
  $('#seal').disabled = true;
  $('#env').classList.add('open');
  if (CONFIG.music.autoplayOnEnvelopeOpen) play(true);
  setTimeout(startZoom, CONFIG.animations.envelopeOpenMs);
}
$('#seal').onclick = openGift;

/* Grows the glimpse picture from its spot in the envelope to the full viewport
   (object-fit: cover = no stretching), then fades into the menu prepared underneath. */
function startZoom() {
  var zoom = $('#zoom'), box = $('#glimpseIcon').getBoundingClientRect();
  zoom.style.transition = 'none';
  zoom.style.left = box.left + 'px'; zoom.style.top = box.top + 'px';
  zoom.style.width = box.width + 'px'; zoom.style.height = box.height + 'px';
  zoom.style.opacity = '1';
  zoom.classList.add('on');
  void zoom.offsetWidth;   /* apply the start values before animating */
  zoom.style.transition = 'left, top, width, height ' + CONFIG.animations.imageZoomMs + 'ms cubic-bezier(.65,0,.25,1)';
  zoom.style.transition = 'all ' + CONFIG.animations.imageZoomMs + 'ms cubic-bezier(.65,0,.25,1)';
  zoom.style.left = '0px'; zoom.style.top = '0px'; zoom.style.width = '100vw'; zoom.style.height = '100vh';
  setTimeout(function() {
    goToScreen('menu');   /* menu fades in behind the full-screen picture */
    zoom.style.transition = 'opacity ' + CONFIG.animations.zoomFadeMs + 'ms ease';
    zoom.style.opacity = '0';
    setTimeout(function() { zoom.classList.remove('on'); }, CONFIG.animations.zoomFadeMs);
  }, CONFIG.animations.imageZoomMs);
}


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ FLOATING PAPER LETTERS
   ★ ONE letter at a time. showNote() is used by petals, stars,
   ★ discoveries, the center letter, unsent letters and whispers.
   ★ The paper flies out of the element you pass (originEl), unfolds,
   ★ then the text is typed. Size/fonts: --letter-* in style.css
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var letter = { paper: null, timer: null, text: '', pos: 0, closing: false };

/* Opens a letter. originEl = where the paper emerges from, speed = ms per character (optional). */
function showNote(title, body, originEl, speed) {
  closeLetterNow();                       /* never stack letters */
  var layer = $('#paperLayer');
  var paper = document.createElement('div');
  paper.className = 'paper';
  paper.setAttribute('role', 'dialog');
  paper.setAttribute('aria-label', title);
  paper.innerHTML = '<h2>' + esc(title) + '</h2><div class="body"></div>' +
                    '<button class="x" aria-label="Close letter">close ✕</button>';
  layer.appendChild(paper);
  layer.classList.add('on');

  /* Distance from the screen middle to the origin: the paper animates from there. */
  var pr = paper.getBoundingClientRect(), o = originEl ? originEl.getBoundingClientRect() : pr;
  paper.style.setProperty('--from-x', (o.left + o.width / 2 - pr.left - pr.width / 2) + 'px');
  paper.style.setProperty('--from-y', (o.top + o.height / 2 - pr.top - pr.height / 2) + 'px');
  paper.classList.add('enter');

  letter = { paper: paper, timer: null, text: String(body), pos: 0, closing: false };
  paper.querySelector('.x').onclick = closeLetter;
  paper.querySelector('.body').onclick = finishTyping;   /* click the text = show everything now */
  paper.querySelector('.x').focus({ preventScroll: true });
  letter.timer = setTimeout(function() { typeStep(speed || CONFIG.animations.letterTypingSpeed); }, 450);
}

/* Types one character, then schedules the next. The unwritten rest stays invisible so the paper never resizes. */
function typeStep(speed) {
  if (!letter.paper) return;
  letter.pos++;
  paintLetter();
  if (letter.pos < letter.text.length) letter.timer = setTimeout(function() { typeStep(speed); }, speed);
}
function paintLetter() {
  letter.paper.querySelector('.body').innerHTML = esc(letter.text.slice(0, letter.pos)) +
    '<span class="ghost">' + esc(letter.text.slice(letter.pos)) + '</span>';
}
function finishTyping() {
  if (!letter.paper) return;
  clearTimeout(letter.timer); letter.pos = letter.text.length; paintLetter();
}

/* Close button / Escape / click outside: stop typing and fly the paper back. */
function closeLetter() {
  if (!letter.paper || letter.closing) return;
  letter.closing = true;
  clearTimeout(letter.timer);
  var p = letter.paper;
  p.classList.add('leave');
  setTimeout(function() { if (letter.paper === p) closeLetterNow(); }, 450);
}
/* Instant removal (used when switching letters or screens). */
function closeLetterNow() {
  clearTimeout(letter.timer);
  if (letter.paper) letter.paper.remove();
  letter = { paper: null, timer: null, text: '', pos: 0, closing: false };
  $('#paperLayer').classList.remove('on');
}
$('#paperLayer').onclick = function(event) { if (event.target.id === 'paperLayer') closeLetter(); };
window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') { closeLetter(); closeLightbox(); }
});


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ OBSERVATORY SCREEN (THE MAIN INTERACTIVE FLOWER)
   ★
   ★ Most complex section - handles:
   ★ - Rotating sunflower with drag or buttons
   ★ - 8 clickable glowing petals
   ★ - Hidden whispers revealed by rotation
   ★ - Center letter (unlocked after all petals)
   ★ - Clickable stars in the sky
   ★ - Discovery objects (telescope, notebook)
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var rotation = 0;                /* Current flower rotation in degrees */
var lastWhisper = -1;           /* which whisper range the flower is in now (-1 = none) */
var seenPetals = new Set();      /* Tracks which petals have been clicked */
var foundWhispers = new Set();   /* Tracks which hidden messages found */
var observatoryBuilt = false;    /* Prevents rebuilding on each visit */
var flowerHead = $('#head');
var flowerStage = $('#stage');

/*
 * Updates flower rotation and checks for hidden messages
 * Called whenever rotation changes
 */
function updateRotation() {
  flowerHead.style.setProperty('--r', rotation + 'deg');
  var normalizedAngle = ((rotation % 360) + 360) % 360;  /* Keep 0-359 */

  /* Whisper unlock rule (unchanged): the angle must fall inside a CONFIG.hidden range.
     The letter opens when you ENTER a range, not on every tiny movement inside it. */
  var current = -1;
  for (var i = 0; i < CONFIG.hidden.length; i++) {
    if (normalizedAngle >= CONFIG.hidden[i].from && normalizedAngle <= CONFIG.hidden[i].to) current = i;
  }
  if (current !== lastWhisper) {
    lastWhisper = current;
    if (current >= 0) revealWhisper(current);
  }

  updateCounter();
}

/* Shows a whisper as a paper letter coming out of the flower center. foundWhispers is never reset. */
function revealWhisper(index) {
  foundWhispers.add(index);
  flowerHead.classList.add('whisperGlow');
  setTimeout(function() { flowerHead.classList.remove('whisperGlow'); }, 1500);
  showNote('a whisper', CONFIG.hidden[index].text, $('#core'));
}

/*
 * Updates the progress counter: "X/8 petals · Y/4 whispers"
 * Unlocks center letter when all petals clicked
 */
function updateCounter() {
  $('#count').textContent = seenPetals.size + '/' + CONFIG.petals.length +
                           ' petals · ' + foundWhispers.size + '/' +
                           CONFIG.hidden.length + ' whispers';
  $('#core').classList.toggle('ready', seenPetals.size === CONFIG.petals.length);
}

/*
 * Initializes the observatory screen
 * Builds all interactive elements on first visit
 */
function startObservatory() {
  /* Reset and trigger bloom animation */
  flowerStage.classList.remove('bloom');
  void flowerStage.offsetWidth;  /* Force reflow */
  setTimeout(function() {
    flowerStage.classList.add('bloom');
  }, 300);

  /* Show hint message */
  $('#msg').innerHTML = '<span class="hand">' + esc(CONFIG.observatoryHint) + '</span>';

  /* Build interactive elements only once */
  if (!observatoryBuilt) {
    observatoryBuilt = true;
    var petalCount = CONFIG.petals.length;

    /* ═══════════════════════════════════════════════════════════
       CREATE PETAL BUTTONS
       Arranged in a circle around the flower center
       ═══════════════════════════════════════════════════════════ */
    for (var i = 0; i < petalCount; i++) {
      (function(petalIndex, petalText) {
        /* Calculate position on circle */
        var angle = petalIndex / petalCount * 2 * Math.PI - Math.PI / 2;
        var petalButton = document.createElement('button');
        petalButton.className = 'hot';
        petalButton.setAttribute('aria-label', 'Petal ' + (petalIndex + 1));

        /* Use custom petal image if provided */
        if (CONFIG.petalImage) {
          petalButton.style.backgroundImage = 'url("' + CONFIG.petalImage + '")';
        }

        /* Position petal on circle (50% center + 35% radius) */
        petalButton.style.left = (50 + 35 * Math.cos(angle)) + '%';
        petalButton.style.top = (50 + 35 * Math.sin(angle)) + '%';
        petalButton.style.setProperty('--petal-angle', (angle * 180 / Math.PI + 90) + 'deg');
        petalButton.style.animationDelay = (petalIndex * 0.2) + 's';
        petalButton.style.setProperty('--bloom-delay', (0.9 + petalIndex * 0.15) + 's');  /* petals bloom one after another */

        /* Click handler - marks petal as seen and shows message */
        petalButton.onclick = function() {
          seenPetals.add(petalIndex);
          petalButton.classList.add('seen');
          updateCounter();
          showNote('petal ' + (petalIndex + 1), petalText, petalButton);   /* paper flies out of THIS petal */
        };

        flowerHead.appendChild(petalButton);
      })(i, CONFIG.petals[i]);
    }

    /* ═══════════════════════════════════════════════════════════
       CENTER LETTER BUTTON
       Opens final letter when all petals have been clicked
       ═══════════════════════════════════════════════════════════ */
    $('#core').onclick = function() {
      showNote(CONFIG.centerLetter.title, CONFIG.centerLetter.body, $('#core'));
    };

    /* ═══════════════════════════════════════════════════════════
       DRAG TO ROTATE FLOWER
       Mouse/touch drag rotates the flower head
       ═══════════════════════════════════════════════════════════ */
    var isDragging = null;
    var startAngle = 0;
    var startRotation = 0;

    /* Calculates angle from flower center to pointer position */
    var getPointerAngle = function(event) {
      var rect = flowerHead.getBoundingClientRect();
      return Math.atan2(
        event.clientY - (rect.top + rect.height / 2),
        event.clientX - (rect.left + rect.width / 2)
      ) * 180 / Math.PI;
    };

    /* Start drag */
    flowerHead.addEventListener('pointerdown', function(event) {
      if (event.target.closest('button')) return;  /* Don't drag when clicking petals */
      isDragging = true;
      startAngle = getPointerAngle(event);
      startRotation = rotation;
      flowerHead.classList.add('drag');
      flowerHead.setPointerCapture(event.pointerId);
    });

    /* During drag - update rotation */
    flowerHead.addEventListener('pointermove', function(event) {
      if (!isDragging) return;
      rotation = startRotation + (getPointerAngle(event) - startAngle);
      updateRotation();
    });

    /* End drag */
    flowerHead.addEventListener('pointerup', function() {
      isDragging = null;
      flowerHead.classList.remove('drag');
    });

    /* ═══════════════════════════════════════════════════════════
       ROTATION BUTTONS (⟲ and ⟳)
       Click to rotate flower by fixed amount
       ═══════════════════════════════════════════════════════════ */
    var rotateBy = function(degrees) {
      flowerHead.classList.add('spin');
      rotation += degrees;
      updateRotation();
    };

    $('#rotL').onclick = function() {
      rotateBy(-15);  /* Rotate left 15 degrees */
    };

    $('#rotR').onclick = function() {
      rotateBy(15);   /* Rotate right 15 degrees */
    };

    /* ═══════════════════════════════════════════════════════════
       ARROW KEY ROTATION
       Left/Right arrow keys rotate flower
       ═══════════════════════════════════════════════════════════ */
    window.addEventListener('keydown', function(event) {
      if ($('#obs').classList.contains('on')) {
        if (event.key === 'ArrowLeft') rotateBy(-10);
        if (event.key === 'ArrowRight') rotateBy(10);
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     CREATE CLICKABLE STARS
     Small glowing stars positioned by viewport percentage
     ═══════════════════════════════════════════════════════════ */
  for (var i = 0; i < CONFIG.stars.length; i++) {
    (function(star) {
      var starButton = document.createElement('button');
      starButton.className = 'star';
      starButton.style.left = star.x + 'vw';
      starButton.style.top = star.y + 'vh';
      starButton.setAttribute('aria-label', star.title);
      starButton.onclick = function() {
        showNote(star.title, star.text, starButton);
      };
      document.body.appendChild(starButton);
    })(CONFIG.stars[i]);
  }

  /* ═══════════════════════════════════════════════════════════
     CREATE DISCOVERY OBJECTS
     Larger interactive icons (telescope, notebook, etc.)
     ═══════════════════════════════════════════════════════════ */
  for (var j = 0; j < CONFIG.discoveries.length; j++) {
    (function(discovery) {
      var discoveryButton = document.createElement('button');
      discoveryButton.className = 'disc';
      var size = discovery.size || CONFIG.iconSizes.discoveries;
      discoveryButton.innerHTML = icon(discovery.icon, size);
      discoveryButton.style.fontSize = size + 'px';
      discoveryButton.style.left = discovery.x + 'vw';
      discoveryButton.style.top = discovery.y + 'vh';
      discoveryButton.style.transform = 'translate(-50%,-50%)';
      discoveryButton.setAttribute('aria-label', discovery.title);
      discoveryButton.onclick = function() {
        showNote(discovery.title, discovery.text, discoveryButton);
      };
      document.body.appendChild(discoveryButton);
    })(CONFIG.discoveries[j]);
  }

  updateRotation();  /* Initial check for hidden messages */
}


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ LETTERS SCREEN
   ★
   ★ Displays sealed letter envelopes on a shelf
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

function showLetters() {
  var html = '';
  for (var i = 0; i < CONFIG.letters.length; i++) {
    var mailItem = CONFIG.letters[i];
    var stampHTML = icon(CONFIG.icons.letterStamp, CONFIG.iconSizes.letterStamp);
    html += '<button class="mail" data-i="' + i + '">' +
            '<span class="stamp">' + stampHTML + '</span>' +
            esc(mailItem.label) +
            '</button>';
  }
  $('#shelf').innerHTML = html;

  /* Add click handlers to each envelope */
  var mailButtons = document.querySelectorAll('.mail');
  for (var j = 0; j < mailButtons.length; j++) {
    (function(mailButton) {
      mailButton.onclick = function() {
        var mail = CONFIG.letters[mailButton.dataset.i];
        showNote(mail.title, mail.body, mailButton);
      };
    })(mailButtons[j]);
  }
}


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ POEM SCREEN
   ★
   ★ Displays poem lines with staggered fade-in animation
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

function showPoem() {
  var html = '<h2>' + esc(CONFIG.poemTitle) + '</h2>';
  for (var i = 0; i < CONFIG.poem.length; i++) {
    var line = CONFIG.poem[i];
    /* Each line fades in with increasing delay */
    html += '<p style="animation-delay:' + (0.6 + i * 0.9) + 's">' +
            (esc(line) || '&nbsp;') +  /* Empty lines use non-breaking space */
            '</p>';
  }
  $('#poemPage').innerHTML = html;
}


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ OUR ARCHIVE (photos from CONFIG.archive) + photo viewer
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

/* One polaroid-style card per entry. Empty/missing images show a labeled placeholder. */
function showArchive() {
  var html = '';
  for (var i = 0; i < CONFIG.archive.length; i++) {
    var p = CONFIG.archive[i];
    html += '<button class="snap" data-i="' + i + '" style="animation-delay:' + (i * 0.12) + 's">' +
            '<span class="pic"><em class="ph">photo placeholder</em>' +
            (p.src ? '<img src="' + esc(p.src) + '" alt="' + esc(p.caption || 'Photo') + '" loading="lazy">' : '') + '</span>' +
            '<b>' + esc(p.caption || '') + '</b><small>' + esc(p.date || '') + '</small></button>';
  }
  $('#gallery').innerHTML = html;
  var snaps = document.querySelectorAll('.snap');
  for (var j = 0; j < snaps.length; j++) {
    var img = snaps[j].querySelector('img');
    if (img) img.onerror = function() { this.remove(); };   /* broken path -> placeholder stays */
    snaps[j].onclick = (function(index) { return function() { openLightbox(index); }; })(j);
  }
}
$('#poemLink').onclick = function() { goToScreen('poem'); };

function openLightbox(index) {
  var p = CONFIG.archive[index], box = $('#lightbox');
  box.innerHTML = '<figure>' + (p.src ? '<img src="' + esc(p.src) + '" alt="' + esc(p.caption || 'Photo') + '" onerror="this.outerHTML=\'<div class=ph2>photo placeholder</div>\'">' : '<div class="ph2">photo placeholder</div>') +
    '<figcaption><b>' + esc(p.caption || '') + '</b> <small>' + esc(p.date || '') + '</small><p>' + esc(p.note || '') + '</p></figcaption></figure>' +
    '<button class="x" aria-label="Close photo">close ✕</button>';
  box.classList.add('on');
  box.querySelector('.x').onclick = closeLightbox;
  box.querySelector('.x').focus({ preventScroll: true });
}
function closeLightbox() { $('#lightbox').classList.remove('on'); }
$('#lightbox').onclick = function(event) { if (event.target.id === 'lightbox') closeLightbox(); };


/* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
   ★ THE QUESTION (cinematic scene engine)
   ★
   ★ Three scenes live inside #ask:
   ★   1) question  - golden dust, words appear one by one, then the answers
   ★   2) yes       - fireworks + your celebration message
   ★   3) time      - a quiet moonlit observatory, a forming constellation,
   ★                  a lantern light that follows your finger/cursor
   ★ All wording is in CONFIG (question, yesText, thinkText, yesReply,
   ★ thinkReply) and CONFIG.questionScene. This code only does timing + drawing.
   ★ Drawing uses ONE canvas and ONE animation loop; stopQuestion() cleans up.
   ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★ */

var QS = CONFIG.questionScene;
var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
var Q = null;   /* live state of the question screen; null when we are not on it */

/* setTimeout that is remembered so stopQuestion() can cancel it. */
function qTimer(fn, ms) { var id = setTimeout(fn, ms); Q.timers.push(id); return id; }

/* Leaves the question screen: cancels timers, the animation loop and listeners. Safe to call any time. */
function stopQuestion() {
  if (!Q) return;
  Q.timers.forEach(clearTimeout);
  cancelAnimationFrame(Q.raf);
  window.removeEventListener('resize', Q.onResize);
  $('#ask').removeEventListener('pointermove', Q.onPointer);
  $('#ask').removeEventListener('pointerdown', Q.onPointer);
  $('#ask').classList.remove('night');
  $('#ask').innerHTML = '';
  Q = null;
}

/* Turns "a *glowing* word" into <span> per word (hidden until revealed). Words wrapped in *stars* glow. */
function setWords(el, text) {
  el.textContent = '';
  var words = String(text).split(/\s+/).filter(Boolean), spans = [];
  words.forEach(function(word, i) {
    var span = document.createElement('span');
    span.className = 'w' + (/^\*.+\*\W*$/.test(word) ? ' glow' : '');
    span.textContent = word.replace(/\*/g, '');
    el.appendChild(span);
    if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    spans.push(span);
  });
  return spans;
}

/* Reveals spans one after another starting at startMs. Returns the time when the last word is shown. */
function revealWords(spans, startMs) {
  var t = startMs;
  spans.forEach(function(span) {
    if (reducedMotion.matches) { span.classList.add('in'); return; }
    qTimer(function() { span.classList.add('in'); }, t);
    var last = span.textContent.slice(-1);
    t += QS.wordMs + (/[.?!…]/.test(last) ? QS.sentencePauseMs : /[,;:—]/.test(last) ? QS.commaPauseMs : 0);
  });
  return reducedMotion.matches ? startMs : t;
}

/* Shows one scene and hides the others (hidden elements take no space, so nothing jumps). */
function showScene(id) {
  ['sQuestion', 'sYes', 'sTime'].forEach(function(sceneId) {
    var el = $('#' + sceneId);
    el.hidden = sceneId !== id;
    el.classList.remove('out');
  });
  $('#askStage').scrollTop = 0;
}

/* Builds the whole screen and starts the opening sequence. Called by goToScreen('ask'). */
function showQuestion() {
  stopQuestion();
  var lines = CONFIG.question, intro = lines.slice(0, -1), mainText = lines[lines.length - 1];
  var html = '<canvas id="askCanvas"></canvas><div class="aura"></div><div class="askStage" id="askStage">' +
    '<div class="scene" id="sQuestion">';
  intro.forEach(function(l, i) { html += '<p class="line' + (i === 0 ? ' title' : '') + '"></p>'; });
  html += '<h2 class="mainQ" id="mainQ"></h2>' +
    '<div class="answers" id="answers">' +
      '<button class="btn yes" id="yes" disabled>' + esc(CONFIG.yesText) + '</button>' +
      '<button class="btn think" id="think" disabled>' + esc(CONFIG.thinkText) + '</button></div></div>' +
    '<div class="scene" id="sYes" hidden><p class="bigMsg" id="yesMsg"></p>' +
      '<div class="actions" id="yesActions"><button class="btn small" id="again">' + esc(QS.replayText) + '</button>' +
      '<button class="btn small" id="backQ1">' + esc(QS.backToQuestionText) + '</button></div></div>' +
    '<div class="scene" id="sTime" hidden><div class="card"><p class="bigMsg" id="timeHead"></p><div id="timeLetter"></div></div>' +
      '<div class="actions" id="timeActions"><button class="btn small" id="backQ2">' + esc(QS.backToQuestionText) + '</button>' +
      '<button class="btn small" id="toMenu">' + esc(QS.menuText) + '</button></div></div>' +
    '</div><button class="skip" id="skip">' + esc(QS.skipText) + '</button>';
  $('#ask').innerHTML = html;

  Q = { timers: [], raf: 0, phase: 'intro', mode: 'dust', modeT: 0, night: 0, dust: 0, w: 0, h: 0,
        sparks: [], rockets: [], flashes: [], nextLaunch: 0, px: 0, py: 0, pT: -1e9, shoot: null, nextShoot: 0 };

  Q.lineSpans = [].map.call(document.querySelectorAll('#ask .line'), function(el, i) { return setWords(el, intro[i]); });
  Q.mainSpans = setWords($('#mainQ'), mainText);
  $('#yes').onclick = chooseYes;
  $('#think').onclick = chooseTime;
  $('#skip').onclick = skipIntro;
  $('#again').onclick = replayYes;
  $('#backQ1').onclick = backToQuestion;
  $('#backQ2').onclick = backToQuestion;
  $('#toMenu').onclick = function() { goToScreen('menu'); };
  startCanvas();

  /* Opening timeline: darkness + dust first, then each intro line, a pause, the main question, then the answers. */
  var t = QS.introDelayMs;
  Q.lineSpans.forEach(function(spans) { t = revealWords(spans, t) + QS.linePauseMs; });
  t = revealWords(Q.mainSpans, t + QS.mainPauseMs);
  qTimer(showAnswers, t + QS.answersDelayMs);
}

/* Makes the answer buttons usable. They were laid out (invisible) all along, so nothing moves. */
function showAnswers() {
  Q.phase = 'ready';
  $('#answers').classList.add('show');
  $('#yes').disabled = false; $('#think').disabled = false;
  $('#skip').hidden = true;
}
/* "skip" button: show all text right now. */
function skipIntro() {
  if (!Q || Q.phase !== 'intro') return;
  Q.timers.forEach(clearTimeout); Q.timers = [];
  Q.lineSpans.concat([Q.mainSpans]).forEach(function(spans) { spans.forEach(function(s) { s.classList.add('in'); }); });
  showAnswers();
}

/* ---------- PATHWAY 1: YES ---------- */
function chooseYes() {
  if (!Q || Q.phase !== 'ready') return;      /* repeated clicks are ignored */
  Q.phase = 'yes';
  $('#yes').disabled = true; $('#think').disabled = true;
  var r = $('#yes').getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 26, 0.6, 1);   /* sparkle where she pressed */
  $('#answers').classList.remove('show');
  $('#sQuestion').classList.add('out');
  Q.mode = 'fireworks'; Q.modeT = performance.now(); Q.nextLaunch = Q.modeT + 500;
  qTimer(function() { showScene('sYes'); playYesMessage(); }, 1000);
}
/* Reveals CONFIG.yesReply (your celebration message), then the buttons. */
function playYesMessage() {
  $('#yesActions').classList.remove('show');
  var end = revealWords(setWords($('#yesMsg'), CONFIG.yesReply), 700);
  qTimer(function() { $('#yesActions').classList.add('show'); Q.phase = 'yesDone'; }, end + 800);
}
function replayYes() {
  if (!Q || Q.phase !== 'yesDone') return;
  Q.phase = 'yes';
  Q.mode = 'fireworks'; Q.modeT = performance.now(); Q.nextLaunch = Q.modeT + 300;
  playYesMessage();
}

/* ---------- PATHWAY 2: I NEED A LITTLE TIME ---------- */
function chooseTime() {
  if (!Q || Q.phase !== 'ready') return;
  Q.phase = 'time';
  $('#yes').disabled = true; $('#think').disabled = true;
  $('#answers').classList.remove('show');
  $('#sQuestion').classList.add('out');
  $('#ask').classList.add('night');
  Q.mode = 'night'; Q.modeT = performance.now();
  qTimer(function() {
    showScene('sTime');
    $('#timeActions').classList.remove('show');
    var box = $('#timeLetter'); box.textContent = '';
    var end = revealWords(setWords($('#timeHead'), CONFIG.thinkReply), 1200);
    QS.thinkLetter.forEach(function(paragraph) {
      var p = document.createElement('p'); box.appendChild(p);
      end = revealWords(setWords(p, paragraph), end + QS.linePauseMs);
    });
    qTimer(function() { $('#timeActions').classList.add('show'); Q.phase = 'timeDone'; }, end + 800);
  }, 1600);
}

/* Back from either ending to the question, without reloading anything. */
function backToQuestion() {
  if (!Q || (Q.phase !== 'yesDone' && Q.phase !== 'timeDone')) return;
  Q.timers.forEach(clearTimeout); Q.timers = [];
  Q.mode = 'dust'; Q.modeT = performance.now(); Q.start = Q.modeT - QS.dustRampMs;
  $('#ask').classList.remove('night');
  showScene('sQuestion');
  Q.lineSpans.concat([Q.mainSpans]).forEach(function(spans) { spans.forEach(function(s) { s.classList.add('in'); }); });
  showAnswers();
}

/* ---------- CANVAS ENGINE (dust, fireworks, night sky) ---------- */
var GOLD = ['#ffd45e', '#ffb81f', '#fff1b8', '#ff9a3c', '#e8553a'];

function startCanvas() {
  var cv = $('#askCanvas');
  Q.cv = cv; Q.cx = cv.getContext('2d');
  /* A soft glowing dot, drawn once and stamped many times (much cheaper than shadowBlur). */
  var sp = document.createElement('canvas'); sp.width = sp.height = 64;
  var g = sp.getContext('2d').createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,244,200,1)'); g.addColorStop(0.3, 'rgba(255,205,90,0.55)'); g.addColorStop(1, 'rgba(255,170,40,0)');
  var sx = sp.getContext('2d'); sx.fillStyle = g; sx.fillRect(0, 0, 64, 64);
  Q.sprite = sp;
  /* Positions are stored as fractions (0-1), so resizing never needs regenerating them. */
  var small = window.innerWidth < 600;
  Q.dustList = []; Q.starList = [];
  for (var i = 0; i < (small ? QS.dustCountMobile : QS.dustCountDesktop); i++) {
    Q.dustList.push({ x: Math.random(), y: Math.random(), z: 0.2 + Math.random() * 0.8, v: 0.012 + Math.random() * 0.03, ph: Math.random() * 6 });
  }
  for (var j = 0; j < (small ? 70 : 150); j++) {
    Q.starList.push({ x: Math.random(), y: Math.random() * 0.75, r: 0.4 + Math.random() * 1.1, ph: Math.random() * 6 });
  }
  sizeCanvas();
  Q.onResize = sizeCanvas;
  Q.onPointer = function(e) { Q.px = e.clientX; Q.py = e.clientY; Q.pT = performance.now(); };
  window.addEventListener('resize', Q.onResize);
  $('#ask').addEventListener('pointermove', Q.onPointer);
  $('#ask').addEventListener('pointerdown', Q.onPointer);
  Q.start = Q.last = performance.now();
  Q.raf = requestAnimationFrame(frame);
}

/* Matches the canvas to the screen (sharp on retina, capped to stay light on phones). */
function sizeCanvas() {
  if (!Q) return;
  var cv = Q.cv, dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 600 ? 1.5 : 2);
  Q.w = cv.clientWidth; Q.h = cv.clientHeight;
  cv.width = Math.round(Q.w * dpr); cv.height = Math.round(Q.h * dpr);
  Q.cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  var sky = Q.cx.createLinearGradient(0, 0, 0, Q.h);
  sky.addColorStop(0, '#030816'); sky.addColorStop(0.6, '#0a1733'); sky.addColorStop(1, '#16274a');
  Q.sky = sky;
  /* Moon picture (halo + disc), drawn once. */
  var R = Math.max(22, Math.min(Q.w, Q.h) * 0.07), m = document.createElement('canvas');
  m.width = m.height = Math.ceil(R * 6);
  var mx = m.getContext('2d'), c = R * 3, halo = mx.createRadialGradient(c, c, R * 0.8, c, c, R * 3);
  halo.addColorStop(0, 'rgba(200,215,255,0.35)'); halo.addColorStop(1, 'rgba(200,215,255,0)');
  mx.fillStyle = halo; mx.fillRect(0, 0, m.width, m.height);
  mx.fillStyle = '#eef2ff'; mx.beginPath(); mx.arc(c, c, R, 0, 7); mx.fill();
  mx.fillStyle = 'rgba(150,165,205,0.35)';
  mx.beginPath(); mx.arc(c - R * 0.3, c - R * 0.2, R * 0.22, 0, 7); mx.fill();
  mx.beginPath(); mx.arc(c + R * 0.35, c + R * 0.3, R * 0.15, 0, 7); mx.fill();
  Q.moon = m; Q.moonR = R;
}

/* Runs ~60 times a second while the question screen is open. */
function frame(now) {
  if (!Q) return;
  Q.raf = requestAnimationFrame(frame);
  var dt = Math.min(0.05, (now - Q.last) / 1000); Q.last = now;
  var cx = Q.cx;
  cx.clearRect(0, 0, Q.w, Q.h);

  /* ease the "how much night / how much dust" dials toward their targets */
  var nightGoal = Q.mode === 'night' ? 1 : 0;
  Q.night += Math.max(-1, Math.min(1, nightGoal - Q.night)) * Math.min(1, dt * 1000 / QS.nightFadeMs) * (nightGoal > Q.night ? 1 : 2);
  Q.night = Math.max(0, Math.min(1, Q.night));
  var dustGoal = Q.mode === 'dust' ? Math.min(1, (now - Q.start) / QS.dustRampMs) * 0.85 : Q.mode === 'fireworks' ? 1.15 : Q.mode === 'quiet' ? 0.6 : 0;
  Q.dust += (dustGoal - Q.dust) * Math.min(1, dt * 1.5);

  if (Q.night > 0.003) drawNight(cx, now);
  if (Q.dust > 0.01) drawDust(cx, now, dt);

  if (Q.mode === 'fireworks' && !reducedMotion.matches) {
    if (now - Q.modeT > QS.fireworksSeconds * 1000) Q.mode = 'quiet';           /* settle into calm */
    else if (now >= Q.nextLaunch) {
      launchRocket(); if (Math.random() < 0.35) launchRocket();
      Q.nextLaunch = now + (Q.w < 600 ? 550 : 380) + Math.random() * 650;
    }
  }
  drawFireworks(cx, dt);
}

function drawDust(cx, now, dt) {
  var speed = Q.mode === 'fireworks' ? 1.6 : Q.mode === 'quiet' ? 0.6 : 1, still = reducedMotion.matches;
  cx.globalCompositeOperation = 'lighter';
  for (var i = 0; i < Q.dustList.length; i++) {
    var d = Q.dustList[i];
    if (!still) {
      d.y -= d.v * d.z * dt * speed;
      d.x += Math.sin(now / 1500 + d.ph) * 0.012 * d.z * dt;
      if (d.y < -0.03) { d.y = 1.03; d.x = Math.random(); }
    }
    var tw = still ? 0.8 : 0.55 + 0.45 * Math.sin(now / 700 + d.ph * 5), s = 5 + d.z * 11;
    cx.globalAlpha = Math.min(1, Q.dust * (0.25 + 0.6 * d.z) * tw * (1 - Q.night));
    cx.drawImage(Q.sprite, d.x * Q.w - s / 2, d.y * Q.h - s / 2, s, s);
  }
  cx.globalAlpha = 1; cx.globalCompositeOperation = 'source-over';
}

/* Sends a rocket up; when it peaks it explodes into sparks. */
function launchRocket() {
  var targetY = Q.h * (0.14 + Math.random() * 0.3), g = 300;
  Q.rockets.push({ x: Q.w * (0.12 + Math.random() * 0.76), y: Q.h + 8, vx: (Math.random() - 0.5) * 30,
                   vy: -Math.sqrt(2 * g * (Q.h - targetY)), big: Math.random() < 0.2, color: GOLD[(Math.random() * 3) | 0] });
}
/* A ring/sphere of sparks at x,y. size scales speed, n = number of sparks. */
function burst(x, y, n, size, big) {
  if (Q.sparks.length > 750) return;
  var color = GOLD[(Math.random() * GOLD.length) | 0], color2 = GOLD[(Math.random() * GOLD.length) | 0];
  for (var i = 0; i < n; i++) {
    var a = Math.random() * 6.283, sp = (60 + Math.random() * 170) * size * (Q.w < 600 ? 0.7 : 1);
    Q.sparks.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: 0.5 + Math.random() * 0.5,
                    color: i % 3 ? color : color2, w: 1 + Math.random() * 1.4 });
  }
  if (big) Q.flashes.push({ x: x, y: y, a: 0.35 });
}
function drawFireworks(cx, dt) {
  if (!Q.rockets.length && !Q.sparks.length && !Q.flashes.length) return;
  cx.globalCompositeOperation = 'lighter'; cx.lineCap = 'round';
  var i;
  for (i = Q.flashes.length - 1; i >= 0; i--) {        /* soft light on the scene when a firework bursts */
    var f = Q.flashes[i]; f.a -= dt * 0.35;
    if (f.a <= 0) { Q.flashes.splice(i, 1); continue; }
    cx.globalAlpha = f.a; cx.drawImage(Q.sprite, f.x - 260, f.y - 260, 520, 520);
  }
  for (i = Q.rockets.length - 1; i >= 0; i--) {
    var r = Q.rockets[i]; r.vy += 300 * dt; r.x += r.vx * dt; r.y += r.vy * dt;
    if (r.vy > -25) {
      Q.rockets.splice(i, 1);
      burst(r.x, r.y, Q.w < 600 ? 36 : 70, r.big ? 1.5 : 1, true);
      if (r.big) burst(r.x, r.y, 24, 0.55, false);      /* inner second ring */
      continue;
    }
    cx.globalAlpha = 0.9; cx.strokeStyle = r.color; cx.lineWidth = 2;
    cx.beginPath(); cx.moveTo(r.x - r.vx * 0.06, r.y - r.vy * 0.06); cx.lineTo(r.x, r.y); cx.stroke();
  }
  var drag = Math.pow(0.35, dt);
  for (i = Q.sparks.length - 1; i >= 0; i--) {
    var s = Q.sparks[i];
    s.life -= s.decay * dt;
    if (s.life <= 0) { Q.sparks.splice(i, 1); continue; }
    s.vx *= drag; s.vy = s.vy * drag + 90 * dt; s.x += s.vx * dt; s.y += s.vy * dt;
    cx.globalAlpha = s.life; cx.strokeStyle = s.color; cx.lineWidth = s.w;
    cx.beginPath(); cx.moveTo(s.x - s.vx * 0.05, s.y - s.vy * 0.05); cx.lineTo(s.x, s.y); cx.stroke();
  }
  cx.globalAlpha = 1; cx.globalCompositeOperation = 'source-over';
}

/* The quiet moonlit observatory (pathway 2). Everything is multiplied by Q.night so it fades in gently. */
function drawNight(cx, now) {
  var w = Q.w, h = Q.h, n = Q.night, t = (now - Q.modeT) / 1000, still = reducedMotion.matches, i;
  cx.globalAlpha = n; cx.fillStyle = Q.sky; cx.fillRect(0, 0, w, h);
  cx.fillStyle = '#dfe8ff';
  for (i = 0; i < Q.starList.length; i++) {
    var st = Q.starList[i];
    cx.globalAlpha = n * (still ? 0.7 : 0.35 + 0.55 * Math.abs(Math.sin(now / 1400 + st.ph)));
    cx.beginPath(); cx.arc(st.x * w, st.y * h, st.r, 0, 7); cx.fill();
  }
  cx.globalAlpha = n; cx.drawImage(Q.moon, w * 0.8 - Q.moonR * 3, h * 0.2 - Q.moonR * 3);

  /* constellation: lines appear one by one; stars glow brighter near your finger/cursor */
  var pts = QS.constellation, near = (now - Q.pT) < 6000;
  cx.lineWidth = 1; cx.strokeStyle = '#ffe6a3';
  var shown = still ? pts.length : Math.min(pts.length, Math.max(0, (t - 3) / 1.4 + 1));
  for (i = 1; i < pts.length; i++) {
    var seg = Math.max(0, Math.min(1, shown - i));
    if (seg <= 0) continue;
    var ax = pts[i - 1][0] * w, ay = pts[i - 1][1] * h, bx = pts[i][0] * w, by = pts[i][1] * h;
    cx.globalAlpha = n * 0.5; cx.beginPath(); cx.moveTo(ax, ay); cx.lineTo(ax + (bx - ax) * seg, ay + (by - ay) * seg); cx.stroke();
  }
  cx.globalCompositeOperation = 'lighter';
  for (i = 0; i < pts.length; i++) {
    if (i > shown) break;
    var px = pts[i][0] * w, py = pts[i][1] * h, boost = 0;
    if (near) { var dd = Math.hypot(px - Q.px, py - Q.py); boost = Math.max(0, 1 - dd / 130); }
    var size = 16 + boost * 26;
    cx.globalAlpha = n * (0.7 + 0.3 * boost); cx.drawImage(Q.sprite, px - size / 2, py - size / 2, size, size);
  }
  /* lantern light that follows the pointer */
  if (near) {
    cx.globalAlpha = n * 0.5 * Math.max(0, 1 - (now - Q.pT - 3000) / 3000);
    cx.drawImage(Q.sprite, Q.px - 90, Q.py - 90, 180, 180);
  }
  cx.globalCompositeOperation = 'source-over';

  /* an occasional shooting star */
  if (!still) {
    if (!Q.shoot && t > 5 && now > Q.nextShoot) { Q.shoot = { x: w * (0.3 + Math.random() * 0.6), y: h * 0.05, life: 1 }; Q.nextShoot = now + 9000 + Math.random() * 6000; }
    if (Q.shoot) {
      var s = Q.shoot; s.life -= 0.016; s.x -= 7; s.y += 3.5;
      cx.globalAlpha = n * Math.max(0, s.life); cx.strokeStyle = '#fff'; cx.lineWidth = 1.5;
      cx.beginPath(); cx.moveTo(s.x, s.y); cx.lineTo(s.x + 50, s.y - 25); cx.stroke();
      if (s.life <= 0) Q.shoot = null;
    }
  }

  /* hill + little observatory with a warm lit window */
  var u = Math.max(0.6, Math.min(w, h) / 600);
  var hillY = function(x) { return h * 0.86 - Math.sin(x / w * Math.PI) * h * 0.06; };
  cx.globalAlpha = n; cx.fillStyle = '#04070f';
  cx.beginPath(); cx.moveTo(0, h);
  for (var x = 0; x <= w + 20; x += 20) cx.lineTo(x, hillY(x));
  cx.lineTo(w, h); cx.fill();
  var ox = w * 0.16, oy = hillY(ox) + 4, bw = 54 * u;
  cx.fillRect(ox - bw / 2, oy - 34 * u, bw, 34 * u);
  cx.beginPath(); cx.arc(ox, oy - 34 * u, bw / 2, Math.PI, 0); cx.fill();
  cx.fillStyle = '#0a1733'; cx.fillRect(ox - 3 * u, oy - 34 * u - bw / 2, 6 * u, bw / 2);   /* the dome's open slit */
  cx.globalCompositeOperation = 'lighter';
  cx.fillStyle = '#ffcf6b'; cx.globalAlpha = n * (still ? 0.9 : 0.75 + 0.15 * Math.sin(now / 500));
  cx.fillRect(ox - 4 * u, oy - 20 * u, 8 * u, 10 * u);
  cx.globalAlpha = n * 0.5; cx.drawImage(Q.sprite, ox - 28 * u, oy - 40 * u, 56 * u, 56 * u);
  cx.globalCompositeOperation = 'source-over'; cx.globalAlpha = 1;
}


/* =====================================================================
   END OF SCRIPT

   To customize content, edit the CONFIG object at the top.
   For advanced modifications, each section is clearly labeled.
   ===================================================================== */
