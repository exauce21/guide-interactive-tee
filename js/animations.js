(function(){
  'use strict';
  // Reveal animations initialization
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Make hero animate immediately on load (class toggles CSS rules)
  document.documentElement.classList.add('animate-in');

  if(prefersReduced){
    document.querySelectorAll('[data-reveal]').forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function(entries, observer){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal]').forEach(function(el){
    var d = el.getAttribute('data-reveal-delay');
    if(d) el.style.transitionDelay = d;
    io.observe(el);
  });
})();
