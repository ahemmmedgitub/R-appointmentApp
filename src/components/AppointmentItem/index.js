// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItems = props => {
  const {eachAppontment, onChangeStarImg} = props
  const {id, tittle, date, isFavorite} = eachAppontment

  const convertDate = format(new Date(date), 'dd yyyy, EEEE')

  const changeImg = () => {
    onChangeStarImg(id)
  }

  const starImg = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="main-container">
      <div className="title-star-img-container">
        <p className="tittle">{tittle}</p>
        <button
          type="button"
          className="star-logo"
          onClick={changeImg}
          data-testid="star"
        >
          <img src={starImg} alt="star" />
        </button>
      </div>
      <p className="date">Date: {convertDate}</p>
    </li>
  )
}
export default AppointmentItems
