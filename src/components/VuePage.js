import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components/Card';

export const VuePage = () => {

  const url = 'https://registry.npmjs.org/-/v1/search?text=vue';
  const { data, loading } =  useFetch( url );
  return (
    <div className="container main-content__flex">

    { 
      loading 
        ? <h1>Cargando</h1>
        :(
              data.objects.map( mainpackage => (
                <Card
                  key={mainpackage.package.name}
                  npmPackage={ mainpackage.package }
                />
              ) )
            )
    }
    </div>
  )
}
