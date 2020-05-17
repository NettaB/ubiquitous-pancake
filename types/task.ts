export interface Task {
  id: string;
  description: string;
  assignee: string | null;
  isDone: boolean;
  dueDate?: Date;
}

// [
//   {
//     id: '01',
//     description: 'Foo bar baz bam',
//     assignee: null,
//     isDone: false,
//   },

//   {
//     id: '02',
//     description: 'Lorem Ipsum',
//     assignee: null,
//     isDone: false,
//   },

//   {
//     id: '03',
//     description: 'A red sun rises',
//     assignee: null,
//     isDone: false,
//   },
// ];
