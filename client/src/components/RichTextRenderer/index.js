import React from 'react'

const RichTextRenderer = ({ richTextContent }) => {
  const mappedParagraph = paragraph => {
    return paragraph.map(text => {
      const textType = text.marks[0] ? text.marks[0].type : ''
      let TagType

      switch (textType) {
        case 'bold':
          TagType = 'strong'
          break
        case 'italic':
          TagType = 'em'
          break
        default:
          TagType = 'span'
      }

      return <TagType key={text.value}>{text.value}</TagType>
    })
  }

  return (
    <div>
      {richTextContent.map((content, i) => (
        <p key={i}>{mappedParagraph(content.content)}</p>
      ))}
    </div>
  )
}

export default RichTextRenderer
