import React, { useState } from 'react';

export default function AddTask() {
  const [task, setTask] = useState("");
  
  const handleCreateTask = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const body = {
        title: task.trim(),
        dueDate: new Date(),
        repeat: {
          interval: 3
        },
        status: 'incomplete',
        customFields: [],
        color: '#4e42c3',
      }

      Meteor.call('tasks.create', body);
      setTask("");
    }
  }

  return (
    <form className="add-task" noValidate="">
      <div>
        <div className="fieldset add-task-input fieldset-stripped">
          <div className="fieldset-content">
            <label className="fieldset-label">
              <span className="fieldset-label-content has-icon">
                <i className="icon-plus" />
              </span>
              <input
                className=""
                name="title"
                placeholder="Add new task"
                type="text"
                autoComplete="off"
                value={task}
                onKeyDown={handleCreateTask}
                onChange={e => setTask(e.target.value)}
              />
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
