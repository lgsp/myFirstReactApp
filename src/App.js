import React from 'react';
import TaskList from './TaskList.js'

function App() {
  const tasks = [
    {id: 0, description: 'do this', done: false},
    {id: 1, description: 'do that', done: false},
  ];
  return (
    <div>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
