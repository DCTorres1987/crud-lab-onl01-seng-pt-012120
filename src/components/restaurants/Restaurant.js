import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        {/* renders an li */}
        <li>
        {/* displays the appropriate text */}
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)} > X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;