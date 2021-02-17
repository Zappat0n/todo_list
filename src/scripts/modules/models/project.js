class Project {
  constructor(title, description, todos = []) {
    // eslint-disable-next-line no-undef
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.todos = todos;
  }
}

export { Project as default };
