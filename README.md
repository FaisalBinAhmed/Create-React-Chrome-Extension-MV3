# Create React Chrome Extension MV3

This is a Chrome Extension boilerplate with React and hot reload support out of the box.
The extension is targeted for manifest version 3. This should make it futureproof for newer extension development. ParcelJS is used for bundling the app as extension.

The extension includes:

- React based Action Page (popup that appears when user clicks on the extension icon from broswer toolbar)
- React based Options UI (Extension settings page)
- Typescript-native
- Hot reload
- And many more..

To start, clone the project and run `npm install` to install all dependencies. Finally, run `npm start` to run the app. This command should build/bundle everything in the `dist` folder.

From Chrome/Microsoft Edge, go to Extensions page, turn on Developer Mode, and then load unpacked. Select the dist folder as the source of the extension, this should install the app in the browser.

Try editing the `ActionPage.tsx` and `Settings.tsx` files and see the changes reflect automatically.

Feedback/Discussions and pull requests are welcome. :)
