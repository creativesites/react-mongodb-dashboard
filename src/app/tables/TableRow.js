import React, { Component } from 'react'

export default class TableRow extends Component {
  
    render() {
        return (
            
            <tr>
            {/* <td>
              <div className="form-check form-check-muted m-0">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" />
                  <i className="input-helper"></i>
                </label>
              </div>
            </td> */}
            <td>
              <div className="d-flex">
                {/* <img src={require('../../assets/images/faces/face1.jpg')} alt="face" /> */}
                <span className="pl-2">{this.props.obj.name}</span>
              </div>
            </td>
            <td> {this.props.obj.phone} </td>
            <td> {this.props.obj.updated} </td>
            <td> {this.props.obj.friends.join()}</td>
            <td> {this.props.obj.friendOf.join()} </td>
            <td>
            <div className="badge badge-outline-danger"> {this.props.obj.state}</div>
                
             
            </td>
          </tr>
        );
    }
}