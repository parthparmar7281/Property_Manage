import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import PropertyList from './PropertyList'

export const Properties = () => {
  return (
    <div>
        <Breadcrumb
            title="Property"
            bgImage={"images/hero_bg_3.jpg" }
        />
        <PropertyList/>
    </div>
  )
}
