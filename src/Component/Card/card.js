import React, { Component } from 'react'
import Cards from './Cards'


export default class card extends Component {
    render() {
        return (
            <div className="container mb-5 d-lg-inline-flex">
               <Cards img={"https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
               title={"First Card"} 
               cont={" Some quick example text to build on the card title and make up thebulk of the cards content."}/> 
               <Cards img={"https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
               title={"Second Card"} 
               cont={" Some quick example text to build on the card title and make up thebulk of the cards content."}/>  
               <Cards img={"https://image.shutterstock.com/image-photo/old-brick-black-color-wall-260nw-1605128917.jpg"}
               title={"3rd Card"} 
               cont={" Some quick example text to build on the card title and make up thebulk of the cards content."}/> 
               <Cards img={"https://files.oyebesmartest.com/uploads/simthumbnail/-11550484959xqgk7ycgb4.png"}
               title={"4th Card"} 
               cont={" Some quick example text to build on the card title and make up thebulk of the cards content."}/> 
              
            </div>
        )
    }
}
