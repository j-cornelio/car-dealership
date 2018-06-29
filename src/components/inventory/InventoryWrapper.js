import React 			from 'react';
import Button 			from '@material-ui/core/Button';
import SortableTable 	from '../material/SortableTable';
import { connect } 				from 'react-redux';
import * as storiesActions    from '../../actions/inventoryActions';

const Inventory = ({ loadUser }) => (
   <div>
   		<h4>Inventory</h4>
   		 <Button variant="contained" color="primary" onClick={loadUser}>
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
		loadUser: (login) => dispatch(storiesActions.fetchUserActions(login)),
	}
};

export default connect(mapStateToProps, mapDispatchProps)(Inventory);