// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItems from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    intialList: [],
    starItems: false,
    inputTitle: '',
    inputDate: '',
  }

  onChangeStarImg = id => {
    this.setState(prevState => ({
      intialList: prevState.intialList.map(eachApp => {
        if (id === eachApp.id) {
          return {...eachApp, isFavorite: !eachApp.isFavorite}
        }
        return eachApp
      }),
    }))
  }

  changeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  changeDate = event => {
    this.setState({inputDate: event.target.value})
  }

  onAddAppointment = event => {
    const {inputTitle, inputDate} = this.state

    event.preventDefault()

    const tittle = inputTitle
    const date = inputDate

    const newAppointment = {
      id: uuidv4(),
      tittle,
      date,
      isFavorite: false,
    }

    this.setState(prevState => ({
      intialList: [...prevState.intialList, newAppointment],
      inputTitle: '',
      inputDate: '',
    }))
  }

  onFilteredStarImg = () => {
    const {starItems, intialList} = this.state

    this.setState(prevState => ({starItems: !prevState.starItems}))

    const filteredData = intialList.filter(
      eachCart => eachCart.isFavorite === true,
    )

    if (starItems === false) {
      this.setState({intialList: intialList})
    }
    return this.setState({intialList: filteredData})
  }

  render() {
    const {intialList} = this.state

    return (
      <div className="bg-container">
        <div className="text-container">
          <div className="form-img-container">
            <form className="form-container">
              <h1 className="add-appointment-heading">Add Appointment</h1>
              <label className="title-element" htmlFor="title">
                Title
              </label>
              <input
                onChange={this.changeTitle}
                className="input-elements"
                id="title"
                type="text"
              />
              <label className="title-element" htmlFor="date">
                DATE
              </label>
              <input
                onChange={this.changeDate}
                className="input-elements"
                id="date"
                type="date"
              />
              <button
                className="add-btn"
                type="submit"
                onClick={this.onAddAppointment}
              >
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-img"
            />
          </div>
          <hr className="separator" />
          <div className="appointment-star-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button
              className="star-btn"
              type="button"
              onClick={this.onFilteredStarImg}
            >
              Starred
            </button>
          </div>
          <ul className="ul-elements">
            {intialList.map(eachAppontment => (
              <AppointmentItems
                eachAppontment={eachAppontment}
                key={eachAppontment.id}
                onChangeStarImg={this.onChangeStarImg}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
