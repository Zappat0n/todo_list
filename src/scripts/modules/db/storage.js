const saveData = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

const loadData = () => {
  const storage = localStorage.getItem('projects');
  try {
    return storage ? JSON.parse(storage) : [];
  } catch (ex) {
    return [];
  }
};

export { loadData, saveData };
