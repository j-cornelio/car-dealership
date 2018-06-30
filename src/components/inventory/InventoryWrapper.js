import React 					from 'react';
import Button 					from '@material-ui/core/Button';
import SortableTable 			from '../material/SortableTable';
import Dialog 					from './Dialog';

const Inventory = ({ loadUser }) => (
   <div>
   		<h4>Inventory</h4>
   		<Dialog />
   		 <Button variant="contained" color="primary" onClick={loadUser}>
	      Add New
	    </Button>
	    <SortableTable />
   </div>
)

export default Inventory;