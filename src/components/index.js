import React from 'react'
// yeh redux export koi bhi file me kr sakte hain
import { connect } from 'react-redux'


const Check =(props) =>{
   console.log(props.name)
    return(
        <div>
            <h1>Checked</h1>
            <a>{props.name}</a>
            <br/>
            <a>{props.check}</a>
        </div>
        
    )
   
}


 const mapStateToProps = (chk) => ({
    name: chk.name,
    check: 'check out'

 })

 export default connect(mapStateToProps, null) (Check);