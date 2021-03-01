import React from 'react';

export default function TaskListComplete() {
  return (
    <div className="group-container open">
      <div className="group-head">
        <p>Completed</p>
      </div>
      <div className="group-content">
        <div className="task">
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
                <p>Task5</p>
              </div>
            </div>
          </a>
        </div>
        <div className="task">
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
                <p>Task6</p>
              </div>
            </div>
            <div className="task-link-body">
              <div className="indicators">
                <span className="icon-indicator">
                  <i className="icon-chat" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}