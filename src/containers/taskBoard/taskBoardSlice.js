import { createSlice } from "@reduxjs/toolkit";

const labelOptions = {
    work: {
        color: "#de1738",
        count: 0,
    },
    personal: {
        color: "#89CFF0",
        count: 0,
    },
    fitness: {
        color: "#76ff7a",
        count: 0,
    },
    metime: {
        color: "#7442c8",
        count: 0,
    },
    explore: {
        color: "#efc0fe",
        count: 0,
    },
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        taskArray: [],
        labels: labelOptions,
        soundscape: {
            track: "none",
            isPlaying: false,
            volume: 0.6,
        },
        meta: {
            globalKey: 0,
            completedTaskStartIndex: -1,
            focussedTaskIndex: -1,
            showCompletedTasks: true,
            completedTasksCount: 0,
            totalTaskListTime: 0,
            remainingTaskListTime: 0,
        },
    },
    reducers: {
        create: (tasks, { payload }) => {
            tasks.taskArray.unshift(payload);
            if (tasks.meta.completedTaskStartIndex != -1) ++tasks.meta.completedTaskStartIndex;
            tasks.meta.totalTaskListTime += payload.time;
            tasks.meta.remainingTaskListTime += payload.time;
        },
        remove: (tasks, { payload }) => {
            
            tasks.taskArray = tasks.taskArray.filter((i) => {
                if (i.id !== payload) return true;
                else {

                    if (!i.isCompleted) {
                        if (tasks.meta.completedTaskStartIndex != -1) --tasks.meta.completedTaskStartIndex;
                    } else {
                        tasks.meta.completedTasksCount--;
                        if (tasks.meta.completedTaskStartIndex == tasks.taskArray.length - 1) {
                            tasks.meta.completedTaskStartIndex = -1;
                        }
                    }

                    if (!i.isCompleted) {
                        tasks.meta.remainingTaskListTime -= i.remainingTime;
                    }
                    tasks.meta.totalTaskListTime -= i.time;

                    return false;
                }
            });
        },
        updateTaskContent: ({ taskArray }, { payload }) => {
            taskArray.forEach((i) => {
                if (i.id === payload.id) {
                    i.content = payload.updatedTaskContent;
                }
            });
        },
        updateTaskLabel: ({ taskArray }, { payload }) => {
            taskArray.forEach((i) => {
                if (i.id === payload.id) {
                    i.label = payload.label;
                }
            });
        },
        updateTaskTime: (tasks, { payload }) => {
            tasks.taskArray.forEach((i) => {
                if (i.id === payload.id) {
                    tasks.meta.totalTaskListTime -= i.time;
                    tasks.meta.remainingTaskListTime -= i.remainingTime;
                    tasks.meta.totalTaskListTime += payload.updatedTime * 60;
                    tasks.meta.remainingTaskListTime += payload.updatedTime * 60;
                    i.remainingTime = payload.updatedTime * 60;
                    i.time = payload.updatedTime * 60;
                }
            });
        },
        updateTaskTimeByVal: (tasks, { payload }) => {

            if (tasks.taskArray[payload.focussedTaskIndex].remainingTime +payload.val*60 < 0) {
                tasks.meta.remainingTaskListTime -= tasks.taskArray[payload.focussedTaskIndex].remainingTime;
                tasks.taskArray[payload.focussedTaskIndex].remainingTime = 0;
            }else{
                tasks.meta.remainingTaskListTime -= tasks.taskArray[payload.focussedTaskIndex].remainingTime;
                tasks.taskArray[payload.focussedTaskIndex].remainingTime += payload.val * 60;
                tasks.meta.remainingTaskListTime += tasks.taskArray[payload.focussedTaskIndex].remainingTime;
            }
            
            if (tasks.taskArray[payload.focussedTaskIndex].time +payload.val*60< 0) {
                tasks.meta.totalTaskListTime -= tasks.taskArray[payload.focussedTaskIndex].time;
                tasks.taskArray[payload.focussedTaskIndex].time = 0;
            }else{
                tasks.meta.totalTaskListTime -= tasks.taskArray[payload.focussedTaskIndex].time;
                tasks.taskArray[payload.focussedTaskIndex].time += payload.val * 60;
                tasks.meta.totalTaskListTime += tasks.taskArray[payload.focussedTaskIndex].time;
            }
            
        },
        updateOrder: (tasks, { payload }) => {
            tasks.taskArray = payload;
        },

        focusOnTask: (tasks, { payload }) => {
            tasks.meta.focussedTaskIndex = payload;
        },
        resetFocussedTask: (tasks) => {
            tasks.meta.focussedTaskIndex = -1;
        },
        tick: (tasks, { payload }) => {
            --tasks.taskArray[payload].remainingTime;
            --tasks.meta.remainingTaskListTime;
        },
        resetTaskTimer: (tasks, { payload }) => {
            tasks.taskArray[payload].isRunning = false;

            tasks.meta.remainingTaskListTime-=tasks.taskArray[payload].remainingTime;
            tasks.meta.remainingTaskListTime+=tasks.taskArray[payload].time;

            tasks.taskArray[payload].remainingTime = tasks.taskArray[payload].time;
        },
        toggleIsRunning: (tasks, { payload }) => {
            if (payload.val !== undefined) tasks.taskArray[payload.idx].isRunning = payload.val;
            else tasks.taskArray[payload.idx].isRunning = !tasks.taskArray[payload.idx].isRunning;
        },
        toggleShowCompletedTasks: (tasks) => {
            tasks.meta.showCompletedTasks = !tasks.meta.showCompletedTasks;
        },
        toggleIsCompleted: (tasks, { payload }) => {
            tasks.taskArray.forEach((i) => {
                if (i.id === payload) {

                    if(i.isCompleted){
                        tasks.meta.remainingTaskListTime+=i.remainingTime;
                        --tasks.meta.completedTasksCount
                    }else{
                        tasks.meta.remainingTaskListTime-=i.remainingTime;
                        ++tasks.meta.completedTasksCount
                    }

                    i.isCompleted = !i.isCompleted;
                }
            });
        },
        clearCompletedTasks: (tasks) => {
            if (tasks.meta.completedTaskStartIndex !== -1) {

                for(let i=tasks.meta.completedTaskStartIndex;i<tasks.taskArray.length;i++){
                    if(tasks.taskArray[i].label!==null)
                    tasks.labels[tasks.taskArray[i].label].count--;

                    tasks.meta.totalTaskListTime-=tasks.taskArray[i].time;
                }

                tasks.taskArray.length = tasks.meta.completedTaskStartIndex;
                tasks.meta.completedTaskStartIndex = -1;
                tasks.meta.completedTasksCount = 0;
            }
        },
        updateLabelCount: (tasks, { payload }) => {
            if (payload.oldLabel !== null) tasks.labels[payload.oldLabel].count--;
            if (payload.newLabel !== null) tasks.labels[payload.newLabel].count++;
        },
        incrementGlobalKey: ({ meta }) => {
            ++meta.globalKey;
        },
        rearrange: (tasks, { payload }) => {
            let id = payload.id;

            if (payload.markedAsComplete) {
                if (tasks.meta.completedTaskStartIndex === -1) {
                    tasks.meta.completedTaskStartIndex = tasks.taskArray.length - 1;
                    let found = false;
                    for (let i = 0; i < tasks.taskArray.length - 1; i++) {
                        if (found) {
                            let temp = tasks.taskArray[i];
                            tasks.taskArray[i] = tasks.taskArray[i + 1];
                            tasks.taskArray[i + 1] = temp;
                        } else if (tasks.taskArray[i].id === id) {
                            found = true;
                            let temp = tasks.taskArray[i];
                            tasks.taskArray[i] = tasks.taskArray[i + 1];
                            tasks.taskArray[i + 1] = temp;
                        }
                    }
                    tasks.meta.completedTaskStartIndex = tasks.taskArray.length - 1;
                } else {
                    let task, idx;
                    for (let i = 0; i < tasks.taskArray.length; i++) {
                        if (tasks.taskArray[i].id === id) {
                            task = tasks.taskArray[i];
                            idx = i;
                            break;
                        }
                    }
                    let pos = -1;
                    for (let i = tasks.meta.completedTaskStartIndex; i < tasks.taskArray.length; i++) {
                        if (tasks.taskArray[i].globalKey > task.globalKey) continue;
                        else {
                            pos = i;
                            break;
                        }
                    }

                    if (pos === -1) {
                        tasks.taskArray.push(task);
                    } else {
                        tasks.taskArray.splice(pos, 0, task);
                    }
                    tasks.taskArray.splice(idx, 1);
                    tasks.meta.completedTaskStartIndex -= 1;
                }
            } else {
                if (tasks.meta.completedTaskStartIndex == 0) {
                    let task, idx;
                    for (let i = tasks.meta.completedTaskStartIndex; i < tasks.taskArray.length; i++) {
                        if (tasks.taskArray[i].id === id) {
                            task = tasks.taskArray[i];
                            idx = i;
                            break;
                        }
                    }

                    tasks.taskArray.splice(idx, 1);
                    tasks.taskArray.unshift(task);
                    tasks.meta.completedTaskStartIndex = 1;
                } else {
                    let task, idx;
                    for (let i = tasks.meta.completedTaskStartIndex; i < tasks.taskArray.length; i++) {
                        if (tasks.taskArray[i].id === id) {
                            task = tasks.taskArray[i];
                            idx = i;
                            break;
                        }
                    }

                    let start = tasks.meta.completedTaskStartIndex - 1;
                    let pos = -1;
                    for (let i = start; i >= 0; i--) {
                        if (tasks.taskArray[i].globalKey < task.globalKey) continue;
                        else {
                            pos = i;
                            break;
                        }
                    }

                    tasks.taskArray.splice(idx, 1);
                    if (pos === -1) {
                        tasks.taskArray.unshift(task);
                    } else {
                        pos++;
                        tasks.taskArray.splice(pos, 0, task);
                    }
                    tasks.meta.completedTaskStartIndex += 1;
                }

                if (tasks.meta.completedTaskStartIndex == tasks.taskArray.length) {
                    tasks.meta.completedTaskStartIndex = -1;
                }
            }
        },
        changeSoundscapeTrack: ({ soundscape }, { payload }) => {
            soundscape.track = payload;
        },
        toggleSoundscapeState: ({ soundscape }, { payload }) => {
            soundscape.isPlaying = payload;
        },
        updateSoundscapeVolume: ({ soundscape }, { payload }) => {
            soundscape.volume = payload;
        },
    },
});

export const {
    create,
    remove,
    updateTaskContent,
    updateTaskLabel,
    updateTaskTime,
    updateTaskTimeByVal,
    focusOnTask,
    resetFocussedTask,
    tick,
    resetTaskTimer,
    toggleIsRunning,
    toggleShowCompletedTasks,
    toggleIsCompleted,
    clearCompletedTasks,
    updateOrder,
    updateLabelCount,
    incrementGlobalKey,
    rearrange,
    changeSoundscapeTrack,
    toggleSoundscapeState,
    updateSoundscapeVolume,
} = tasksSlice.actions;

export default tasksSlice.reducer;
