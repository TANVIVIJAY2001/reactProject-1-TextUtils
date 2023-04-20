import React from 'react'

function Alert(props) {
    //  A fucntion to capitalize the first letter of word success.
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // Initially props.alert is null so we are using syntax like: props.alert &&
// below syntax checks if it is null or not and if it's not null then it'll display whatevs there inside div
// This happens bec all the JSX gets converted into Javascript Calls

        props.alert && <div className={`alert alert-${props.alert.typee} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.typee)}</strong>: {props.alert.msg}
            
        </div>
    )
}

export default Alert
