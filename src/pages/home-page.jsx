import { Component } from 'react'
import { Timeline } from '../cmps/timeline'
import { Suggestions } from '../cmps/suggestions'

export class HomePage extends Component {
  state = {
        
  }

  render() {
    return (
      <section className='home-page'>
        <Timeline />
        <Suggestions />
      </section>
    )
  }
}
