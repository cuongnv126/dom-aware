class DomAware {
    DELAY = 1000 / 60; // 60fps

    start = 0;
    intervalId = null;

    constructor(condition, task) {
        this.condition = condition;
        this.task = task;
    }

    stopDelayRun() {
        if (!this.intervalId) {
            clearTimeout(this.intervalId);
        }
    }

    delayRun() {
        this.intervalId = setTimeout(() => {
            this.run();
        }, this.DELAY);
    }

    run() {
        this.stopDelayRun();

        if (!this.condition()) {
            this.delayRun();
            return;
        }

        this.actualRun();
    }

    actualRun() {
        this.task();
    }
}

module.exports = {
    DomAware
}