import React, { useState, useEffect } from 'react';
import api from './api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await api.get('/');
    setTasks(response.data);
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    const response = await api.post('/', { title: newTask });
    setTasks([...tasks, response.data]);
    setNewTask('');
  };

  const toggleCompletion = async (id, completed) => {
    const response = await api.put(`/${id}`, { completed: !completed });
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    await api.delete(`/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  const startEditing = (task) => {
    setEditingTaskId(task._id);
    setEditingTaskTitle(task.title);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTaskTitle('');
  };

  const updateTask = async (id) => {
    if (!editingTaskTitle.trim()) return;
    const response = await api.put(`/${id}`, { title: editingTaskTitle });
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
    cancelEditing();
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">To-Do List</h1>

      {/* Add Task Section */}
      <div className="row mb-4">
        <div className="col-md-9">
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary w-100" onClick={addTask}>
            Add
          </button>
        </div>
      </div>

      {/* Active Tasks Section */}
      <div>
        <h3 className="mb-3">Active Tasks</h3>
        <ul className="list-group mb-4">
          {tasks.filter(task => !task.completed).map(task => (
            <li
              key={task._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {editingTaskId === task._id ? (
                <div className="d-flex w-100">
                  <input
                    type="text"
                    className="form-control me-2"
                    value={editingTaskTitle}
                    onChange={(e) => setEditingTaskTitle(e.target.value)}
                  />
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => updateTask(task._id)}
                  >
                    Save
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={cancelEditing}>
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span>{task.title}</span>
                  <div>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => startEditing(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => toggleCompletion(task._id, task.completed)}
                    >
                      Complete
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Completed Tasks Section */}
      <div>
        <h3 className="mb-3">Completed Tasks</h3>
        <ul className="list-group">
          {tasks.filter(task => task.completed).map(task => (
            <li
              key={task._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {editingTaskId === task._id ? (
                <div className="d-flex w-100">
                  <input
                    type="text"
                    className="form-control me-2"
                    value={editingTaskTitle}
                    onChange={(e) => setEditingTaskTitle(e.target.value)}
                  />
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={() => updateTask(task._id)}
                  >
                    Save
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={cancelEditing}>
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span>{task.title}</span>
                  <div>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => startEditing(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => toggleCompletion(task._id, task.completed)}
                    >
                      Uncomplete
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
