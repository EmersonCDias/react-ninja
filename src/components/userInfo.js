import React, { PropTypes } from 'react'

const UserInfo = ({
  username,
  login,
  photo,
  repos,
  followers,
  following,
 }) => (
  <div className='user-info'>
    <img src={photo} />

    <h1 className="username">
      <a href={`https://github.com/${login}`}>{username}</a>
    </h1>

    <ul className='repos-info'>
      <li>{`Repositórios: ${repos}`}</li>
      <li>{`Seguidores: ${followers}`}</li>
      <li>{`Seguindo: ${following}`}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login : PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  })
}

export default UserInfo
