import React 			from 'react';
import Button 			from '@material-ui/core/Button';
import SortableTable 	from '../material/SortableTable';
import { connect } 				from 'react-redux';

const Inventory = () => (
   <div>
   		<h4>Inventory</h4>
   		 <Button variant="contained" color="primary">
	      Add New
	    </Button>
	    <SortableTable />
   </div>
)

// passed as props to Component
const mapStateToProps = (state) => {
	console.log('STATE: => ', state)
	return {
	}
};

const mapDispatchProps = (dispatch) => {
	return {

	}
};

export default connect(mapStateToProps, mapDispatchProps)(Inventory);