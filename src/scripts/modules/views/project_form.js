const projectForm = () => {
  const getUserInput = (controller) => {
    const formAddProject = document.querySelector('.add-project-form');
    formAddProject.addEventListener('submit', (e) => {
      e.preventDefault();
      controller.createProject(e.target.elements.prTitle.value, e.target.elements.prDesc.value);
    });
  }

  return { getUserInput };
}

export { projectForm as default };
