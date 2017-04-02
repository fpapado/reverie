# Next Feature:
- UX / Visual

# Visual / UX:
- "You must be logged in to see this page"
  - Unified signup/login?
- "About" with downward arrow + SVG Change

- Offline indicator
  - Ember-flash? Could use for motd too...

- Filter stickers returned from .peek

- Task-button spinner, blue bg, disable while processing

- Color unification
- Font unification

- Replace ad-hoc links with action/task/rev buttons

- Ember-concurrency loading state after few ms
- Signup/in ember-concurrency tasks
  - Ditto for all routes, actually

- Slower input debounce, add it throughout

- Loading hook only after certain ms
  - Or disable it for states that use the deferred pattern?

- log-in task failure message
- Color-code logged-in/out items

- Greeting when user logged in, in splash screen?

- Animations for routes, stickers
- Onboarding
- Add Google Fonts to service worker

# Priority
- Manifest AppCache fix
- General UI/UX, JG
- Note overhaul fields,
  - Note card interface overhaul
  - -category etc.
  - Note card component
  - Import/Export notes
- Sticker export
- "Message of the day"
- Reflection end-of-day functionality
- Admin sticker permissions
- "Timeline view"

# Other visual / UX
- "info" button per screen
- Sticker UX
  - Sticker "received on", perhaps sort functionality?
  - Loading spinner for stickers
  - Error view/state for sticker?

- Rev-input spice
  - Placeholder for rev-input
  - Fancy check marks etc.
  - star for required
  - optional (header|subtitle?)
  - "mandatory=..." option for rev-input to add * to label


# Later:
- SVG def loading proper
- Pagination? (Requires scrivener)
  - At least for the display?
  - Use that pagination in the sticker exploration

- Include "receiver" in sideloading of stickers index?
- Loading categories in sticker index hook. Should we do that?
- Show username for stickers when added to API
- User stickers CORS/OPTIONS redirect bug
  - Happens when using Ember data .get('stickers'), but not .query(...)
- Prefetch strategy for relevant sticker requests?


- Sticker deletion
- "Sent stickers"?

- Stickers: Remove RSVP.hash and pass naked model?
  - Consider sequencing of category > sticker loading for received stickers
- Sticker send validation second pass, e.g. "non empty string", "required"

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
