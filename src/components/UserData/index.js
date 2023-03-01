import CardItem from '../CardItem'

import './index.css'

const UserData = props => {
  const {userData, showPassword, onShowPassword, filterData, searchData} = props
  const listCount = userData.length > 0 ? userData.length : 0

  const show = () => {
    onShowPassword()
  }

  const searchip = event => {
    searchData(event.target.value)
  }

  return (
    <div className="password-page-container">
      <div className="page-head-container">
        <h1 className="count">
          Your Passwords <span className="span-count">{listCount}</span>
        </h1>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            className="search-img"
            alt="search"
          />
          <input
            onChange={searchip}
            placeholder="search"
            type="search"
            className="search-ip"
          />
        </div>
      </div>
      <hr />

      <div className="checkbox-container">
        <input onClick={show} id="checkbox" type="checkbox" />
        <label htmlFor="checkbox" className="label">
          Show Passwords
        </label>
      </div>

      {listCount > 0 ? (
        <ul className="cards-container">
          {userData.map(each => (
            <CardItem
              filterData={filterData}
              showpass={showPassword}
              details={each}
              key={each.id}
            />
          ))}
        </ul>
      ) : (
        <div className="no-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            className="no-password-img"
            alt="no passwords"
          />
          <p className="no-passwords">No Passwords</p>
        </div>
      )}
    </div>
  )
}

export default UserData
