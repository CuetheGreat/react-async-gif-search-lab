import React, { Component } from 'react'

export default class GifSearch extends Component {

  render () {
    return (
      <form className='search_form' onSubmit={this.props.handleSubmit}>
        <input
          type='search'
          value={ this.props.search}
          onChange={this.props.handleType}
        />
        <input type='submit' />
      </form>
    )
  }
}
