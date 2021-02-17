import '../scss/styles.scss';
import { loadData } from './modules/db/storage';
// eslint-disable-next-line import/no-cycle
import projectView from './modules/views/project';
// eslint-disable-next-line import/no-cycle
import renderProjects from './modules/views/renderProjects';
// eslint-disable-next-line import/no-cycle
import projectController from './modules/controller/project';
import initialView from './modules/views/initial-view';

const projects = loadData();
projectView().getUserInput(projectController(projects));
renderProjects(projects);
initialView(projects);

export default projects;
