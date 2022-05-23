import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, title }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">{title}</span>
      </div>
      <div className="card-body">
        {reviews &&
          reviews.map(review => (
            <p className="pill mb-3" key={review._id}>
              {review.reviewBody} {' '}
              <Link to={`/profile/${review.lastName}`} style={{ fontWeight: 700 }}>
                {review.lastName} on {review.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
