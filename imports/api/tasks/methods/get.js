// TODO: tasks get method
import { Tasks } from '../model/schema';

if (Meteor.isServer) {
  Meteor.publish('tasks.get', function () {
    return Tasks.find({ private: { $ne: true } });
  })
}