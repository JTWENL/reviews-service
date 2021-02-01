import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx';
import ReviewList from './ReviewList.jsx';

const ReviewsModal = ({reviews}) => {
  let [show, setShow] = useState(false);
  let toggle = () => setShow(!show);
  return (
    <div onClick={toggle} className='reviews-button' >
    MODAL
    <div onClick={toggle} className='reviews-modal-container'>
      {show ? (<Modal
        element=<ReviewList key={'rl-' + reviews.length} reviews={reviews} />
        closer={toggle}
        opacity={0.8}
    />) : null}
    </div>
    </div>
  );
};

// to access divs from another service 
const makeReviewsModal = (reviews, target) => {
  let element = (<ReviewsModal reviews={reviews}/>);
  ReactDOM.render(element, document.getElementById(target));
};

export default ReviewsModal;

// to access other elements
export {makeReviewsModal};
