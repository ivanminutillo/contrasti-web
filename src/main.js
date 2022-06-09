import './styles/main.css';
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect'
import LocomotiveScroll from 'locomotive-scroll';
import { current } from 'tailwindcss/colors';

Alpine.plugin(intersect)

window.Alpine = Alpine;

Alpine.start();

const env = document.querySelector('body').dataset.env;


const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

const ristorante = document.getElementById('ristorante')

  
  scroll.on('scroll', (position) => {
    // Get all current elements : args.currentElements
    if ((position.scroll.y) > ristorante.getBoundingClientRect().top) {
      document.getElementById('header').classList.add('header-obscure');
      
    } else {
      document.getElementById('header').classList.remove('header-obscure');

    }
});
const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

	anchorLinks.forEach((anchorLink) => {
		let hashval = anchorLink.getAttribute('href');
		let target = document.querySelector(hashval);

		anchorLink.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();

			scroll.scrollTo(target);
		});
	});



// Check that service workers are supported
if ('serviceWorker' in navigator && env === 'production') {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}
