import { Link } from "react-router-dom";

function UserCard({ data }) {
  return (
    <div className="detailsContainer">
      {data == null ? (
        <div>No user found</div>
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

            <div>
              <Link to="/userdetails" state={{ user: data }}>
                <button id="detailBtn">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
