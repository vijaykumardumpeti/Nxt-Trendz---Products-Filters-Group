import {BiSearch} from 'react-icons/bi'
import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, searchInputUpdation, titleSearch} = props // list

  const inputFunction = event => {
    searchInputUpdation(event)
  }

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input
          value={titleSearch}
          onChange={inputFunction}
          type="search"
          className="input-element"
        />
        <BiSearch className="search-icon" />
      </div>

      <p className="category">Category</p>

      <ul className="filter-buttons-container">
        {categoryOptions.map(eachObject => (
          <li key={eachObject.categoryId}>
            <button className="button-stylings" type="button">
              {eachObject.name}
            </button>
          </li>
        ))}
      </ul>

      <p className="category">Rating</p>

      <ul className="ratings-container">
        {ratingsList.map(ratingObject => (
          <li key={ratingObject.ratingId}>
            <img
              className="rating-image"
              src={ratingObject.imageUrl}
              alt={`rating ${ratingObject.ratingId}`}
            />
            & up
          </li>
        ))}
      </ul>

      <button className="clear-filter-button" type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
