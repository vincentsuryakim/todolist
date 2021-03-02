import React from 'react'
import { Style } from './style'

import { Activity } from './../../components/Activity';

export const Landing = () => {
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
                                    <input type="text" placeholder="New Activity" />
                                </div>
                            </div>
                            <div className="separator" />
                            <div className="due-date">
                                <div className="due-date-title">
                                    <h5>Due Date</h5>
                                </div>
                                <div className="due-date-content">
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="separator" />
                            <div className="newtask-button">
                                <div className="newtask-button-title" />
                                <div className="newtask-button-content">
                                    <button>Add Task</button>
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
                                <input type="text" placeholder="Search activities..."/>
                            </div>
                            <div className="tasklist-search-sort">
                                {/* cara bikin slider gt gmn anjg */}
                            </div>
                        </div>
                        <div className="tasklist-content">
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                            <Activity className="activity" name="Activity #1" date="February 25th 2021" />
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}
