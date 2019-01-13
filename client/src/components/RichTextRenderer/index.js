import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const RichTextRenderer = ({ richTextContent }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(richTextContent)
      }}
    />
  )
}

export default RichTextRenderer
