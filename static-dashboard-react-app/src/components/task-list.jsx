let taskObjects = [
    { taskName: 'Do Homework', completed: false },
    { taskName: 'Make Dinner', completed: false },
    { taskName: 'Clean Room', completed: true },
    { taskName: 'Drink Water', completed: true },
    { taskName: 'Water Plants', completed: false }
];

export default function TaskList() {
    let completeCount = taskObjects.filter(task => task.completed).length;
    let incompleteCount = taskObjects.length - completeCount;

    let list = taskObjects.map((task, index) =>
        <li key={index}
            style={task.completed ? { color: 'green' } : { color: 'default' }}>{task.taskName} {task.completed ? "\u2705" : "\u274c"}</li>);
    return (
        <div>
            <ul>
                {list}
            </ul>
            <p id="count">Completed tasks: {completeCount} <br></br>
                Incomplete tasks: {incompleteCount}
            </p>
        </div>

    );
}
