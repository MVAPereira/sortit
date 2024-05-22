## About the extension

This extension was created based on a ready-made boilerplate template.

It enhances the GitHub pull request review page by providing additional options for displaying files beyond the default alphabetical order. It features a simple popup interface for easy manipulation.


![Application Screenshot](https://github.com/MVAPereira/sortit/blob/main/sortit.png)


Although two buttons "Test first" and "Most changed files" have clear functions, the "Absolutely nothing" button acts by sensing the changes made by the first or second button, rendering the page the initial check.

## Webpack

In this boilerplate, Webpack is configured to take src/index.js as the entry point and output the bundle to content.js. This means that all the JavaScript code written in src/index.js as well as any dependencies imported into that file will be bundled together into a single file called content.js.

## Running locally

Once the “extension” folder is loaded in your c'hrome browser, you need to run one of the following commands so that the changes can be translated to content.js.

- `npm run build-dev`: Builds the extension in development mode, using Webpack's development settings.
- `npm run build-prod`: Builds the extension in production mode, using Webpack's production settings for code optimization and minification.
- `npm run clean`: Removes the content.js file. All the other files of the extension are not removed.
- `npm run watch`: Starts a Webpack watch process, automatically rebuilding the extension whenever changes are made to the source files.



