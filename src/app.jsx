import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

import Dashboard from "./components/Dashboard/dashboard.jsx";

import ModelCreation from "./components/ModelCreation/model-creation.jsx";

import PortfolioAnalyzer from "./components/PortfolioAnalyzer/portfolio-analyzer.jsx";

import PortfolioSolver from "./components/PortfolioSolver/portfolio-solver.jsx";

import PortfolioOptimizer from "./components/PortfolioOptimizer/portfolio-optimizer.jsx";


export default class App extends React.Component {

    constructor(props){
       super(props);
       this.state={
   			 activePanel:""
   		 }
  
    this.setActivePanel=this.setActivePanel.bind(this);
    this.renderActivePanel=this.renderActivePanel.bind(this);
         
    }
setActivePanel(activePanel){
	this.setState({activePanel:activePanel});
}

renderActivePanel(){
const activePanel=this.state.activePanel;
if(activePanel=='dashboard'){
return <Dashboard/>
}

if(activePanel=='model-creation'){
return <ModelCreation/>
}

if(activePanel=='portfolio-analyzer'){
return <PortfolioAnalyzer/>
}

if(activePanel=='portfolio-solver'){
return <PortfolioSolver/>
}

if(activePanel=='portfolio-optimizer'){
return <PortfolioOptimizer/>
}
	
}

    render(){
        
        return <div>
         
            <Sidebar activePanel={this.state.activePanel} setActivePanel={this.setActivePanel}/>
            <div id="main-panel" className="main-panel" ref="mainPanel">
{this.renderActivePanel()}
            </div>
                                 </div>
    }

}
