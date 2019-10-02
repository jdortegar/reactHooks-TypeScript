import React, {FunctionComponent} from 'react'

import {Task} from '../models/task';
import {TaskListItem} from './TaskListItem';

interface Props {
    task: Task[];
    onDelete: (task:Task) => void;
}

export const TaskList: FunctionComponent<Props> = ({task, onDelete})=>(
    <ul>
        {task.map(task=>(
            <TaskListItem task={task} onDelete={onDelete} />
        ))}
    </ul>
)