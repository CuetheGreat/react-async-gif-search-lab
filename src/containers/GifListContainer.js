import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

  state = {
    gifs: [],
    search: '',
    apiKey: '?api_key=c1HzG8TKThTLWhT3qQXn9foZq4w51vDu&limit=3',
    endpoint:'https://api.giphy.com/v1/gifs/search'
  }

  handleType = ({ target: { value } }) => {
  this.setState({
    search: value
  })
}

handleSubmit = e => {
  e.preventDefault()
  const query = `&q=${this.state.search}`
  fetch(this.state.endpoint + this.state.apiKey + query)
  .then(res => res.json())
  .then(gif => {
    this.setState({
      gifs: gif.data
    })
  })

}


  render() {
    return (
    <div>
      <GifSearch search={this.state.search} handleType={this.handleType} handleSubmit={this.handleSubmit} />
      <GifList gifs={this.state.gifs} />
      </div>
    )
  }




}
