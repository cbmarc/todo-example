## TODO example

This app is an example of a simple TODO application done with React + TypeScript. Without redux.

## To run the app

- I'm using node version v16.14.0, as stated in .nvmrc.
- I'm using yarn.
- `yarn install`
- `yarn start`

And that's it :)

The app for now is a WIP, meant to be a coding example.

## Contents

### StitchesJS

The app uses stitchesJS to create styled components. I like stitchesJS a lot. I haven't defined any theme, just using it in a very straightforward way for this little example.

### Todo list

- There is a todo list
- The user can add items by typing and hitting enter or clicking the "Add" button.
- The user can delete items by clicking on the "Trash" icon on the left.
- If the user tries to delete an item, a modal asks if the item should be deleted or not.
- The modal is done entirely in react and styled components. A very simple one.
- The user con toggle an item between done and in pending by clicking on the text in the list.
