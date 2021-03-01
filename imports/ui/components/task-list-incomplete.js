import React from 'react';

export default function TaskListIncomplete() {
  return (
    <div className="group-container open">
      <div className="group-head">
        <p>Incomplete</p>
      </div>
      <div className="group-content">
        <div className="task">
          <a
            className="task-link has-color-tag"
            href="#"
            style={{ borderColor: '#4e42c3' }}
          >
            <div className="task-link-head">
              <div className="task-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox-toggle">
                    <i className="checkbox-icon icon-check" />
                  </span>
                </label>
              </div>
              <div className="task-title">
                <p>Task1</p>
              </div>
            </div>
            <div className="task-link-body">
              <div className="indicators">
                <span className="icon-indicator">
                  <i className="icon-description" />
                </span>
                <span className="icon-indicator">
                  <i className="icon-chat" />
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="task">
          <a className="task-link" href="#">
            <div className="task-link-head">
              <div className="task-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox-toggle">
                    <i className="checkbox-icon icon-check" />
                  </span>
                </label>
              </div>
              <div className="task-title">
                <p>Task2</p>
              </div>
            </div>
            <div className="task-link-body">
              <div className="custom-fields">
                <div className="custom-field custom-field-single">
                  <p className="color-light has-color-tag">
                    <span className="field-background" />
                    <span className="field-title">Highest</span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="task">
          <a className="task-link" href="#">
            <div className="task-link-head">
              <div className="task-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox-toggle">
                    <i className="checkbox-icon icon-check" />
                  </span>
                </label>
              </div>
              <div className="task-title">
                <p>Task3</p>
              </div>
            </div>
            <div className="task-link-body">
              <div className="indicators">
                <span className="icon-indicator">
                  <i className="icon-description" />
                </span>

                <span className="icon-indicator">
                  <i className="icon-attach" />
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="task">
          <a className="task-link" href="#">
            <div className="task-link-head">
              <div className="task-checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span className="checkbox-toggle">
                    <i className="checkbox-icon icon-check" />
                  </span>
                </label>
              </div>
              <div className="task-title">
                <p>Task4</p>
              </div>
            </div>
            <div className="task-link-body">
              <div className="indicators">
                <span className="icon-indicator">
                  <i className="icon-description" />
                </span>
                <span className="icon-indicator">
                  <i className="icon-chat" />
                </span>
                <span className="icon-indicator">
                  <i className="icon-timer" />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}