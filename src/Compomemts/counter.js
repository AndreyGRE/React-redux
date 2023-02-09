import React from 'react'
import {connect} from 'react-redux'
import * as action from '../acton'
//import {bindActionCreators} from 'redux'

const Counter = ({counter,inc,dec,ran,rep})=>{
    return (
    <div  className ="jumbotron">
        <h1 >{counter}</h1>
        <button onClick={dec} className ="btn btn-primary">DEC--</button>
        <button onClick={inc} className ="btn btn-primary">INC++</button>
        <button onClick={rep} className ="btn btn-primary">REP_0</button>
        <button onClick={ran} className ="btn btn-primary">ran_X</button>
    </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        counter: state
    }
}

export default connect(mapStateToProps,action)(Counter);