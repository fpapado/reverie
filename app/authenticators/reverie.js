import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';

// Our application uses JWT in the OAuth grant standard
// Thus, we configure the endpoint for retrieving the token
export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${config.DS.host}/${config.DS.namespace}/token`
});
