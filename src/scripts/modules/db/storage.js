const loadData = () => {
  const storage = localStorage.getItem('projects');
  try {
    return storage ? JSON.parse(storage) : [];
  } catch (ex) {
    return [];
  }
};

const saveData = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

export { loadData, saveData };
