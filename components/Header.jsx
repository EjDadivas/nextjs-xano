import React from 'react'
import { Button } from './ui/button'


const Header = () => {
  return (
    <div className="flex  justify-between bg-black py-3">
        <div className="flex w-full gap-4 mx-12 "> 
            <Button href="/">AOM</Button>
            <Button href="/screening-room">VWI</Button>
            <Button href="/screening-room">WS</Button>
        </div>

    </div>
  )
}

export default Header