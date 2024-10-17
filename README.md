# Vue First Steps

## Description

An App to learn Vue 3 concepts and transition React learning into another JS Framework.

> [!NOTE]
> Tutorial initiated project, sourced from Net Ninja and Traversy Media

## Tech Stack

- Vue.js
- Vite for build tool
- Tailwind CSS for styling
- [JSON-server][1] and [Axios][3] for fake API data
- [vue-spinner][2] for loading state of reactive data (Jobs)

## What I learnt

- Component structure for Vue 2 (Options API) and Vue 3 (Composition API).
- Reactive data in Vue 3 with `ref` and `reactive`, and how it seems to be a simplified version of `useState` in React (no state AND set state).
- `isLoading` state as part of a reactive state for fake API data
- Rendering and Conditional rendering of data from an object or array using `v-for`.
- Use Computed properties to create derived state from existing values.
- Bind basic mouse events using `v-on` or `@`.
- Two-way binding form inputs with `v-model`.
- Basic Vue router setup using `vue-router`. Including dynamic id's for sub pages (jobs/:id).

## Todo list

- [ ] TBD

[1]: https://www.npmjs.com/package/json-server/v/0.17.4
[2]: https://www.npmjs.com/package/vue-spinner
[3]: https://axios-http.com/docs/intro
