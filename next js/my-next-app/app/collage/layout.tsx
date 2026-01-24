import Link from 'next/link';
import React from 'react'

function layout({children,}:{children : React.ReactNode;}) {
  return (
    <div>
      <Link href='/collage/about'>About</Link>
      &nbsp;
      <Link href='/collage/Diet'>Diet</Link>
      {children}
    </div>
  )
}
export default layout