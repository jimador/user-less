# user-less-ui

UI components for the user-less user manager

## UI Components
### Generating new components

To generate a new React component run:

```bash
yarn gen-rc COMPONENT_NAME OPTIONAL_PATH_TO_COMPONENT
```

If no component path is specified, we fall back to `src/lib`

## Storybook

### Generating stories
To generate a story for your React component: 

```bash
yarn gen-story COMPONENT_PATH
```
> Note: The _COMPONENT_PATH_ is the path to the component starting at src/lib. So, for a `FooList` component 
> at `user-less-ui/src/lib/foo-list/FooList.tsx` you would run: 
>
> `yarn gen-story foo-list`

### Running

To start Storybook:

```bash 
yarn start:sb
```
