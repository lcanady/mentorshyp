import {v4} from 'uuid'
import React from 'react'

const RoomIndex = () => {
  return <div>&nbsp;</div>
}

RoomIndex.getInitialProps = ({res}) => {
  res.redirect('/room/' + v4())
}

export default RoomIndex


