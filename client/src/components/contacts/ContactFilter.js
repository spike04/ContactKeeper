import React, { useEffect, useContext, useRef } from 'react'
import ContactContext from '../../context/contacts/contactContext'

const ContactFilter = () => {
  const contactContext = useContext(ContactContext)
  const text = useRef('')
  const { filterContacts, clearFilter, filtered } = contactContext

  useEffect(() => {
    if (filtered === null) {
      text.current.vale = ''
    }
  })

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts ..."
        onChange={onChange}
      />
    </form>
  )
}

export default ContactFilter
