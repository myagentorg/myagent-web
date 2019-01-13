import React from 'react'

import { Link } from 'react-router-dom'

import CustomFormContainer from './components/CustomFormContainer'
import SearchBox from '../../../../components/SearchBox'
import Warning from '../../../../components/Warning'
import Button from '../../../../components/Button'
import RichTextRenderer from '../../../../components/RichTextRenderer'

const BottomForm = ({
  address,
  handleChange,
  handleSelection,
  attemptFailed,
  validated,
  handleClick,
  cityData
}) => {
  return (
    <CustomFormContainer staticHeight>
      <h2>{cityData.bottomFormTitle}</h2>
      {cityData.bottomFormParagraph ? (
        <RichTextRenderer
          richTextContent={cityData.bottomFormParagraph.content}
        />
      ) : (
        <p>
          Our service is 100% free to use for home buyers and sellers.
          MyAgent.io is the easiest and fastest way to find the best agent for
          you.
        </p>
      )}
      <div className="landing__input-n-form">
        <SearchBox
          placeholder={cityData.bottomFormPlaceholder}
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
          <Button>{cityData.bottomFormCallToAction}</Button>
        </Link>
      </div>
    </CustomFormContainer>
  )
}

export default BottomForm
