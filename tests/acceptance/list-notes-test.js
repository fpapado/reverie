import { test } from 'qunit';
import moduleForAcceptance from 'reverie/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list notes');

// test('should redirect to notes route.', function(assert) {
//   visit('/');
//   andThen(function() {
//     assert.equal(currentURL(), '/notes', 'should redirect automatically');
//   });
// });

test('should link to information about the app.', function(assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should list user notes.', function(assert) {
  visit('/notes');
  andThen(function() {
    assert.equal(find('.note').length, 3, 'should see 3 notes');
  });
});

test('should link to adding a note.', function(assert) {
  visit('/notes');
  click('a:contains("Add note")');
  andThen(function() {
    assert.equal(currentURL(), '/notes/new',
      'should navigate to new notes route');
  });
});

test('should show details for a specific note', function(assert) {
  visit('/notes');
  click('a:contains("My first Teambuildilng")');
  andThen(function() {
    assert.equal(currentURL(), '/notes/my-first-teambuilding');
    assert.equal(find('.note-title h2').text(), 'My first Teambuilding',
      'should list note title');
    assert.equal(find('.note-content').length, 1,
      'should show note contents');
  });
});

test('should filter the list of notes by category.', function(assert) {
  visit('/notes');
  fillIn('.list-filter input', 'teambuilding');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function() {
    assert.equal(find('.note').length, 1, 'should show 1 note');
    assert.equal(find('.note .category:contains("Teambuilding")').length, 1,
      'should contain 1 note with category teambuilding');
  });
});
