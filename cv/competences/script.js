console.log('Celui qui lit ça est un neeb :D');
console.log('https://www.youtube.com/watch?v=QwdbFNGCkLw');
console.log('Sources if you wanna check > https://github.com/youpiwaza/simple-type-one-page');

window.addEventListener('DOMContentLoaded', () => {
  const buttonHTML = document.getElementById('staph');

  // Force scroll to bottom function
  const scrollToBottom = () => {
    window.scrollTo(0, 2000);
  };

  // Every 500ms force scroll to bottom
  const idInterval = setInterval(scrollToBottom, 500);


  // When typing end
  const typingEnd = () => {
    // Remove kat gif and fixed stuff
    const fixedHTML = document.getElementById('fixed');
    fixedHTML.style.opacity = 0;

    // Remove typed js cursor
    const typedCursor = document.getElementsByClassName('typed-cursor')[0];
    typedCursor.style.display = 'none';

    // Remove forced scroll
    clearInterval(idInterval);
  };


  // Display original text & hide typed one
  const displayAll = () => {
    const baseStringsHTML = document.getElementById('typed-strings');
    const typedHTML = document.getElementById('typed');

    baseStringsHTML.style.display = 'block';
    typedHTML.style.display = 'none';
  };


  // Handle button click
  const onStaph = () => {
    // / Disable button
    // HTML
    buttonHTML.setAttribute('disabled', 'true');
    buttonHTML.style.opacity = 0;
    // Js
    buttonHTML.removeEventListener('click', onStaph);

    // Remove UI/UX text
    const uiUxHTML = document.getElementById('UIUX');
    uiUxHTML.style.opacity = 0;

    //// Kat magician animation
    // Need to replace video (webm opti) with an image
    const katHTML = document.getElementById('kat');
    const img     = document.createElement('img');
    img.id        = 'kat';
    img.src       = 'assets/images/kat-magician-whoosh.webp';
    img.alt       = 'Chat qui tape au clavier très très vite, c\'est genre la blague c\'est lui qui rédige le texte qui s\'affiche. Ha ha ha'
    img.title     = 'Trop de choses à taper..';

    katHTML.parentNode.replaceChild(img, katHTML);


    // / Manage kat animation depending on browser size
    const browserWidth = window.innerWidth || document.body.clientWidth;

    // style.css > @media screen and (min-width: 960px)
    (browserWidth < 960)
      // Mobile animation
      ? img.classList.add('roll-in-right')
      // Desktop (960+) animation
      : img.classList.add('roll-in-left');

    // Delays for animation
    setTimeout(
      () => {
        // Remove forced scroll
        clearInterval(idInterval);

        // Force text display and hide typing one
        displayAll();

        // Force stop typing not implemented yet on typed.js :'(
        //    https://github.com/mattboldt/typed.js/pull/15
        // ~Typed.stop();
      },
      // style.css > .roll-in-right
      300,
    );

    setTimeout(
      () => {
        // Remove all events stuff
        typingEnd();
      },
      // style.css > .roll-in-right
      1750,
    );
  };


  // Go typing
  new Typed('#typed', {
    onComplete: typingEnd,
    stringsElement: '#typed-strings',
    typeSpeed: 1,
  });


  // Remove force scroll down if user scrolls
  window.addEventListener('wheel',      () => clearInterval(idInterval));
  // Also if he touches (mobile)
  window.addEventListener('touchmove',  () => clearInterval(idInterval));


  // Add staph button behavior
  buttonHTML.addEventListener('click', onStaph);

  //// Font face observer
  // https://github.com/bramstein/fontfaceobserver
  const font = new FontFaceObserver('Roboto Condensed');
  font.load().then(function () {
    // document.documentElement.classList.add('fonts-loaded');
    document.documentElement.style.fontFamily = 'Roboto Condensed';
  });
});
