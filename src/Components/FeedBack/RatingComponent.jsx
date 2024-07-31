import React from 'react'
import './RatingComponent.css'
const RatingComponent = () => {
  return (
    <div class="rating-card">
    <div class="text-wrapper">
        <p class="text1">Please Rate Your Experience</p>
        <p class="text2">to help us serve you better</p>
    </div>

    <div class="rating-stars-container">
        <input value="star-5" name="star" id="star-5" type="radio" />
        <label for="star-5" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
            ></path>
        </svg>
        </label>
        <input value="star-4" name="star" id="star-4" type="radio" />
        <label for="star-4" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
            ></path>
        </svg>
        </label>
        <input value="star-3" name="star" id="star-3" type="radio" />
        <label for="star-3" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
            ></path>
        </svg>
        </label>
        <input value="star-2" name="star" id="star-2" type="radio" />
        <label for="star-2" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
            ></path>
        </svg>
        </label>
        <input value="star-1" name="star" id="star-1" type="radio" />
        <label for="star-1" class="star-label">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            pathLength="360"
            ></path>
        </svg>
        </label>
    </div>
    
    </div>
  )
}

export default RatingComponent