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

