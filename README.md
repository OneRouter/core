# OneRouter Core

Unified imports from React Router to support universal, single-codebase React Native/Expo apps (currently Android, iOS, web, and Electron).

## Aliases

The following are aliases to their corresponding react-router-dom and react-router-native components/hooks/methods:

### `<Router />`

In web, imports `react-router-dom`'s `BrowserRouter`.

In native apps, imports `react-router-native`'s `MemoryRouter` (which is just re-exported from `react-router`).

In Electron apps (which can't support `BrowserRouter`), imports `react-router-web`'s `MemoryRouter` (which is just re-exported from `react-router`).

### `createRouter`

#### (enables data routers for all supported platforms - officially only documented for `react-router-dom`)

In web, imports `react-router-dom`'s `createBrowserRouter`.

In native apps, imports `react-router-native`'s `createMemoryRouter` (which is just re-exported from `react-router`).

In Electron apps (which can't support `createBrowserRouter`), imports `react-router-web`'s `createMemoryRouter` (which is just re-exported from `react-router`).

### useLinkHandler

In web and Electron apps, imports `react-router-dom`'s `useLinkClickHandler`.

In native apps, imports `react-router-native`'s `useLinkPressHandler`.

## `<Link />` Component

A custom hybrid of the `<Link />` components in `react-router-dom` (web, Electron) and `react-router-native` (Android, iOS), with the assistance of the `<A />` component from [@expo/html-elements](https://npmjs.com/package/@expo/html-elements).

### Other Exports

All other components, methods, hooks, and types are re-exported from `react-router` (as you can see they are in the `react-router-dom` and `react-router-native` packages if you examine the source).
