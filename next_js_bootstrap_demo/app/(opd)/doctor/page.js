import React from 'react'
import serverSideButten from '../ui/serverSideButten'

function clientSideButten(){
  'use client'
  console.log('This is Client side log')
}
function Doctor() {
  return (
    <div className='p-1'>
      <button className='btn btn-primary'  onClick={clientSideButten()}>
        Clic for something
      </button>
      {/* <button className='btn btn-primary'  onClick={serverSideButten}>
        Clic for something
      </button> */}
    </div>
  )
}

export default Doctor
