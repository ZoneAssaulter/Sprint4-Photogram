const story = {
  _id: "s101",
  txt: "Best trip ever",
  imgUrl:
   ["https://silentbeacon.com/wp-content/uploads/2020/08/Road-Trip-Safety-Tips-with-car-panic-button.jpg",
   "https://merriam-webster.com/assets/ld/word_of_the_day/images/2262/large.jpg",
   "https://st2.depositphotos.com/2931363/5383/i/450/depositphotos_53837931-stock-photo-people-enjoying-road-trip.jpg"
  ], 
//Can be an array if decide to support multiple imgs
  createdAt: 123543452,
  by: {
    _id: "u101",
    fullname: "Ulash Ulashi",
    imgUrl: "http://some-img"
  },
  loc: {
    lat: 11.11,
    lng: 22.22,
    name: "Tel Aviv"
  },
  comments: [
    {
      id: "c1001",
      by: {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img"
      },
      txt: "good one!",
      likedBy: [ // Optional
        {
          _id: "u105",
          fullname: "Bob",
          imgUrl: "http://some-img"
        }
      ]
    },
    {
      id: "c1002",
      by: {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img"
      },
      txt: "not good!",
    }
  ],
  likedBy: [
    {
      _id: "u105",
      fullname: "Bob",
      imgUrl: "http://some-img"
    },
    {
      _id: "u106",
      fullname: "Dob",
      imgUrl: "http://some-img"
    }
  ],
  tags:["fun", "kids"]
}
const user = {
  "_id": "u101",
  "username": "Muko",
  "password": "mukmuk",
  "fullname": "Muki Muka",
  "imgUrl": "http://some-img",
  "createdAt": 123543452,
  "following": [
    {
      "_id": "u106",
      "fullname": "Dob",
      "imgUrl": "http://some-img"
    }
  ],
  "followers": [
    {
      "_id": "u105",
      "fullname": "Bob",
      "imgUrl": "http://some-img"
    }
  ],
  "savedStoryIds": ["s104", "s111", "s123"]
}