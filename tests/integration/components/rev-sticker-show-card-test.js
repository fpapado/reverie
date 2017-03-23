import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rev-sticker-show-card', 'Integration | Component | rev sticker show card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rev-sticker-show-card}}`);

  assert.equal(this.$().text().trim(), '―');

  // Template block usage:
  // this.render(hbs`
    // {{#rev-sticker-show-card}}
      // template block text
    // {{/rev-sticker-show-card}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
