import { expect } from 'chai';
import { Random } from 'meteor/random';
import { Tasks } from '/imports/api/tasks';

const testData = [
  {
    title: 'Task1',
    hasDescription: true,
    commentsCount: 2,
    color: '#4e42c3',
    status: 'incomplete'
  },
  {
    title: 'Task2',
    customFields: [
      {
        _id: Random.id(),
        value: 'Highest'
      }
    ],
    status: 'incomplete'
  },
  {
    title: 'Task3',
    hasDescription: true,
    filesCount: 3,
    status: 'incomplete'
  },
  {
    title: 'Task4',
    hasDescription: true,
    commentsCount: 3,
    totalTimeTracked: 15,
    status: 'incomplete',
    repeat: {
      interval: 3
    }
  },
  {
    title: 'Task5',
    status: 'completed'
  },
  {
    title: 'Task6',
    status: 'completed',
    commentsCount: 5
  },
  {
    title: 'Task7',
    status: 'completed',
    isPrivate: true
  }
];

describe('test', function () {

  beforeEach(() => {
    Tasks.remove({});
    testData.forEach(task => Tasks.insert(task));
  });

  it('should pass', () => {
    expect('plutio').to.eq('plutio');
  });

  it('can create new task in todo', () => {
    const taskId = Tasks.insert({
      title: "Test Task",
      dueDate: new Date(),
      repeat: {
        interval: 3
      },
      status: 'incomplete',
      customFields: [],
      color: '#4e42c3'
    });

    const [task] = Tasks.find({ _id: taskId }).fetch();

    expect(task.title).to.eq('Test Task');
    expect(task.status).to.eq('incomplete');
    expect(task.isPrivate).to.eq(false);
  });

  it('can get tasks from todo', () => {
    const tasks = Tasks.find({ private: { $ne: true } }).fetch();

    expect(tasks.length).to.not.equal(0);
    expect(tasks).to.be.an('array').that.is.not.empty;
  })

  afterEach(() => {
    Tasks.remove({});
  });
});
