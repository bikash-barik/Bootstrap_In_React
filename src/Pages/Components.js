import React, { Component } from 'react'
import Badges from '../Component/Badges'
import Button from '../Component/Button'
import Dropdown from '../Component/Dropdown'
import  Card  from '../Component/Card/card'


export default class Components extends Component {
    render() {
        return (
            <div>
         <Badges />
          <Button />
          <Card />
          <Dropdown />
            </div>
        )
    }
}
