import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CardItem from './components/CardItem'
import './App.css'

class App extends Component {
  state = {
    userData: [],
    website: '',
    username: '',
    password: '',
    showPassword: false,
    searchIp: '',
  }

  onDeleteData = id => {
    const {userData} = this.state
    const onFilter = userData.filter(each => each.id !== id)
    this.setState({userData: onFilter})
  }

  onShowingSearch = event => {
    this.setState({searchIp: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {username, website, password} = this.state

    const user = {username, password, website, id: uuidv4()}

    this.setState(prev => ({
      userData: [...prev.userData, user],
      website: '',
      username: '',
      password: '',
    }))
  }

  onShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onCheck = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  render() {
    const {
      username,
      password,
      website,
      userData,
      showPassword,
      searchIp,
    } = this.state

    const searchResultsArray = userData.filter(each =>
      each.website.toLowerCase().includes(searchIp),
    )

    return (
      <div className="app-container">
        <img
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="app-logo"
        />
        <div className="password-manager-container">
          <div className="form-container">
            <h1 className="form-head">Add New Password</h1>
            <form onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="ip-img"
                  alt="website"
                />
                <input
                  onChange={this.onChangeWebsite}
                  placeholder="Enter Website"
                  className="form-ip"
                  value={website}
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="ip-img"
                  alt="username"
                />
                <input
                  onChange={this.onChangeUsername}
                  placeholder="Enter Username"
                  className="form-ip"
                  value={username}
                />
              </div>

              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="ip-img"
                  alt="password"
                />
                <input
                  onChange={this.onChangePassword}
                  placeholder="Enter Password"
                  className="form-ip"
                  value={password}
                  type="password"
                />
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password-manager-img"
              alt="password manager"
            />
          </div>
        </div>

        <div className="password-page-container">
          <div className="page-head-container">
            <h1 className="count">
              Your Passwords
              <p className="span-count">{searchResultsArray.length}</p>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-img"
                alt="search"
              />
              <input
                onChange={this.onShowingSearch}
                placeholder="search"
                type="search"
                className="search-ip"
              />
            </div>
          </div>
          <hr />

          <div className="checkbox-container">
            <input onClick={this.onCheck} id="checkbox" type="checkbox" />
            <label htmlFor="checkbox" className="label">
              Show Passwords
            </label>
          </div>

          {searchResultsArray.length > 0 ? (
            <ul className="cards-container">
              {searchResultsArray.map(each => (
                <CardItem
                  onDeleteData={this.onDeleteData}
                  details={each}
                  key={each.id}
                  showPassword={showPassword}
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
      </div>
    )
  }
}

export default App
