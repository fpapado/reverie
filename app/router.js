import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

AppRouter.map(function() {
  this.route('notes', function() {
    this.route('new');
  });
  this.route('about');

  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.route('app', function() {
    this.route('stickers', function() {
      this.route('send');
      this.route('show', { path: '/:sticker_id' });
    });
  });
});

export default AppRouter;
