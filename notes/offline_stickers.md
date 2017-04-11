# Loading progress, speeding up
- Load instantly with .peek, "background reload" everything else
  - Using ember concurrency to spin up a loading task
  - Set up the controller to serve up _loadedStickers from .peek before load
    - If the EC task finishes, use the returned value in the view instead
  - Would be better without the CORS issue, no .query and extra filtering

# CORS issue
Disallows easy association, which means the store is not very useful for global state

# When to update
Cycling behaviour

Sticker index always reloads?
And then only store.peek('sticker') and filter that?
  What if someone visits /app/stickers/:id directly?
    Cycling wouldn't work
    So maybe we should reload every time
    Or when reaching start/end off cycle array?

# Where to place the cache/update behaviour
Ember or Service worker?

Ember peek as above OR
Background reload
  That is fiddly due to the CORS issue atm, so can't use currentUser object

Service worker:
"Fastest" strategy
  Always makes a request, not ideal for power
  But it is pretty fast

Separate service?
Which keeps the user state and is updated via peek?

# Comments on sticker index route loading options:
'''javascript
// Used with the explicit query below, if enabled
let uid = this.get('session').currentUser.id;
return RSVP.hash({
    // --- Option 1 ---
    // A downside of this approach is that the data is not linked to the
    // user's model, but makes sideloading explicit.
stickers: this.store.query('sticker', {
              // eslint-disable-next-line camelcase
user_id: uid,
include: 'sender,categories'
}),

// --- Option 2 ---
// A bit "magical", as Ember-data handles loading the async relationship
// via GET at /users/:id/stickers. Note that this method does not allow
// for explicit sideloading atm. The API currently always sideloads
// categories and senders, but if it changes, use the query above.

// The upside is that this allows better linking/caching of a user's
// stickers in the model, which does not happen with store.query.
// stickers: this.get('session').currentUser.get('stickers', {include: 'sender'}),

// --- Categories ---
// It is important to have the categories available, even if the user
// has not been awarded all of them (thus not included in query above)
categories: this.store.findAll('category')
'''
