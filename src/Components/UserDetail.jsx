import UserStats from "./UserStats";

const UserDetail = ({ data,followersData,clickHandler,button,followingData }) => {

  return (
    <>
      <div className="detailsContainer">
        {data == null ? (
          <div>
           
            <div>No user found</div>
          </div>
        ) : (
          <div className="profile">
            <div className="profile-image" id="image">
              <img className="profile-image-icon" src={data.avatar_url} />
            </div>
            <div className="profile-details">
              <h2 className="name">{data.name}</h2>
              <p className="username">@{data.login}</p>
              {/* <p className="bio">{data.bio ? data.bio : `This account don't have bio`}</p> */}
              <div className="stats">
                <div>
                  <div className="stats-name">Public Repos</div>
                  <div className="stats-name">{data.public_repos}</div>
                </div>
                <div>
                  <div className="stats-name">Followers</div>
                  <div className="stats-name">{data.followers}</div>
                </div>
                <div>
                  <div className="stats-name">Following</div>
                  <div className="stats-name">{data.following}</div>
                </div>
              </div>
              <div className="media-container">
                <div className="media">
                  <p>
                    <span className="media-icon">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    <span className="media-name">
                      {data.location ? data.location : "Not Available"}
                    </span>
                  </p>
                  <p>
                    <span className="media-icon">
                      <i className="fas fa-link" />
                    </span>
                    <span className="media-name">
                      {data.blog ? data.blog : "Not Available"}
                    </span>
                  </p>
                  <p>
                    <span className="media-icon">
                      <i className="fab fa-twitter" />
                    </span>
                    <span className="media-name">
                      {data.twitter_username
                        ? data.twitter_username
                        : "Not Available"}
                    </span>
                  </p>
                  <p>
                    <span className="media-icon">
                      <i className="fas fa-building" />
                    </span>
                    <span className="media-name">
                      {data.company ? data.company : "Not Available"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* ========================================= */}

      <div id="btn-row" className="detailsContainer" >
        <button  className={button === 'followers' ? 'active' : ''}  onClick={()=>clickHandler('followers')}>Followers</button>
        <button  className={button === 'followings' ? 'active' : ''} onClick={()=>clickHandler('followings')}>Followings</button>
        
      </div>



      <div className="detailsContainer" style={{overflowY:"scroll",height:"300px"}}>
  
{button === 'followers' ? (
        followersData === null ? (
          <div>No Followers</div>
        ) : (
          followersData.map((item) => <UserStats item={item} key={item.id} />)
        )
      ) : button === 'followings' ? (
        followingData === null ? (
          <div>No Followings</div>
        ) : (
          followingData.map((item) => <UserStats item={item} key={item.id} />)
        )
      ) : null}
      </div>
    </>
  );
};

export default UserDetail;
