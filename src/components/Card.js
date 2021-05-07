import React from 'react'

export const Card = ( { npmPackage } ) => {

  const { name, description, version, links } = npmPackage;

  return (
    <div className="main-content__card">
        <h3 className="card__title">{ name }</h3>
        <p className="card__version">{ version }</p>
        <p className="card__description">{ description }</p>
        <a href={ links.homepage } className="card__button">Go to NPM</a>
    </div>
  )
}
