import axios from 'axios'
import { storageService } from './async-storage.service'


export const postService = {
  getPostById,
  query,
  


}

const STORAGE_KEY = 'postDB'


let gPosts = [
  {
    _id: "s101",
    txt: "Best trip ever",
    imgUrl: ["https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368782/Photogram/road-trip1_d47zpr.jpg",
      "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/road-trip2_qdawyz.jpg",
      "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/road-trip3_y9oaom.webp"
    ], //Can be an array if decide to support multiple imgs
    createdAt: 123543452,
    by: {
      _id: "u101",
      fullname: "Ulash Ulashi",
      imgUrl: "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/profile1_z2kqdq.avif"
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
    tags: ["fun", "kids"]
  },
  {
    _id: "s101",
    txt: "Best trip ever",
    imgUrl: ["https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368782/Photogram/road-trip1_d47zpr.jpg",
      "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/road-trip2_qdawyz.jpg",
      "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/road-trip3_y9oaom.webp"
    ], //Can be an array if decide to support multiple imgs
    createdAt: 123543452,
    by: {
      _id: "u101",
      fullname: "Ulash Ulashi",
      imgUrl: "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/profile1_z2kqdq.avif"
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
    tags: ["fun", "kids"]
  },
  {
    _id: "s101",
    txt: "Best trip ever",
    imgUrl: ["https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368782/Photogram/road-trip1_d47zpr.jpg",
      "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/road-trip2_qdawyz.jpg",
      "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/road-trip3_y9oaom.webp"
    ], //Can be an array if decide to support multiple imgs
    createdAt: 123543452,
    by: {
      _id: "u101",
      fullname: "Ulash Ulashi",
      imgUrl: "https://res.cloudinary.com/dwvtbmnak/image/upload/v1654368781/Photogram/profile1_z2kqdq.avif"
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
    tags: ["fun", "kids"]
  }


]

function getPostById(postId) {
  let posts = _loadPostsFromStorage()
  const post = posts.find((post) => post._id === postId)
  return Promise.resolve(post)
}

function query(criteria) {
  let posts = _loadPostsFromStorage()
  if (!posts) posts = gPosts
  _savePostsToStorage(posts)
  if (!criteria) return Promise.resolve(posts)
  // APPLY SEARCH FUNCTION LATER
  // const filteredPosts = _getFilteredPosts(posts, criteria)
}



function _loadPostsFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY)
}

function _savePostsToStorage(posts) {
  storageService.saveToStorage(STORAGE_KEY, posts)
}