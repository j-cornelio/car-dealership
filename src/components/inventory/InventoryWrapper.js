import React 			from 'react';
import Button 			from '@material-ui/core/Button';
import SortableTable 	from '../material/SortableTable';

const Inventory = () => (
   <div>
   		<h1>Inventory</h1>
   		 <Button variant="contained" color="primary">
	      Hello World
	    </Button>
	    <SortableTable />
   </div>
)

export default Inventory;