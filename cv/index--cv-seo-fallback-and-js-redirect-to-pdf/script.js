console.log('script.js');

window.addEventListener('DOMContentLoaded', () => {
  // * Font face observer
  // https://github.com/bramstein/fontfaceobserver
  //                                family name declared in css @import
  const font = new FontFaceObserver('Roboto Condensed');
  font.load().then( () => {
    const bodyHTML = document.getElementsByTagName('body')[0];
    bodyHTML.classList.add('fonts-loaded');
  });

  // * Responsive JS / Prefer use _.throttle if it isn't one shot
  // const browserWidth = window.innerWidth || document.body.clientWidth;

  // style.css > @media screen and (min-width: 960px)
  // (browserWidth < 960)
  //   ? console.log('< 960')
  //   : console.log('> 960');

  setTimeout(() => {
    const bodyHTML = document.getElementsByTagName('body')[0];
    bodyHTML.classList.remove('hidden');

    const htmlHTML = document.getElementsByTagName('html')[0];
    htmlHTML.classList.add('bg');
  }, 500);

  // * Redirections
  const pdfUri = '191112-CV-Maxime-Chevasson-Dev-Web-Fullstack-w-links.pdf';
  
  // Mobile
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // Redirect to online pdf display
    pdfUri = 'http://drive.google.com/viewerng/viewer?url=http://masamune.fr/cv/' + pdfUri;

  }
  // Desktop / pc
  // else {
    // Redirect to pdf directly, it will display in the browser
  // }

  // Web crawlers no redirection, goes to HTML fallback
  if(!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)){
    window.location.replace(pdfUri);
  }
});































//
