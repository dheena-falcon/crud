import React from 'react'

export default function TaskDescription() {
  return (
    <>
    <label for="fname">Task Description:</label>
    <input  style={{padding:'10px',marginTop:'15px',border:'none',outline:'none',boxShadow:'1px 1px 2px lightgray'}} type="text" id="fname" name="fname"/>
    </>
  )
}
