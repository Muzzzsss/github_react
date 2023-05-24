

const Searchbar = ({data}) => {
    const { uName, setUname, setBtn } = data;
    
  return (
    <div>
       <div className="searchContainer">
    <input value={uName} onChange={((e)=>setUname(e.target.value))} type="text"  id="searchInput" placeholder="Enter GitHub Username" />
    <button onClick={(()=>setBtn(true))} >Search</button>
  </div>
    </div>
  )
}

export default Searchbar
