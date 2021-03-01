// TODO: create task method
import { Tasks } from '../model/schema';
import { check } from 'meteor/check';

Meteor.methods({
  'tasks.create'(body) {
    const { title, dueDate, repeat, status, customFields, color } = body;
    
    check(title, String);
    check(dueDate, Date);
    check(repeat, Object);
    check(status, String);
    check(customFields, Array);
    check(color, String);

    Tasks.insert({
      title: title,
      dueDate: Date(dueDate),
      repeat: repeat,
      status: status,
      customFields: customFields,
      color: color,
    });
  },
});