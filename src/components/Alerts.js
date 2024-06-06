import React from 'react'

export default function Alerts(props) {

    let textCaptlize = (word) => {
        let lowerCase = word.toLowerCase()
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }


    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show w-100 z-3 position-absolute`} role="alert">
            <strong> {textCaptlize(props.alert.type)}: </strong> {props.alert.msg}
        </div>
    )
}
