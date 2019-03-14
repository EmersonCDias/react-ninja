import React, { Component } from 'react'
import AppContent from './components/appContent'
import ajax from '@fdaciuk/ajax'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    }
  }

  handleSearch = e => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then(result => {
          this.setState({
            userInfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
          })
        })
    }
  }

  getRepos = type => {
    ajax().get(`https://api.github.com/users/fdaciuk/${type}`)
      .then(result => {
        this.setState({
          repos: result.map(item => {
            return {
              name: item.name,
              link: item.html_url,
            }
          })
        })
      })
  }
  
  render () {
    const {
      userInfo, 
      repos,
      starred,
    } = this.state

    return <AppContent
      userInfo={userInfo}
      repos={repos}
      starred={starred}
      handleSearch={e => this.handleSearch(e)}
      handleRepos={() => this.getRepos('repos')}
      handleFav={() => this.getRepos('starred')}
    />
  }
}
