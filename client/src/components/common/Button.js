import React from 'react'
import {Button} from 'reactstrap'
export default function myButton(props) {
    return (
        <div>
            <Button>
                {props.children}
            </Button>
        </div>
    )
}
