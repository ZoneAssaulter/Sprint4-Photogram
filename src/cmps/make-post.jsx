import { Component } from 'react'
import { uploadImg } from '../services/cloudinary.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export class MakePost extends Component {
  state = {
    isPostingOn: this.props.isPostingOn,
  }

  togglePosting = () => {
    this.setState.isPostingOn = !this.state.isPostingOn
  }

  render() {
    const { isPostingOn } = this.state

    return (
      isPostingOn && (
        <section className='make-post-container'>
          <div className='overlay' onClick={this.togglePosting()}></div>
          <div className='make-post-content'>
            <h3>Create new post</h3>
            <button className='close-post-btn'>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <form action=''>
              <input type='file' />
              <button
                onClick={(ev) => {
                  ev.preventDefault()
                  uploadImg(ev)
                }}
              >
                Upload
              </button>
            </form>
          </div>
        </section>
      )
    )
  }
}
