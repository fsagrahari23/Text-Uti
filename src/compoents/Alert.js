import React from 'react'

export default function Alert(props) {
  const captalize=(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
 {captalize(props.alert.type)} : <strong> {props.alert.msg}</strong>
  
</div>
  )
}
