import React from 'react';
import AddTask from '../components/add-task';
import TaskListIncomplete from '../components/task-list-incomplete';
import TaskListComplete from '../components/task-list-complete';

export default function ContentListView() {
  return (
    <div className="main-tasks-page content list-view">
      <AddTask />
      <div className="groups-wrapper">
        <TaskListIncomplete />
        <TaskListComplete />
      </div>
    </div>
  );
}