import React, { Component } from 'react';
//import { Doughnut } from 'react-chartjs-2';
import Slider from "react-slick";
import { TodoListComponent } from '../apps/TodoList'
//import { VectorMap } from "react-jvectormap"
import { VectorMap } from '@south-paw/react-vector-maps';
import axios from 'axios';
import Table from '../tables/BasicTable'
const mapData = {
  "BZ": 75.00,
  "US": 56.25,
  "AU": 15.45,
  "GB": 25.00,
  "RO": 10.25,
  "GE": 33.25
}

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: 0,
      msgs: 0,
      friends: 0
    };
  }
  transactionHistoryData =  {
    labels: ["Paypal", "Stripe","Cash"],
    datasets: [{
        data: [55, 25, 20],
        backgroundColor: [
          "#111111","#00d25b","#ffab00"
        ]
      }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
          borderWidth: 0
      }
    },      
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  componentDidMount() {
    axios.get('http://localhost:7777/api/getdata')
      .then(res => {
        console.log(res.data)
        let a = res.data
        let b = a.length
        let c = 0
        a.map((d)=>{
          let e = d.friends
          let f = e.length
          c += f
        })
        this.setState({
          users: b,
          friends: c
          
        });
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('http://localhost:7777/api/getMsgsSent')
      .then(res => {
        console.log(res.data)
        let a = res.data
        let b = a.length
        let c = 0
        
        this.setState({
          msgs: b
          
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render () {
    return (
      <div>
        
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card corona-gradient-card">
              <div className="card-body py-0 px-0 px-sm-3">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-3 col-xl-2">
                    <img src={require('../../assets/images/dashboard/Group126@2x.png')} className="gradient-corona-img img-fluid" alt="banner" />
                  </div>
                  <div className="col-5 col-sm-7 col-xl-8 p-0">
                    <h4 className="mb-1 mb-sm-0">Fundacion Avanzar</h4>
                    <p className="mb-0 font-weight-normal d-none d-sm-block">Provides Support to Female Entrepreneurs as well as Children in Ecuador.</p>
                  </div>
                  <div className="col-4 col-sm-3 col-xl-2">
                    <img src={require('../../assets/images/dashboard/4.png')} className="gradient-corona-img img-fluid" alt="banner" />
                  </div>
                  {/* <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                    <button className="btn btn-outline-light btn-rounded get-started-btn">Users</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Messages</h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">{this.state.msgs}</h2>
                      {/* <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p> */}
                    </div>
                    {/* <h6 className="text-muted font-weight-normal">11.38% Since last month</h6> */}
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i className="icon-lg mdi mdi-codepen text-primary ml-auto"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Users</h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">{this.state.users}</h2>
                      {/* <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p> */}
                    </div>
                    {/* <h6 className="text-muted font-weight-normal"> 9.61% Since last month</h6> */}
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 grid-margin">
            <div className="card">
              <div className="card-body">
                <h5>Friends</h5>
                <div className="row">
                  <div className="col-8 col-sm-12 col-xl-8 my-auto">
                    <div className="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 className="mb-0">{this.state.friends}</h2>
                      {/* <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p> */}
                    </div>
                    {/* <h6 className="text-muted font-weight-normal">2.27% Since last month</h6> */}
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i className="icon-lg mdi mdi-account-switch"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Latest Users</h4>
                <div className="table-responsive">
                  <Table></Table>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div> 
    );
  }
}

export default Dashboard;