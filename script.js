(() => {
  const works = {
    oscar: {
      title: 'Oscar Guerreiro',
      subtitle: 'Grade geral',
      pdf: 'https://projetoresgate.github.io/Oscar-Guerreiro/PDF/Grade.pdf'
    }
  };

  const viewer = document.querySelector('#pdf-viewer');
  const viewerTitle = document.querySelector('#viewer-title');
  const downloadLink = document.querySelector('#download-link');
  const viewerSection = document.querySelector('#partituras');

  document.querySelectorAll('[data-work]').forEach((card) => {
    const select = card.querySelector('.select-work');
    if (!select) return;

    select.addEventListener('click', () => {
      const work = works[card.dataset.work];
      if (!work || !viewer || !viewerTitle || !downloadLink) return;

      document.querySelectorAll('[data-work]').forEach((item) => item.classList.remove('is-selected'));
      card.classList.add('is-selected');
      viewer.src = work.pdf;
      viewerTitle.innerHTML = `${work.title} <span>· ${work.subtitle}</span>`;
      downloadLink.href = work.pdf;
      viewerSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
