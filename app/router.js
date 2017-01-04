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
  this.route('app', function() {});
});

export default AppRouter;
