import React, { Component } from 'react';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      category: this.props.categories[0], // Initialize with the first category
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { text, category } = this.state;

    if (text.trim() === '') {
      return; // Don't add empty tasks
    }

    this.props.onTaskFormSubmit({ text, category });

    // Reset form fields
    this.setState({ text: '', category: this.props.categories[0] });
  };

  render() {
    return (
      <form className="new-task-form" onSubmit={this.handleSubmit}>
        <label>
          Details
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleInputChange}
            placeholder="Enter task details"
          />
        </label>
        <label>
          Category
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleInputChange}
          >
            {this.props.categories.slice(1).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    );
  }
}

export default NewTaskForm;
