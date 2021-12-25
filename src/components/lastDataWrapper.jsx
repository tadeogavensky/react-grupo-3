import React, {Component} from 'react'
import { lastDataContent } from './lastDataContent';
import '../assets/css/lastDataWrapper.css'
class lastDataWrapper extends Component {
    constructor() {
        super();
        this.state = {
          productImg:'',
          productName:'',
          userImg:'',
          userName:''
        };
      }
      
      componentDidMount() {
        Promise.all([
            fetch("http://localhost:4000/api/products/lastProduct").then(res=>{ return res.json()}),
            fetch("http://localhost:4000/api/users/lastUser").then(res=>{ return res.json()}),
        ])
        .then(([resProduct, resUser]) => {
            console.log(`resProduct`, resProduct)
            console.log(`resUser`, resUser)
            this.setState({ productImg: resProduct.data.imagen });
            this.setState({ productName: resProduct.data.nombre });
            this.setState({ userImg: resUser.data.imagen });
            this.setState({ userName: resUser.data.nombre });
          })
      }

    render(){
    return (
        <div className='lastDataWrapper'>
            <lastDataContent dato={'producto'} imagen={this.state.productImg} nombre={this.state.productName}/>
            <lastDataContent dato={'usuario'} imagen={this.state.userImg} nombre={this.state.userName}/>
        </div>
    )
    }
}

export default lastDataWrapper
