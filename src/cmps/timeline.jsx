import { Component } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import profile from '../assets/imgs/test-photos/profile1.jpg'
import { images } from '../data/image-Imports.js'

import { postService } from '../services/post.service'
import { userService } from '../services/user.service'

export class Timeline extends Component {
  state = {
    posts: [],
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    this.loadPosts()
  }

  loadPosts = () => {
    postService.query().then((posts) => {
      this.setState({ posts })
    })
  }

  render() {
    const { posts } = this.state
    const { settings } = this.state
    return (
      <section className='timeline-container'>
        {posts.map((post) => {
          return (
            <div className='post-container' key={post._id}>
              <div className='post-header'>
                <img src={images[post.by.imgUrl]} alt='poster profile' />
                <h2 className='poster-name'>{post.by.fullname}</h2>
              </div>
              <div className='post-content'>
                <Slider {...settings}>
                  {post.imgUrl.map((imgSrc) => {
                    return (
                      <div>
                        <img src={imgSrc} alt='' />
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          )
        })}
      </section>
    )
  }
}
