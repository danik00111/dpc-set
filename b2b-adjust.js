const onb2btoggle =(b2bon)=> {
  document.querySelectorAll('span.scoring').forEach(scorespan => {
    let score = parseFloat(scorespan.dataset.b2bScore);
    if (scorespan.classList.contains('start-tsd')) score -= b2bon ? 0 : 600;
    if (scorespan.classList.contains('start-tss')) score -= b2bon ? 0 : 400;
    scorespan.innerText = score.toFixed(2);
  })
  dpcboxreorder();
}
const dpcboxreorder =()=> {
  const scrollY = window.scrollY;
  requestAnimationFrame(() => {
    document.querySelectorAll('.dpc-box').forEach(box => {
      const scoring = box.querySelector('span.scoring');
      if (!scoring) return;
      const pcpercent = box.querySelector('span.pcpercent');
      const score = parseFloat(scoring.innerText) * parseFloat(pcpercent.innerText);
      // this is actually score*100 but it does not matter here
      box.style.order = -Math.round(score * 1e3);
    });
    window.scrollTo(0, scrollY);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('span.scoring').forEach(scorespan => { scorespan.dataset.b2bScore = parseFloat(scorespan.innerText).toFixed(2); });
  const b2btoggle = document.getElementById('useb2b');
  onb2btoggle(b2btoggle.checked);
  b2btoggle.addEventListener('change', e=>onb2btoggle(e.target.checked));
  b2btoggle.disabled = false; // safeguard
});