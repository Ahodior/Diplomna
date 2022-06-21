import React from 'react'
import Connection from '../../Connection/Connection';
import Header from '../../Header/Header';
import CatalogTitle from './CatalogTitle';

const Catalog = () => {
  return (
     <div>
        <Header/>
        <CatalogTitle/>
        <Connection/>
     </div>
  )
}

export default Catalog;