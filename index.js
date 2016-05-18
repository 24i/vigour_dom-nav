'use strict'
exports.up = function navup (target) {
  console.log('wtf?')
  var prev = target.previousSibling
  if (prev) {
    var rect = target.getBoundingClientRect()
    var top = rect.top
    var center = rect.left + rect.width * 0.5
    var prevrect = prev.getBoundingClientRect()
    var fallback
    while (prevrect.top + prevrect.height >= top) {
      console.log('ok?', prev)
      prev = prev.previousSibling
      if (prev) {
        prevrect = prev.getBoundingClientRect()
      } else {
        break
      }
    }
    while (prev) {
      prevrect = prev.getBoundingClientRect()
      if (prevrect.left <= center) {
        console.log('hur', prevrect.left, center)
        return prev
      } else {
        fallback = prev
        prev = prev.previousSibling
      }
    }
    return fallback
  }
}

exports.down = function navdown (target) {
  var next = target.nextSibling
  if (next) {
    var rect = target.getBoundingClientRect()
    var bottom = rect.bottom
    var center = rect.left + rect.width * 0.5
    var nextrect = next.getBoundingClientRect()
    var fallback
    while (nextrect.bottom - nextrect.height <= bottom) {
      next = next.nextSibling
      if (next) {
        nextrect = next.getBoundingClientRect()
      } else {
        break
      }
    }
    while (next) {
      nextrect = next.getBoundingClientRect()
      if (nextrect.right >= center) {
        return next
      } else {
        fallback = next
        next = next.nextSibling
      }
    }
    return fallback
  }
}

exports.left = function navleft (target) {
  return target.previousSibling
}

exports.right = function navright (target) {
  return target.nextSibling
}
