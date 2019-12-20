import React from 'react';


export default function Zipcode(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          name='zipcode'
          id='zipcode'
          value={props.formData.zipcode}
          onChange={props.handleChange}/>
          <button id='submit'>Submit</button>
      </form>
    </div>
  )
}