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
    imgUrl: ["./assets/imgs/test-photos/road-trip1.jpg",
      "./assets/imgs/test-photos/road-trip2.jpg",
      "./assets/imgs/test-photos/road-trip3.jpg"
    ], //Can be an array if decide to support multiple imgs
    createdAt: 123543452,
    by: {
      _id: "u101",
      fullname: "Ulash Ulashi",
      imgUrl: "zero"
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


]

function getPostById(postId) {
  let posts = _loadPostsFromStorage()
  const post = posts.find((post) => post._id === postId)
  return Promise.resolve(post)
}

function query(criteria) {
  let posts = _loadPostsFromStorage()
  if (!posts) posts = gPosts
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