import React            from 'react';
import PropTypes        from 'prop-types';
import { withStyles }   from '@material-ui/core/styles';
import Table            from '@material-ui/core/Table';
import TableBody        from '@material-ui/core/TableBody';
import TableCell        from '@material-ui/core/TableCell';
import TableHead        from '@material-ui/core/TableHead';
import TablePagination  from '@material-ui/core/TablePagination';
import TableRow         from '@material-ui/core/TableRow';
import TableSortLabel   from '@material-ui/core/TableSortLabel';
import Paper            from '@material-ui/core/Paper';
import Tooltip          from '@material-ui/core/Tooltip';
import EditDialog       from './EditDialog';
import DeleteDialog     from './DeleteDialog';
import DetailsDialog     from './DetailsDialog';
import Button                   from '@material-ui/core/Button';

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Manufactorer' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Make' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Model' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Year' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'xxx' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}//

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [],
      page: 0,
      detailsData: null,
      rowsPerPage: 5,
      detailsOpen: false,
    };
  }

  componentDidMount(){
    this.setState( (prevState) => ({data : this.props.inventory}) )  
  }

  componentWillReceiveProps(nextProps){    
    this.setState( () => ({data: nextProps.inventory}) )
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  showDetails = (data) => {
    this.setState((prevState) => (
      {
        detailsOpen: !prevState.detailsOpen,
        detailsData: data
      } ))
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    //console.log('TABLE ', this.props)
    const { classes } = this.props;
    const { data, order, orderBy, rowsPerPage, page, detailsOpen, detailsData } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <DetailsDialog 
          detailsData={detailsData}
          detailsOpen={detailsOpen} 
          showDetails={this.showDetails}  
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            
            <TableBody>
              {data
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map( n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      tabIndex={-1}
                      key={n.id}
                    >
                      <TableCell component="th" scope="row" padding="none">
                        {n.manufacturer}
                      </TableCell>
                      <TableCell numeric>{n.make}</TableCell>
                      <TableCell numeric>{n.model}</TableCell>
                      <TableCell numeric>{n.year}</TableCell>
                      <TableCell numeric>
                        <Button onClick={this.showDetails.bind(this, n)} color="primary">
                        Details
                      </Button>
                      </TableCell>
                      <TableCell numeric>
                        <EditDialog  {...n} /> 
                        <DeleteDialog {...n} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);