class Project {
  constructor(title, description, todos = []) {
    this.title = title;
    this.description = description;
    this.todos = todos;
  }
}

export { Project as default };
