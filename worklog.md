Sticker todo:
1) Fix sticker sending

2) Factor functionality out into /stickers and /stickers/send routes
  Convert sticker creation actions into tasks

3) Add loading indicator for model hook, since it is a slower compound promise.
  Alternatively, do loading on a per-sticker basis, using the LinkedIn method.

4) Add info button

Up next:
Signup/in ember-concurrency tasks

Validations for forms (ember-changesets)

Note single view
Note edit view

CouchDB/PouchDB auth scheme
  (https://github.com/nolanlawson/pouchdb-authentication)
User Auth for production
  (also, related back-end work; one db per user or a single one with something like https://github.com/cloudant-labs/envoy)
PouchDB conflict resolution

PouchDB Import/Export (https://github.com/nolanlawson/pouchdb-replication-stream)
(https://github.com/nolanlawson/pouchdb-load)

Later:
Markdown parsing
Adding images to notes
REST API for sharing, stickers etc.
Awarding stickers to other users
Smoke-and-mirrors list rendering
