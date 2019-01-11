import React from 'react'

import { Link } from 'react-router-dom'

import FormContainer from '../../../../components/FormContainer'
import SearchBox from '../../../../components/SearchBox'
import Warning from '../../../../components/Warning'
import Button from '../../../../components/Button'

import './index.css'

const MainForm = ({
  address,
  handleChange,
  handleSelection,
  attemptFailed,
  validated,
  handleClick,
  cityData
}) => {
  return (
    <FormContainer staticHeight insetShadow cityImage={cityData.mainImage}>
      <h2>{cityData.topFormTitle}</h2>
      <div>
        {cityData.topFormParagraph.content
          ? cityData.topFormParagraph.content.map(p => (
              <p key={p.content[0].value}>{p.content[0].value}</p>
            ))
          : cityData.topFormParagraph.map(p => <p key={p}>{p}</p>)}
      </div>
      <div className="landing__input-n-form">
        <SearchBox
          placeholder={cityData.topFormSearchBoxPlaceholder}
          value={address}
          handleChange={handleChange}
          handleSelection={handleSelection}
        />
        {attemptFailed ? <Warning>This field is required</Warning> : null}
        <Link
          to={validated ? '/buyer-or-seller' : ''}
          tabIndex="-1"
          onClick={handleClick}
        >
          <Button>{cityData.topFormCallToAction}</Button>
        </Link>
      </div>
    </FormContainer>
  )
}

export default MainForm
