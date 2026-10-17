const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#site-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.getElementById('year').textContent=new Date().getFullYear();

// Reveal the contents labels as they scroll into view.
const contentsLinks=document.querySelector('#contents .contents-links');
if(contentsLinks&&'IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  contentsLinks.classList.add('reveal-ready');
  const contentsObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){
      contentsLinks.classList.toggle('is-visible',entry.isIntersecting);
    }
  },{threshold:0.2,rootMargin:'0px 0px -12% 0px'});
  contentsObserver.observe(contentsLinks);
}


// Reveal the About Me scrapbook pieces and paragraphs as they enter the screen.
const aboutPieces=document.querySelectorAll('#about .about-heading-decoration, #about .about-text');
if(aboutPieces.length&&'IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const aboutObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting));
 },{threshold:.18});
 aboutPieces.forEach(el=>{el.classList.add('about-reveal-ready');aboutObserver.observe(el)});
}
