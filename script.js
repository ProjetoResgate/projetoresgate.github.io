const works = {
  oscar: {
    title: 'Oscar Guerreiro',
    subtitle: 'Grade geral',
    pdf: 'https://github.com/ProjetoResgate/Oscar-Guerreiro/blob/main/PDF/Grade.pdf?raw=1'
  }
};

const viewer = document.querySelector('#pdf-viewer');
const viewerTitle = document.querySelector('#viewer-title');
const downloadLink = document.querySelector('#download-link');
const cards = document.querySelectorAll('[data-work]');

cards.forEach((card) => {
  const select = card.querySelector('.select-work');
  select.addEventListener('click', () => {
    const work = works[card.dataset.work];
    if (!work) return;

    cards.forEach((item) => item.classList.remove('is-selected'));
    card.classList.add('is-selected');
    viewer.src = work.pdf;
    viewerTitle.innerHTML = `${work.title} <span>· ${work.subtitle}</span>`;
    downloadLink.href = work.pdf;
    document.querySelector('#partituras').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
