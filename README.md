# dom-nav
Navigate DOM elements in all directions (←↑→↓)

###Example using [Brisky](https://github.com/vigour-io/brisky):
```js
var elem = {
  class: 'one-of-many',
  on: {
    arrowup (data) {
      let up = nav.up(data.target)
      if (up) { up.focus() }
    },
    arrowdown (data) {
      let down = nav.down(data.target)
      if (down) { down.focus() }
    },
    arrowleft (data) {
      let left = nav.left(data.target)
      if (left) { left.focus() }
    },
    arrowright (data) {
      let right = nav.right(data.target)
      if (right) { right.focus() }
    }
  }
}
```
