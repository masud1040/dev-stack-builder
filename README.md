# Dev Stack Builder Website

## About The Project

Dev Stack Builder is a simple website where users can explore different technologies and create their own development stack.

Users can see technology details, add technologies to their stack, remove them, and clear the whole stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON
- Vite

## Features

1. Users can explore different development technologies.
2. Users can add technologies to their own stack.
3. Users can remove one technology or remove all technologies from the stack.
4. Toast messages are shown when adding or removing technologies.

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

**Answer:**

JSX is a JavaScript syntax. It lets us write code like HTML inside JavaScript. It makes creating the UI easier in React.

---

### 2. What is the difference between props and state?

**Answer:**

Props are used to send data from a parent component to a child component.

State is the data of a component that can be changed when needed.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**

`useState` is used to store and change data in a component.

In this project, I used `useState` to manage the technology data and the selected technology stack.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:**

`useEffect` is used to do some work outside the normal rendering of a component.

But I did not use `useEffect` to load the JSON data in this project. I used Promise, `useState`, and `Suspense`.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**

React needs a unique key to know each item separately. It helps React update the items correctly when something changes.

---

### 6. What is conditional rendering? Show one place you used it.

**Answer:**

Conditional rendering means showing different UI based on a condition.

I used it in the Your Stack section. When the stack is empty, it shows an empty message.

```tsx
{stack.length === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
