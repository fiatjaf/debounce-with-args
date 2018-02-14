The normal `debounce` approach is to swallow all calls to the debounced function into the same pool of calls. `debounced-with-args` allows you to create multiple pools for different arguments. This is achieved through a function you provide that is used to "hash" the arguments, so this library can know when two calls can be debounced and when they don't.

```js
const debounceWithArgs = require('debounce-with-args')

let debounced = debounceWithArgs(function sumAndNotify (tag, a, b) {
  notifySomewhere(tag, a + b)
}, 2000, args => args[0])

debounced('a', 1, 1)
debounced('b', 3, 3)
debounced('a', 1, 2)
debounced('a', 1, 2)
debounced('b', 7, 7)
```

The above code will cause `notifySomewhere()` to be called twice, one time with `'a', 3` and the other with `'b', 14`.
