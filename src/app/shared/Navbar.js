import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/dashboard/2.png')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button className="navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" className="form-control" placeholder="Search Users" />
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <Dropdown alignRight as="li" className="nav-item d-none d-lg-block">
                <Dropdown.Toggle className="nav-link btn btn-success create-new-button no-caret">
                <Link className="nav-link" to="/users">
              <span className="menu-icon"><i className="mdi mdi-contacts"></i></span>
              <span className="menu-title"><Trans>Users</Trans></span>
            </Link>
                </Dropdown.Toggle>

               
              </Dropdown>
              <Dropdown alignRight as="li" className="nav-item d-none d-lg-block">
                <Dropdown.Toggle className="nav-link btn btn-danger create-new-button no-caret">
                <Link className="nav-link" to="/edit-responses">
              <span className="menu-icon"><i className="mdi mdi-view-grids"></i></span>
              <span className="menu-title"><Trans>Edit Responses</Trans></span>
            </Link>
                </Dropdown.Toggle>

               
              </Dropdown>
            {/* <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>
                <i className="mdi mdi-view-grid"></i>
              </a>
            </li> */}
            <Dropdown alignRight as="li" className="nav-item border-left" >
              <Dropdown.Toggle as="a" className="nav-link count-indicator cursor-pointer">
                <i className="mdi mdi-email"></i>
                <span className="count bg-success"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown preview-list">
                  <h6 className="p-3 mb-0"><Trans>Messages</Trans></h6>
                  <Dropdown.Divider />
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <img src={require('../../assets/images/faces/face4.jpg')} alt="profile" className="rounded-circle profile-pic" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1"><Trans>Mark send you a message</Trans></p>
                      <p className="text-muted mb-0"> 1 <Trans>Minutes ago</Trans> </p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <img src={require('../../assets/images/faces/face2.jpg')} alt="profile" className="rounded-circle profile-pic" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1"><Trans>Cregh send you a message</Trans></p>
                      <p className="text-muted mb-0"> 15 <Trans>Minutes ago</Trans> </p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()} className="preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <img src={require('../../assets/images/faces/face3.jpg')} alt="profile" className="rounded-circle profile-pic" />
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1"><Trans>Profile picture updated</Trans></p>
                      <p className="text-muted mb-0"> 18 <Trans>Minutes ago</Trans> </p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <p className="p-3 mb-0 text-center">4 <Trans>new messages</Trans></p>
                </Dropdown.Menu>
            </Dropdown>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>
              <i className="mdi mdi-logout text-danger"></i>
              <div className="preview-item-content">
                    <p className="preview-subject mb-1"><Trans>Log Out</Trans></p>
                  </div>
              </a>
            </li>
            
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
