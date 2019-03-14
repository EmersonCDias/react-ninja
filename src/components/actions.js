import React, { PropTypes } from 'react'

const Actions = ({
  handleRepos,
  handleFav,
}) => (
  <div className='actions'>
    <button onClick={handleRepos}>Ver repositórios</button>
    <button onClick={handleFav}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  handleRepos: PropTypes.func.isRequired,
  handleFav: PropTypes.func.isRequired,
}

export default Actions
