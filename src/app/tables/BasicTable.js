import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import TableRow from './TableRow'

export class BasicTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:7777/api/getdata')
      .then(res => {
        console.log(res.data)
        let a = res.data
        let b =[]
        a.map((e)=>{
          if(e.state == 1){
            e.state = 'Still Registering'
          }
          if(e.state == 2){
            e.state = 'Still Registering'
          }
          if(e.state == 3){
            e.state = 'Registered and Safe'
          }
          if(e.state == 10){
            e.state = 'Going Home'
          }if(e.state == 11){
            e.state = 'Check On User'
          }else{
            e.state = 'Unkown'
          }
          b.push(e)
        })
        this.setState({
          
          students: b
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }
  
 
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Users </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Users</a></li>
              <li className="breadcrumb-item active" aria-current="page">Bot Users</li>
            </ol>
          </nav>
        </div>
        <div className="row">
           
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Chatbot Users</h4>
                
                <div className="table-responsive">
                <table className="table">
                    <thead>
                      <tr>
                        {/* <th>
                          <div className="form-check form-check-muted m-0">
                            <label className="form-check-label">
                              <input type="checkbox" className="form-check-input" />
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </th> */}
                        <th> Name </th>
                        <th> Phone </th>
                        <th> Last Message On </th>
                        <th> Friends </th>
                        <th> Friend Of </th>
                        <th> Current Status </th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.DataTable()}
                    </tbody>
                  </table>
                
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default BasicTable
