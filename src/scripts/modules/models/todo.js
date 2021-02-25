import { v4 as uuidv4 } from 'uuid';

class todo {
  constructor(title, description, dueDate, priority) {
    if (!title || !description || !dueDate || !priority) return;
    // eslint-disable-next-line no-undef
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export { todo as default };
