angular.module('starter.services', [])

.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = 
  [
    {
      "_id": "5503de836d9e094487020147",
      "title": "jklajf;adjfa",
      "date": "1200",
      "image": "../img/photo_placeholder.png"
    },
    {
      "_id": "5503e5646bf1fdab0f1c55aa",
      "title": "TESTTEDD",
      "date": "Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504a3528f1dfdc79cafa614",
      "speaker": "asdfasdfasdf",
      "title": "asdfasdf",
      "location": "",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504b2b041244d7fe6972844",
      "speaker": "",
      "title": "asdfasdfdf",
      "location": "",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504ce7a565192da2c5a500d",
      "title": "Event Title",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504e197672b550421c6cd17",
      "speaker": "",
      "title": "test",
      "location": "",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504e19c672b550421c6cd18",
      "speaker": "",
      "title": "test",
      "location": "",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504e1b3672b550421c6cd19",
      "speaker": "",
      "title": "test",
      "location": "",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504e2cc0403a8a235a249cc",
      "speaker": "",
      "title": "test",
      "location": "",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    },
    {
      "_id": "5504e2defb8b9b0c6a85a791",
      "speaker": "tea",
      "title": "teatatewta",
      "location": "fda",
      "image": "../img/photo_placeholder.png",
      "__v": 0
    }
  ];

  return {
    all: function() {
      return events;
    },
    remove: function(event) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
        }
      }
      return null;
    }
  };
});
