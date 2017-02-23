# Next Feature:
- Sticker send category, optional title
  - Must query /categories first
- Better stickers (with API changes)
  - Sticker component
    - Add functionality / images
    - Style stickers
  - Make sticker message a text field
  - Add sticker category power-select
  - Remove RSVP.hash and pass naked model?
  - Make message = title, text field

# Visual / UX:
- Slower debounce, add it throughout
- Task-button spinner, blue bg, disable while processing
- Model hook loading spinner

- Rev-input spice
  - Placeholder for rev-input
  - Fancy check marks etc.
  - star for required
  - optional (header|subtitle?)

- Log-in, log-out spot on menu
- Signup/in ember-concurrency tasks

# Later:
- Handle offline case for stickers? (Do we need to change anything?)

- Note Card component
  - Note single view
  - Note edit view
- Add "info" to routes, menu button
- "Guest" author for notes

# Style pass:
- Design stickers
- Ask JG for input

# Documentation:
- Screenshots for Github
- Revamp about page

# Even Later:
- Some kind of notification system?
- PouchDB Import/Export
    (https://github.com/nolanlawson/pouchdb-replication-stream)
    (https://github.com/nolanlawson/pouchdb-load)
- Notes about import/export

## If we use sync:
- CouchDB/PouchDB auth scheme
  (https://github.com/nolanlawson/pouchdb-authentication)
- User Auth for production
  (also, related back-end work; one db per user or a single one with something like https://github.com/cloudant-labs/envoy)
- PouchDB conflict resolution

- Markdown parsing
- Adding images to notes
- (Not necessary) Smoke-and-mirrors list rendering
