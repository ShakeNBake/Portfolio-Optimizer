import React, { Component } from "react";
import routes from "../routes/routes.js";


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.showActivePanel=this.showActivePanel.bind(this);
  }
  showActivePanel(activePanel) {
    this.props.setActivePanel(activePanel);
  }
 
  render() {
  
    return (<div id="sidebar" className="sidebar" data-color="black" >
    <div className="sidebar-background" ></div>
    <div className="logo">
        <a href="#" className="simple-text logo-mini">
            <div className="logo-img"><img src="/light-bootstrap-dashboard-react/static/media/reactlogo.9b864b36.png" alt=""/></div>
        </a><a href="#" className="simple-text logo-normal">Portfolio Optimizer</a></div>
    <div className="sidebar-wrapper">
        <ul className="nav">
        {
        routes.map((route)=>{
          return(<li className=""><a className="nav-link" aria-current="true" href="#"
          onClick={()=>this.showActivePanel(route.code)}
          ><i className="pe-7s-graph"></i><p>{route.name}</p></a></li>)
        })
        }
             
        </ul>
    </div>
</div>);
  }
}

export default Sidebar;
