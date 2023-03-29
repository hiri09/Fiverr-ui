import React from 'react'
import "./Messages.scss";
import  {Link} from "react-router-dom";
const Messages = () => {
  const msg="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum distinctio, eum omnis fugit laboriosam sunt autem. Eum facere non, ea totam, quis pariatur temporibus ipsa quod cupiditate soluta, itaque sequi?";
  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>John doe</td>
              <td><Link className='link' to="/message/123">{msg.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              <td><button>Mark as Read</button></td>
              
            </tr>
            <tr className='active'>
              <td>John doe</td>
              <td><Link className='link' to="/message/123">{msg.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              <td><button>Mark as Read</button></td>
              
            </tr>
            <tr>
              <td>John doe</td>
              <td><Link className='link' to="/message/123">{msg.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              
            </tr>
            <tr>
              <td>John doe</td>
              <td><Link className='link' to="/message/123">{msg.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              
            </tr>
            <tr>
              <td>John doe</td>
              <td><Link className='link' to="/message/123">{msg.substring(0,100)}...</Link></td>
              <td>1 day ago</td>
              
            </tr>
            
          </table>
      </div>
    </div>
  )
}

export default Messages
