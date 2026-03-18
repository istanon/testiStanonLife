class LifeManagement {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
        console.log(`Task added: ${task}`);
    }

    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
            console.log(`Task completed: ${this.tasks[index].task}`);
        } else {
            console.log("Task not found.");
        }
    }

    removeTask(index) {
        if (this.tasks[index]) {
            console.log(`Task removed: ${this.tasks[index].task}`);
            this.tasks.splice(index, 1);
        } else {
            console.log("Task not found.");
        }
    }

    listTasks() {
        console.log("Tasks:");
        this.tasks.forEach((taskObj, index) => {
            const status = taskObj.completed ? '✓' : '✗';
            console.log(`${index}: [${status}] ${taskObj.task}`);
        });
    }
}

// Example usage:
const myLifeManager = new LifeManagement();
myLifeManager.addTask("Learn JavaScript");
myLifeManager.addTask("Build a life management app");
myLifeManager.completeTask(0);
myLifeManager.listTasks();