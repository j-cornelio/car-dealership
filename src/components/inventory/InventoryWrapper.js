import React 					from 'react';
import { connect }                  from 'react-redux';
import SortableTable 			from '../material/SortableTable';
import Dialog 					from './Dialog';

const Inventory = ({ loadUser, inventory }) => {
	return (
	   <div>
	   		<h4>Inventory</h4>
	   		<Dialog />
		    <SortableTable inventory={inventory} />
	   </div>
	)
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