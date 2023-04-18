console.log('✨ Celui/celle qui lit ça est trop mignon/ne ✨');
console.log('https://www.youtube.com/watch?v=PjCDSYCpwA4');
console.log('Sources if you wanna check > https://github.com/youpiwaza/cv-portfolio-tout/tree/main/cv/xp');

window.addEventListener('DOMContentLoaded', () => {
  //// Font face observer
  // https://github.com/bramstein/fontfaceobserver
  //                                family name declared in css @import
  const font = new FontFaceObserver('Roboto Condensed');
  font.load().then( () => {
    const bodyHTML = document.getElementsByTagName('body')[0];
    bodyHTML.classList.add('fonts-loaded');
  });

  //// Responsive JS / Prefer use _.throttle if it isn't one shot
  // const browserWidth = window.innerWidth || document.body.clientWidth;

  // style.css > @media screen and (min-width: 960px)
  // (browserWidth < 960)
  //   ? console.log('< 960')
  //   : console.log('> 960');

  // Add target="_blank" to all links, as it's not supported by vanilla markdown
  //                Convert HTMLCollection to Array
  const linksHMTL = Array.from(document.getElementsByTagName('a'));
  for (const linkHTML of linksHMTL) {
    linkHTML.setAttribute('target', '_blank');
    linkHTML.setAttribute('rel', 'noopener');
  }
});
