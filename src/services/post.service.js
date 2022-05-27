import axios from 'axios'


export const postService = {

}



const posts = [
    {
        _id: "s101",
        txt: "Best trip ever",
        imgUrl: "http://some-img", //Can be an array if decide to support multiple imgs
        createdAt: 123543452,
        by: {
          _id: "u101",
          "fullname": "Ulash Ulashi",
          "imgUrl": "http://some-img"
        },
        loc: {
          "lat": 11.11,
          "lng": 22.22,
          "name": "Tel Aviv"
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
        tags: ["fun", "kids"]
      },
]

// function query(filterBy){
//     return axios.get()
// }