module.exports = function debounceWithArgs (func, wait, arghasher) {
  var cache = {}

  function call (key, args) {
    clearTimeout(cache[key])
    func.apply(this, args)
  }

  var debounced = function () {
    let key = arghasher(arguments)
    clearTimeout(cache[key])
    cache[key] = setTimeout(call.bind(this, key, arguments), wait)
  }

  return debounced
}
