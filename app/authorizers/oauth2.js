import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

// The Authorizer takes the data obtained from the Authenticator (JWT Token)
// and uses it when communicating with a secured resource.
export default OAuth2Bearer.extend();
