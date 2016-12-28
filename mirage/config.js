export default function() {
  this.urlPrefix = 'http://localhost:5984';
  this.passthrough();

  this.namespace = '/api';
  this.urlPrefix = '';
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server

  this.get('stickers', function() {
    return {
      data: [
        {
          type: 'stickers',
          id: 'make-a-friend',
          attributes: {
            title: 'Make a new friend',
            category: 'Social',
            description: 'Make a new friend, then take a photo and approach an official for confirmation',
            completed: false,
            url: 'https://backpack.openbadges.org/images/backpack-logo-mono.png'
          }
        }
      ]
    };
  });

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
