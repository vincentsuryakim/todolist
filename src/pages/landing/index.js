import React, { useState, useEffect } from "react";
import { Style } from "./style";
import ReactSlider from "react-slider";

import { Activity } from "./../../components/Activity";

export const Landing = () => {
  const [data, setData] = useState(() => {
      return localStorage.getItem('todos') != null ? JSON.parse(localStorage.getItem('todos')) : []
  });
  
  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(data))
  }, [data])

  const [newTaskName, setNewTaskName] = useState("");
  const [newDueDate, setDueDate] = useState("");

  const [searchedName, setSearchedName] = useState("");

  const [sortDate, setSortDate] = useState(false);

  const AddTask = () => {
    if (newTaskName.length !== 0 && newDueDate.length !== 0) {
      let temp = [
        ...data,
        {
          name: newTaskName,
          date: newDueDate,
        },
      ];

      if (sortDate) {
        temp.sort((a, b) =>
          a.date > b.date
            ? 1
            : a.date === b.date
            ? a.name > b.name
              ? 1
              : -1
            : -1
        );
      } else {
        temp.sort((a, b) =>
          a.name > b.name
            ? 1
            : a.name === b.name
            ? a.date > b.date
              ? 1
              : -1
            : -1
        );
      }

      setData(temp);
    }
  };

  const sortTask = () => {
    let temp = data;
    if (!sortDate) {
      temp.sort((a, b) =>
        a.date > b.date
          ? 1
          : a.date === b.date
          ? a.name > b.name
            ? 1
            : -1
          : -1
      );
    } else {
      temp.sort((a, b) =>
        a.name > b.name
          ? 1
          : a.name === b.name
          ? a.date > b.date
            ? 1
            : -1
          : -1
      );
    }
    setData(temp);
    setSortDate(!sortDate);
  };

  return (
    <Style>
      <div className="header">
        <div className="header-wrapper">
          <h1>Todo List</h1>
        </div>
      </div>
      <div className="content">
        <div className="content-wrapper">
          <div className="caption">
            <h3>Organize your task better</h3>
          </div>
          <div className="newtask">
            <div className="newtask-title">
              <div className="newtask-title-wrapper">
                <h5>New Task</h5>
              </div>
            </div>
            <div className="newtask-content">
              <div className="taskname">
                <div className="taskname-title">
                  <h5>Task Name</h5>
                </div>
                <div className="taskname-content">
                  <input
                    type="text"
                    placeholder="New Activity"
                    onChange={(e) => setNewTaskName(e.target.value)}
                  />
                </div>
              </div>
              <div className="separator" />
              <div className="due-date">
                <div className="due-date-title">
                  <h5>Due Date</h5>
                </div>
                <div className="due-date-content">
                  <input
                    type="date"
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="separator" />
              <div className="newtask-button">
                <div className="newtask-button-title" />
                <div className="newtask-button-content">
                  <button onClick={() => AddTask()}>Add Task</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tasklist">
            <div className="tasklist-title">
              <div className="tasklist-title-wrapper">
                <h5>Task List</h5>
              </div>
            </div>
            <div className="tasklist-search">
              <div className="tasklist-search-bar">
                <input
                  type="text"
                  placeholder="Search activities..."
                  onChange={(e) => setSearchedName(e.target.value)}
                />
              </div>
              <div className="tasklist-search-sort">
                <h6>Sort By</h6>
                <ReactSlider
                  className="horizontal-slider"
                  min={0}
                  max={1}
                  thumbClassName="example-thumb"
                  onChange={() => sortTask()}
                  renderThumb={(props, state) => (
                    <div {...props}>
                      {state.valueNow === 0 ? "Name" : "Date"}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="tasklist-content">
              {data &&
                // eslint-disable-next-line
                data.map((content, idx) => {
                  if (content.name.includes(searchedName)) {
                    return (
                      <Activity
                        name={content.name}
                        date={content.date}
                        index={idx}
                        data={data}
                        setData={setData}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
