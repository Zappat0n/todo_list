import { v4 as uuidv4 } from 'uuid';

class Project {
  constructor(title, description, todos = []) {
    if (!title || !description) return;
    // eslint-disable-next-line no-undef
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.todos = todos;
  }
}

export { Project as default };
