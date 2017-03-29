# Next Feature:
- Prefetch strategy for relevant sticker requests?
- "Offline" service https://tsubik.com/blog/make-your-emberjs-web-app-more-progressive-part-3-offline-data/
  - Use offline service to prevent sticker sending

# Priority
- Sticker export
- Note overhaul fields,
  - Note card interface overhaul
  - Import/Export notes
- "Message of the day"
- Reflection end-of-day functionality
- Admin sticker permissions
- General UI/UX, JG
- "Timeline view"

# Visual / UX:
- Animations for routes, stickers
- Model hook loading spinner
- Menus
  - Flexbox
  - Color-code logged-in/out items
  - Log-in, log-out spot on menu
    - log-in task failure message
  - Sticker send-received submenu
- Color unification

- "mandatory=..." option for rev-input to add * to label
- Slower debounce, add it throughout
- Task-button spinner, blue bg, disable while processing
- Replace ad-hoc links with action/task/rev buttons

- Sticker UX
  - Sticker "received on", perhaps sort functionality?
  - Loading spinner for stickers
  - Error view/state for sticker?

- Rev-input spice
  - Placeholder for rev-input
  - Fancy check marks etc.
  - star for required
  - optional (header|subtitle?)

- Signup/in ember-concurrency tasks
  - Ditto for all routes, actually

# Later:
- Include "receiver" in sideloading of stickers index?
- Loading categories in sticker index hook. Should we do that?
- Show username for stickers when added to API
- User stickers CORS/OPTIONS redirect bug
  - Happens when using Ember data .get('stickers'), but not .query(...)


- Sticker deletion
- "Sent stickers"?

- Stickers: Remove RSVP.hash and pass naked model?
  - Consider sequencing of category > sticker loading for received stickers
- Sticker send validation second pass, e.g. "non empty string", "required"

- Pagination? (Requires scrivener)

- Note Card component
  - Note single view
  - Note edit view
- Add "info" to routes, menu button
- "Guest" author for notes
- Rename 'user-validations' to 'validations' if need be


# Style pass:
- Design stickers
- Ask JG for input

# Documentation:
- Screenshots for Github
- Revamp about page

# Even Later:
- Power-select border style
- PouchDB logging off
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
