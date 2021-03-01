import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '/imports/api/tasks';
import AddTask from '../components/add-task';
import TaskListIncomplete from '../components/task-list-incomplete';
import TaskListComplete from '../components/task-list-complete';

const ContentListView = ({ completedTasks, incompleteTasks }) => {

  return (
    <div className="main-tasks-page content list-view">
      <AddTask />
      <div className="groups-wrapper">
        <TaskListIncomplete tasks={incompleteTasks} />
        <TaskListComplete tasks={completedTasks} />
      </div>
    </div>
  );
}

export default withTracker(() => {
  Meteor.subscribe('tasks.get');

  return {
    completedTasks: Tasks.find({ status: 'completed' }).fetch(),
    incompleteTasks: Tasks.find({ status: 'incomplete' }).fetch(),
  };
})(ContentListView);