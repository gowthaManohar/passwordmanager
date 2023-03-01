import './index.css'

const CardItem = props => {
  const {details, onDeleteData, showPassword} = props
  const {username, website, password, id} = details

  const deleteCard = () => {
    onDeleteData(id)
  }

  return (
    <li className="list-item">
      <p className="website-text">{website[0].toUpperCase()}</p>
      <div>
        <p className="card-username">{website}</p>
        <p className="card-username">{username}</p>
        {showPassword ? (
          <p className="card-password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img"
          />
        )}
      </div>
      <button
        onClick={deleteCard}
        data-testid="delete"
        type="button"
        className="del-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="del-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default CardItem
