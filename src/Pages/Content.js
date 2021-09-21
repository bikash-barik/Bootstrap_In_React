import React, { Component } from 'react'
import Typography from '../Component/Typography'
import Image  from '../Component/Images'
import Table  from '../Component/Table'
export default class Content extends Component {
    render() {
        return (
            <div>
               <Typography />
               <Image />
               <Table />
            </div>
        )
    }
}
