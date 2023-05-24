import React from 'react'

function UserStats({item}) {
  return (
    <div className="stats" key={item.id}>
    <div>
      <div>
        <div className="stats-name">
          <img className="follow_img" src={item.avatar_url} alt="avatar" />
        </div>
      </div>
      <div>
        <div className="stats-name">@{item.login}</div>
      </div>
      <div>
        <div className="stats-name">
          <a className="profile_link" href={item.html_url} target="_blank">
            View Profile
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserStats
