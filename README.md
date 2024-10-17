# Vue First Steps

## Description

A basic Job listing app that lists jobs from an API, with the ability to add, edit and delete job postings. This app's intent is to learn Vue 3 concepts and transition React learning into another JS Framework.

> [!NOTE]
> Tutorial initiated project, mash-up from Net Ninja and Traversy Media

## Tech Stack

- Vue.js
- Vite for build tool
- Tailwind CSS for styling
- [JSON-server][1] and [Axios][3] for fake API data
- [vue-spinner][2] for loading state of reactive data (Jobs)
- [Vue Toastification][4] for success and error toast components when adding a job

## What I learnt

- Component structure for Vue 2 (Options API) and Vue 3 (Composition API).
- Reactive data in Vue 3 with `ref` and `reactive`, and how it seems to be a simplified version of `useState` in React (no state AND set state).
- `isLoading` state as part of a reactive state for fake API data
- Rendering and Conditional rendering of data from an object or array using `v-for`.
- Use Computed properties to create derived state from existing values.
- Bind basic mouse events using `v-on` or `@`.
- Two-way binding form inputs with `v-model`.
- Basic Vue router setup using `vue-router`. Including dynamic id's for sub pages (jobs/:id).
- Using a API URL proxy for JSON-server in the `vite.config.js`.

## Todo list

- [ ] TBD

[1]: https://www.npmjs.com/package/json-server/v/0.17.4
[2]: https://www.npmjs.com/package/vue-spinner
[3]: https://axios-http.com/docs/intro
[4]: https://vue-toastification.maronato.dev/
