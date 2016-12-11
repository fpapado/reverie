# reverie

WIP

Reverie is a Progressive Web App for taking notes.
Try using the "Add to homescreen" feature on your smartphone!

Reverie uses a Service Worker to cache the assets and app shell, and stores notes in a local pouchDB, which is persisted between sessions.
Since even IndexedDB/WebSQL browser data can be cleared, the app can sync notes to a remote CouchDB.
The rest of the logic and UI is handled by Ember.

In the future, I plan to add a simple import/export feature, so you can backup your data however you prefer.
Adding CouchDB authentication is also in the works.

## Thanks / Learn More
Many thanks to
[HospitalRun](https://github.com/HospitalRun/hospitalrun-frontend) for a great
demonstration of the offline-first concepts.

If you want to learn more about Progressive Webapps, [here is an intro by
Google](https://developers.google.com/web/progressive-web-apps/).

Finally, there are a few ways of implementing Service Workers in Ember.
I went with
[broccoli-serviceworker](https://github.com/jkleinsc/broccoli-serviceworker),
but ther might be more powerful tools in the future.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd reverie`
* `npm install`
* `bower install`

## Sync and production
For development, you should follow the [PouchDB setup
guide](https://pouchdb.com/guides/).
The remote db is configured in `config/environment.js` for each environment.
By default, it is empty for production and `/offline` at the default CouchDB
port for development.

For production, you need to set up your own CouchDB deployment (either
self-managed or, say, Cloudant).
You can then simply change the relevant field in `config/environment.js`.
Don't forget to add CORS headers!

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
