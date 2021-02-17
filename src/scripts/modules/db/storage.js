import defaultData from './defaultData';

const saveData = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

const setDefaultData = () => {
  localStorage.setItem('projects', defaultData);
  const JSONdata = localStorage.getItem('projects');
  return JSON.parse(JSONdata);
};

const loadData = () => {
  const storage = localStorage.getItem('projects');

  try {
    return storage ? JSON.parse(storage) : setDefaultData();
  } catch (ex) {
    return setDefaultData();
  }
};

export { loadData, saveData };
