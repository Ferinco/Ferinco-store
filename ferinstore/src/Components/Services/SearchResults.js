import React from 'react'

function SearchResults ({results}) {
  return (
    <div>
        {results.map((product)=>(
            <div key={product.key}>{product.name}</div>
        ))}
    </div>
  )
}

export default SearchResults