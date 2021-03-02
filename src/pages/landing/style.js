import styled from 'styled-components';

const globalWidth = 60;
const newTaskTitleHeight = 35;

export const Style = styled.div`
    * {
        margin: 0px;
        padding: 0px;
        font-family: 'IBM Plex Sans', sans-serif;
    }
    background-color: #E8F1F2;
    width: 100vw;
    min-height: 100vh;
    .header {
        width: 100%;
        height: 20vh;
        background-color: #13293D;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        .header-wrapper {
            /* background-color: red; */
            width: ${globalWidth}%;
            margin-bottom: 1rem;
            h1 {
                color: #E8F1F2;
                font-weight: 700;
                font-style: normal;
                font-size: 60px;
            }
        }
    }
    .content {
        background-color: #E8F1F2;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .content-wrapper {
            margin-top: 0.3rem;
            /* background-color: red; */
            width: ${globalWidth}%;
            .caption {
                h3 {
                    font-size: 35px;
                    color: #13293D;
                }
            }
            .newtask {
                margin-top: 2rem;
                /* background-color: green; */
                .newtask-title {
                    .newtask-title-wrapper {
                        width: 12%;
                        background-color: #13293D;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                        height: 1em;
                        padding-top: 0.7em;
                        padding-bottom: 0.7em;
                        padding-left: 0em;
                        padding-right: 0em;
                        h5 {
                            color: white;
                            font-size: 15px;
                            font-weight: 600;
                            font-size: 17.5px;
                            /* background-color: red; */
                        }
                    }
                }
                .newtask-content {
                    /* background-color: yellow; */
                    margin-top: 1.5rem;
                    height: 70px;
                    display: flex;
                    flex-direction: row;
                    .separator {
                        width: 2%;
                    }
                    .taskname {
                        width: 66%;
                        /* background-color: purple; */
                        .taskname-title {
                            height: ${newTaskTitleHeight}%;
                            /* background-color: red; */
                            display: flex;
                            align-items: center;
                            h5 {
                                font-weight: 620;
                                font-size: 17.5px;
                                color: #414141;
                            }
                        }
                        .taskname-content {
                            height: ${100-newTaskTitleHeight}%;
                            display: flex;
                            align-items: flex-end;
                            input {
                                height: 2.3rem;
                                border: transparent;
                                border-radius: 3px;
                                width: 100%;
                                padding-left: 1ch;
                            }
                        }
                    }
                    .due-date {
                        width: 17%;
                        /* background-color: grey; */
                        .due-date-title {
                            height: ${newTaskTitleHeight}%;
                            /* background-color: green; */
                            display: flex;
                            align-items: center;
                            h5 {
                                font-weight: 600;
                                font-size: 17.5px;
                                color: #414141;
                            }
                        }
                        .due-date-content {
                            height: ${100-newTaskTitleHeight}%;
                            display: flex;
                            align-items: flex-end;
                            input {
                                height: 2.3rem;
                                border: transparent;
                                border-radius: 3px;
                                width: 100%;
                                padding-left: 1ch;
                            }
                        }
                    }
                    .newtask-button {
                        width: 13%;
                        /* background-color: black; */
                        .newtask-button-title {
                            height: ${newTaskTitleHeight}%;
                        }
                        .newtask-button-content {
                            height: ${100-newTaskTitleHeight}%;
                            display: flex;
                            align-items: flex-end;
                            justify-content: center;
                            button {
                                background-color: white;
                                height: 2.3rem;
                                border: transparent;
                                border-radius: 3px;
                                width: 100%;
                            }
                        }
                    }
                }
            }
            .tasklist {
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 3.2px solid #13293D;
                .tasklist-title {
                    .tasklist-title-wrapper {
                        width: 12%;
                        background-color: #13293D;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 10px;
                        height: 1em;
                        padding-top: 0.7em;
                        padding-bottom: 0.7em;
                        padding-left: 0em;
                        padding-right: 0em;
                        h5 {
                            color: white;
                            font-size: 15px;
                            font-weight: 600;
                            font-size: 17.5px;
                            /* background-color: red; */
                        }
                    }
                }
                .tasklist-search {
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    width: 100%;
                    /* background-color:red; */
                    height: 50px;
                    display: flex;
                    flex-direction: row;
                    .tasklist-search-bar {
                        width: 66%;
                        /* background-color: green; */
                        height: 100%;
                        display: flex;
                        align-items: center;
                        input {
                            height: 2.3rem;
                            border: transparent;
                            border-radius: 3px;
                            width: 100%;
                            padding-left: 1ch;
                        }
                    }
                    .tasklist-search-sort {
                        width: 34%;
                        height: 100%;
                        background-color: yellow;
                    }
                }
                .tasklist-content {
                    .activity {
                        
                    }
                }
            }
        }
    }
`;