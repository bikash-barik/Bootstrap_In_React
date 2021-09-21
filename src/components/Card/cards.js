import React, { Component } from 'react'
import Card from './card'

export default class cards extends Component {
    render() {
        return (
            <div className='container d-md-inline-flex'>
        <Card  Title={"Card title"} img={"https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"}/>
        <Card text={""} />
        <Card />
        <Card />
        <Card />
            </div>
        )
    }
}
