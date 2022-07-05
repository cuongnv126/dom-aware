# DOM Aware
Easier aware dom depend on chain conditions, then execute target task.

---

## Usage:
For example: you want to run init lightbox, but your data is client rendering
and you aren't sure when should you can call `init`.

Just do like this:
```javascript
new DomAwareBuilder()
    .onDocumentReady()
    .on(() => document.getElementById("content-box") != null)
    .then(() => this.lightbox.init())
    .run();
```

#### Explain:
`DomAwareBuilder` is an object that will keep all your conditions as a chain
then it will try to execute one by one until your all conditions are ready, then the 
task will be executed.

That's mean, flow will be:
- Document ready.
- Document found element with id is `content-box`.
- Then `this.lightbox.init()` will be called.

Actually, you can add more and more conditions by using `on`.

---