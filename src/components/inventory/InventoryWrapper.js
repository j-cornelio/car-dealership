import React, { Component } 	from 'react';
import { connect }              from 'react-redux';
import SortableTable 			from './material/SortableTable';
import AddDialog 					from './material/AddDialog';
import * as inventoryActions    from '../../actions/inventoryActions';

const EmptyTable = () => <p>Please enter inventory data</p>;

class Inventory extends Component{

  static defaultProps = {
    fetchProduct: function(){}
  }

	componentDidMount(){
		this.props.fetchProduct()
	}

	render(){
		const { inventory } = this.props;
		let content = null;

		content = inventory.length === 0 ? <EmptyTable /> : <SortableTable inventory={inventory} />;

		return (
		   <div>
		   		<h4>Inventory</h4>
		   		<AddDialog />
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