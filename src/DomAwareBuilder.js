const { DomAware } = require("./DomAware");

class DomAwareBuilder {
    conditions = [];
    task = null;

    docCondition = () => {
        return (typeof document != "undefined")
    }

    docTask = () => {
        const domAware = new DomAware(condition, task);
        domAware.run();
    }

    onDocumentReady() {
        return this.on(this.docCondition);
    }

    on(condition) {
        if (Array.isArray(condition)) {
            this.conditions = [...this.conditions, ...condition];
        } else {
            this.conditions.push(condition);
        }
        return this;
    }

    then(task) {
        this.task = task;
        return this;
    }

    run() {
        if (this.conditions.length == 0) {
            this.task();
            return;
        }

        const doCondition = this.conditions.shift();
        const domAware = new DomAware(doCondition, () => {
            const builder = new DomAwareBuilder();
            builder.on(this.conditions).then(this.task);
            builder.run()
        });
        domAware.run();
    }
}

module.exports = {
    DomAwareBuilder
}