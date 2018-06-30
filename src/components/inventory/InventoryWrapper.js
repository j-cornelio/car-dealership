import React 					from 'react';
import SortableTable 			from '../material/SortableTable';
import Dialog 					from './Dialog';

const Inventory = ({ loadUser }) => (
   <div>
   		<h4>Inventory</h4>
   		<Dialog />
	    <SortableTable />
   </div>
)

export default Inventory;