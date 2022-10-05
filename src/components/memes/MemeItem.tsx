import React from 'react'

const MemeItem: React.FC<{title: string}> = (props) => {
  return (
    <div> 
        <h3>{props.title}</h3>
    </div>
  )
}

export default MemeItem