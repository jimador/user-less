# user-less-ui

UI components for the user-less user manager

## UI Components
### Generating new components
To generate a new React component run:
```bash
yarn nx generate @nrwl/react:component \
--name=REACT_COMPONENT_NAME \
--export \
--project=user-less-ui \
--style=none
```
## Storybook

### Generating stories
To generate a story for your React component: 

```bash
yarn nx g @nrwl/react:component-story --project=user-less-ui --componentPath=COMPONENT_PATH
```
> Note: The _COMPONENT_PATH_ is the path to the component starting at src/lib. So, for a `FooList` component 
> at `user-less-ui/src/lib/foo-list/FooList.tsx` you would run 
>
> `yarn nx g @nrwl/react:component-story --project=user-less-ui --componentPath=foo-list`

### Running

To start Storybook:

```bash 
yarn nx run user-less-ui:storybook
```
