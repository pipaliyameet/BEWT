import Link from 'next/link'
import React from 'react'

function collagePage() {
  return (
    <div>
      <h1>This is home page</h1>
      <ul>
        <li><Link href='/collage/Diet'>DIET</Link></li>
        <li><Link href='/collage/Dica'>DICA</Link></li>
      </ul>
    </div>
  )
}

export default collagePage
