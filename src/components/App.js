import React, { Component } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASKS,
      categories: CATEGORIES,
      selectedCategory: 'All',
    };
  }

  handleTaskDelete = (taskId) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks: updatedTasks });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleTaskFormSubmit = (task) => {
    const newId = this.state.tasks.length + 1;
    task.id = newId;
    const updatedTasks = [...this.state.tasks, task];
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter
          categories={this.state.categories}
          selectedCategory={this.state.selectedCategory}
          onSelectCategory={this.handleCategorySelect}
        />
        <NewTaskForm
          categories={this.state.categories.slice(1)} // Exclude "All" category
          onTaskFormSubmit={this.handleTaskFormSubmit}
        />
        <TaskList
          tasks={this.state.tasks}
          selectedCategory={this.state.selectedCategory}
          onDeleteTask={this.handleTaskDelete}
        />
      </div>
    );
  }
}

export default App;
