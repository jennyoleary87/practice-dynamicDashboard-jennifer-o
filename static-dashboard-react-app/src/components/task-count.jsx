
export default function TaskCount(taskObjects = []) {
    let completeCount = taskObjects.filter(task => task.completed).length;
    let incompleteCount = taskObjects.length - completeCount;
    return (
        <div>
            <h3>Task Count:</h3>
            <p>Completed tasks: {completeCount}
                Incomplete tasks: {incompleteCount}
            </p>
        </div>
    );
}