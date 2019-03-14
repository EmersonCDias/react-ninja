import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContainer = ({
  userInfo,
  repos,
  starred,
  handleSearch,
  handleRepos,
  handleFav,
}) => (
  <div className="app">
    <Search
      handleSearch={handleSearch}
    />
    
    {userInfo && <UserInfo {...userInfo} />} 
    
    {userInfo &&
      <Actions
        handleRepos={handleRepos}
        handleFav={handleFav}
      />
    } 

    {repos.length > 0 && 
      <Repos
        className='repos'
        title='Repositórios'
        repos={repos}
      />
    }
    
    {starred.length > 0 && 
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    }
  </div>
)

AppContainer.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  starred: PropTypes.arrayOf(PropTypes.object).isRequired,
}

AppContainer.defaultProps = {
  userInfo: null,
}

export default AppContainer
