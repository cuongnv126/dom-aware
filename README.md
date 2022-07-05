# DOM Aware
Easier aware dom depend on chain conditions, then execute target task.

---

## Usage:
For example: you want to run init lightbox, but your data is client rendering
and you don't sure when you can call `init`.

Just do like this:
```javascript
new DomAwareBuilder()
    .onDocumentReady()
    .on(() => document.getElementById("content-box") != null)
    .then(() => this.lightbox.init())
    .run();
```

#### Explain:
`DomAwareBuilder` is an object that will keep on your condition as a chains
then it will try to execute one by one until your condition ready, then the 
task will be executed.

That's mean, flow will be:
- Document ready
- Document found element with id is `content-box`.
- Then `this.lightbox.init()` will be called.

Actually, you can add more and more conditions by using `on`.

---