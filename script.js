const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#site-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.getElementById('year').textContent=new Date().getFullYear();

// Reveal the contents labels as they scroll into view.
const contentsLinks=document.querySelector('#contents .contents-links');
if(contentsLinks&&'IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  contentsLinks.classList.add('reveal-ready');
  const contentsObserver=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){
      contentsLinks.classList.add('is-visible');
      contentsObserver.disconnect();
    }
  },{threshold:0.12});
  contentsObserver.observe(contentsLinks);
}
