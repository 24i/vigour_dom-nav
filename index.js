'use strict'
exports.up = function navup (target) {
  var prev = target.previousSibling
  if (prev) {
    var rect = target.getBoundingClientRect()
    var top = rect.top
    var center = rect.left + rect.width * 0.5
    var prevrect = prev.getBoundingClientRect()
    var prevleft
    while (prevrect.top >= top) {
      prev = prev.previousSibling
      if (prev) {
        prevrect = prev.getBoundingClientRect()
      } else {
        break
      }
    }
    while (prev) {
      prevrect = prev.getBoundingClientRect()
      prevleft = prevrect.left
      if (prevleft <= center) {
        return prev
      } else {
        target = prev
        prev = prev.previousSibling
      }
    }
    return target
  }
}

exports.down = function navdown (target) {
  var next = target.nextSibling
  if (next) {
    var rect = target.getBoundingClientRect()
    var bottom = rect.bottom
    var center = rect.left + rect.width * 0.5
    var nextrect = next.getBoundingClientRect()
    while (nextrect.bottom <= bottom) {
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
        target = next
        next = next.nextSibling
      }
    }
    return target
  }
}

exports.left = function navleft (target) {
  return target.previousSibling
}

exports.right = function navright (target) {
  return target.nextSibling
}
