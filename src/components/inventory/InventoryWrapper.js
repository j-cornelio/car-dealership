import React, { Component } 					from 'react';
import { connect }                  from 'react-redux';
import SortableTable 			from '../material/SortableTable';
import Dialog 					from './Dialog';

const URL = 'http://rest.learncode.academy/api/dealership/inventory';

class Inventory extends Component{
	async componentDidMount(){
		const res = await fetch(URL);
		const data = await res.json();

		console.log('res ', data);
	}

	render(){
		const { inventory } = this.props;
		return (
		   <div>
		   		<h4>Inventory</h4>
		   		<Dialog />
			    <SortableTable inventory={inventory} />
		   </div>
		)
	}
}

const mapStateToProps = (state) => {  
  //console.log('STATE: => ', state)
  return {
    inventory: state.inventory.inventory
  }
};

const mapDispatchProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchProps)(Inventory);