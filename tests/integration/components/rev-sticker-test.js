import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rev-sticker', 'Integration | Component | rev sticker', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rev-sticker}}`);

  assert.equal(this.$().text().trim(), 'by username');

  // Template block usage:
  // this.render(hbs`
    // {{#rev-sticker}}
      // template block text
    // {{/rev-sticker}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block textby username');
});
