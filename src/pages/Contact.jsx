import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactForm from '../components/ContactForm/ContactForm'

export const Contact = () => {
  return (
    <div>
        <Breadcrumb
            title={"Contact"}
            bgImage={"images/hero_bg_3.jpg" }
        />
        <ContactForm/>
    </div>
  )
}
