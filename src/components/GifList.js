import React, { Component } from 'react'

export default class GifList extends Component {
  render () {
    const result = this.props.gifs.map(data => {
      return <img key={data.id} src={data.embed_url} alt={data.title} />
    })
    return <div>{result}</div>
  }
}
