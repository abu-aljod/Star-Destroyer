# Star Field

A small React app where stars appear at random positions on the screen every few seconds. Click a star to destroy it.

## How it works

- A new star is created every 2.5 seconds and placed at a random position within the window.
- Each star gets a unique ID, so clicking one removes only that star.
- Each new star receives keyboard focus when it first renders, using `useRef` and `.focus()`.
- Stars show a gold shadow on hover and focus.

## Concepts practiced

- `useState` and `useEffect`, including cleaning up a `setInterval`
- `useRef` for DOM focus and for remembering values between renders
- Rendering lists with `map` and unique `key` props
- Passing functions as props to update parent state
- Making a `div` focusable with `tabIndex`