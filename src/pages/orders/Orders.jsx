import React from 'react'
import "./Orders.scss";
//import  {Link} from "react-router-dom";
const Orders = () => {
  const currentuser={
    id:1,
    username:"abhi",
    isseller:true
}
  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          
        </div>
        <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentuser?.isseller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td><img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="404" /></td>
              <td>Gigs</td>
              <td>88</td>
              <td>123</td>
              <td><img className='delete' src="/img/message.png" alt="" /></td>
            </tr>
            <tr>
              <td><img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="404" /></td>
              <td>Gigs</td>
              <td>88</td>
              <td>123</td>
              <td><img className='delete' src="/img/message.png" alt="" /></td>
            </tr>
            <tr>
              <td><img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="404" /></td>
              <td>Gigs</td>
              <td>88</td>
              <td>123</td>
              <td><img className='delete' src="/img/message.png" alt="" /></td>
            </tr>
            <tr>
              <td><img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="404" /></td>
              <td>Gigs</td>
              <td>88</td>
              <td>123</td>
              <td><img className='delete' src="/img/message.png" alt="" /></td>
            </tr>
            <tr>
              <td><img className='image' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="404" /></td>
              <td>Gigs</td>
              <td>88</td>
              <td>123</td>
              <td><img className='delete' src="/img/message.png" alt="" /></td>
            </tr>
          </table>
      </div>
    </div>
  )
}

export default Orders
