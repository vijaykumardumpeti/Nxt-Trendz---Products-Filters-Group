import {BiSearch} from 'react-icons/bi'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInputUpdation,
    categoryId,
    ratingId,
    setRatingFunction,
    titleSearch,
    clearFilters,
  } = props // list

  const inputFunction = event => {
    searchInputUpdation(event)
  }

  const clearFiltersFunction = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input
          value={titleSearch}
          onChange={inputFunction}
          onKeyDown={inputFunction}
          placeholder="Search"
          type="search"
          className="input-element"
        />
        <button type="button" className="search-button">
          <BiSearch className="search-icon" />
        </button>
      </div>

      <h1 className="category">Category</h1>

      <ul className="filter-buttons-container">
        {categoryOptions.map(eachObject => {
          const {filterByCategory} = props

          const filterButtonClicked = () => {
            filterByCategory(eachObject.categoryId)
          }

          const colorForButton =
            categoryId === eachObject.categoryId ? 'apply-style' : ''

          console.log(categoryId === eachObject.categoryId)

          return (
            <li key={eachObject.categoryId}>
              <button
                onClick={filterButtonClicked}
                className={`button-stylings ${colorForButton}`}
                type="button"
              >
                <p className="category-para"> {eachObject.name}</p>
              </button>
            </li>
          )
        })}
      </ul>

      <p className="category">Rating</p>

      <ul className="ratings-container">
        {ratingsList.map(ratingObject => {
          //  console.log(ratingId)

          const onSetTheRating = () => {
            setRatingFunction(ratingObject.ratingId)
          }

          const ratingStyle =
            ratingObject.ratingId === ratingId ? 'apply-style' : ''

          return (
            <li key={ratingObject.ratingId}>
              <button
                onClick={onSetTheRating}
                type="button"
                className="rating-container-button"
              >
                <div className="rating-single-container">
                  <img
                    className="rating-image"
                    src={ratingObject.imageUrl}
                    alt={`rating ${ratingObject.ratingId}`}
                  />
                  <p className={ratingStyle}>& up</p>
                </div>
              </button>
            </li>
          )
        })}
      </ul>

      <button
        onClick={clearFiltersFunction}
        className="clear-filter-button"
        type="button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

