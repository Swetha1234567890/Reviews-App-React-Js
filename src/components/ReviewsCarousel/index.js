// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickLeftBtn = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onClickRightBtn = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]
    return (
      <div className="background">
        <button
          className="left-btn"
          data-testid="leftArrow"
          type="button"
          onClick={this.onClickLeftBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            className="left-img"
            alt="left arrow"
          />
        </button>
        <div className="middle-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} className="image" alt={username} />
          <p className="user-name">{username}</p>
          <p className="company">{companyName}</p>
          <p className="description">{description}</p>
        </div>
        <button
          className="right-btn"
          data-testid="rightArrow"
          type="button"
          onClick={this.onClickRightBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            className="right-img"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
