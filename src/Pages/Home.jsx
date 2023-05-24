import { useState, useEffect } from "react";
import { fetchUserData } from "../Api/getUserApi";
import Searchbar from "../Components/Searchbar";
import { MagnifyingGlass } from "react-loader-spinner";
import UserCard from "../Components/UserCard";

const Home = () => {
  const [nameInp, setNameInp] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDataCard, setShowDataCard] = useState(false);
  // const [flag, setFlag] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    await fetchUserData(nameInp).then((response) => {
      setUserData(response);
      setLoading(false);
      sessionStorage.setItem(`${nameInp}`, JSON.stringify(response));
    });
  };

  useEffect(() => {
    if (buttonClicked) {
      if (!sessionStorage.getItem(`${nameInp}`)) {
        fetchData();
      } else {
        setUserData(JSON.parse(sessionStorage.getItem(`${nameInp}`)));
      }
      setShowDataCard(true);
      setButtonClicked(false);
    }
  }, [buttonClicked]);

  return (
    <>
      <div className="container">
        <h1>GitHub Profile Viewers</h1>
        <Searchbar
          data={{
            uname: nameInp,
            setUname: setNameInp,
            setBtn: setButtonClicked,
          }}
        />
        {loading && (
          <div id="loader">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        )}
        {!loading && showDataCard && <UserCard data={userData} />}
      </div>
    </>
  );
};

export default Home;
