const b2bToggle = document.getElementById('useb2b');
const getScore =element=> parseFloat(element.dataset.b2bScore || element.textContent);
const updateAllScores =useB2B=> {
  document.querySelectorAll('.dpc-box').forEach(box => {
    const scoringSpan = box.querySelector('span.scoring');
    if (!scoringSpan) return;
    const score = parseFloat(useB2B ? box.dataset.b2bScore : box.dataset.nonB2bScore);
    scoringSpan.textContent = score.toFixed(2);
  });
}
const sortEverything =()=> {
  document.querySelectorAll('.dpc-box').forEach(box => {
    const scoring = box.querySelector('span.scoring');
    if (!scoring) return;
    const score = parseFloat(scoring.textContent);
    box.style.order = -Math.round(score * 1e3);
  });
}
const handleToggle =()=> { const useB2B = b2bToggle.checked; updateAllScores(useB2B); sortEverything() }
document.addEventListener('DOMContentLoaded', () => {
  // initialise scores
  document.querySelectorAll('.dpc-box').forEach(box => {
    const scoringSpan = box.querySelector('span.scoring');
    if (!scoringSpan) return;
    const currentScore = parseFloat(scoringSpan.textContent);
    box.dataset.b2bScore = currentScore;
    let nonB2BScore = currentScore;
    if (scoringSpan.classList.contains('start-tsd')) nonB2BScore -= 600;
    if (scoringSpan.classList.contains('start-tss')) nonB2BScore -= 400;
    box.dataset.nonB2bScore = nonB2BScore.toFixed(2);
  });
  sortEverything(); // just in case
  b2bToggle.addEventListener('change', handleToggle);
  b2bToggle.disabled = false; // safeguard
});