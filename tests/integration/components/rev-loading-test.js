import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rev-loading', 'Integration | Component | rev loading', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rev-loading}}`);

  assert.equal(this.$().text().trim(), 'Loading...');

  // Template block usage:
  // this.render(hbs`
    // {{#rev-loading}}
      // template block text
    // {{/rev-loading}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
