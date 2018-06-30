import React, { Component } 	from 'react';
import { connect }              from 'react-redux';
import SortableTable 			from '../material/SortableTable';
import Dialog 					from './Dialog';
import * as inventoryActions    from '../../actions/inventoryActions';

const EmptyTable = () => <h4>Please enter inventory data</h4>;//

class Inventory extends Component{
	componentDidMount(){
		this.props.fetchProduct()
	}

	render(){
		const { inventory } = this.props;
		let content = null;
 console.log('inventory: => ', inventory)

		content = inventory.length === 0 ? <EmptyTable /> : <SortableTable inventory={inventory} />;

		return (
		   <div>
		   		<h4>Inventory</h4>
		   		<Dialog />
			    {content}
		   </div>
		)
	}
}//

const mapStateToProps = (state) => {  
  return {
    inventory: state.inventory.inventory
  }
};

const mapDispatchProps = (dispatch) => {
  return {
    fetchProduct: (payload) => dispatch(inventoryActions.fetchInventory(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchProps)(Inventory);