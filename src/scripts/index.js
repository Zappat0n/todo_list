import '../scss/styles.scss';
import { loadData } from './modules/db/storage';
// eslint-disable-next-line import/no-cycle
import initialView from './modules/views/initial-view';

const projects = loadData();
initialView(projects);

export default projects;
