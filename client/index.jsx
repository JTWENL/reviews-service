import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getReviews from './network.js';
import ReviewList from './components/ReviewList.jsx';
import ReviewTable from './components/ReviewTable.jsx';
import Modal from './components/Modal.jsx';
import {makeReviewsModal} from './components/ReviewsModal.jsx';
import './style/reviewBar.scss';

class ReviewComponent extends React.Component {
  constructor(props) {
    super(props);
    let { getReviews } = props;
    this.getReviews = getReviews;
    this.state = {};
  }

  componentDidMount() {
    this.getReviews()
      .then(reviews => {
        this.setState({ reviews });
        makeReviewsModal(reviews, 'reviews-button');
      });
  }

  render() {
    let { reviews } = this.state;
    let content = () => (
      <>
        <ReviewTable key={'rt-' + reviews.length} reviews={reviews} />
                {/* TODO add the modal back in*/}
        {/* <div onClick={toggle}>HHAAAUUUNNGHH???</div> */}
        
      </>
    );
    return (
      <div>
        {reviews
          ? content()
          : null}
      </div>
    );
  }
}

ReactDOM.render(<ReviewComponent getReviews={getReviews} />, document.getElementById('reviews'));