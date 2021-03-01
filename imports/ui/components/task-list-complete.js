import React from 'react';
import Indicators from './indicators';

export default function TaskListComplete({ tasks }) {
  return (
    <div className="group-container open">
      <div className="group-head">
        <p>Completed</p>
      </div>
      <div className="group-content">
        {tasks.map((task, i) =>
          <div className="task" key={i}>
            <a className="task-link" href="#">
              <div className="task-link-head">
                <div className="task-checkbox">
                  <label className="checkbox">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-toggle">
                      <i className="checkbox-icon icon-check" />
                    </span>
                  </label>
                </div>
                <div className="task-title">
                  <p>{task.title}</p>
                </div>
              </div>
              <div className="task-link-body">
                <Indicators task={task} />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}