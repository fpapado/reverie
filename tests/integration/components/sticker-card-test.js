import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sticker-card', 'Integration | Component | sticker card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sticker-card}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''),
    'Sendasticker!ReceiveremailTitle(150charactersmax)SendSticker');
});
