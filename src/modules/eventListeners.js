export function seeMoreBtn() {
    const seeMore = document.getElementById('see-more');
    let isHiddenVisible = false;
  
    seeMore.addEventListener('click', () => {
      const hidden = document.querySelectorAll('.hidden');
      hidden.forEach(individual => {
        individual.classList.toggle('visible');
      });
  
      isHiddenVisible = !isHiddenVisible;
  
      if (isHiddenVisible) {
        seeMore.innerHTML = 'SEE LESS';
      } else {
        seeMore.innerHTML = 'SEE MORE';
      }
    });
  }
  