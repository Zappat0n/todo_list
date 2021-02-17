const initialView = (projects) => {
  if (projects.length > 0) {
    const tabs = document.querySelectorAll('.project-tabs__item');
    tabs[0].classList.add('active');
    const container = document.querySelectorAll('.project-container');
    container[0].classList.add('active');
  }

  const addPrBtns = document.querySelectorAll('.add-project-btn');
  addPrBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = btn.textContent === 'Add Project' ? 'Close' : 'Add Project';
      btn.nextElementSibling.classList.toggle('open');
    });
  });
};

export default initialView;
