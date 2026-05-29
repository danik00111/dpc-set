/* joke filename. detects if header is scrolled outside the view */
const header = document.querySelector('header');
const body = document.body;

if (header) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) body.classList.remove('scrolled-past-header');
      else body.classList.add('scrolled-past-header');
    },
    { rootMargin: '0px', threshold: 0, /* triggers when even 1px is out */ }
  );
  observer.observe(header);
}