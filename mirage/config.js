export default function() {
  // Local CouchDB passthrough
  this.urlPrefix = 'http://localhost:5984';
  this.passthrough();

  // Local Phoenix server passthrough
  this.urlPrefix = 'http://localhost:4000';
  this.passthrough();

  this.namespace = '/api';
  this.urlPrefix = '';
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server

  this.get('/notes', function() {
    return {
      data: [
        {
          type: 'notes',
          id: 'my-first-teambuilding',
          attributes: {
            title: 'My first Teambuilding',
            author: 'Fotis Papado',
            category: 'teambuilding',
            content: 'OMG Amazing'
          }
        },
        {
          type: 'notes',
          id: 'my-first-commitee-work',
          attributes: {
            title: 'My first Committee Work',
            author: 'Fotis Papado',
            category: 'committeework',
            content: 'Be the change you want to see in the world.'
          }
        },
        {
          type: 'notes',
          id: 'party-time',
          attributes: {
            title: 'Party time',
            author: 'Fotis Papado',
            category: 'evening',
            content: 'Whoo, partay!'
          }
        }
      ]
    };
  });
}
