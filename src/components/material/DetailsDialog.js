import React                    from 'react';
import Button                   from '@material-ui/core/Button';
import Dialog                   from '@material-ui/core/Dialog';
import DialogActions            from '@material-ui/core/DialogActions';
import DialogContent            from '@material-ui/core/DialogContent';
import DialogContentText        from '@material-ui/core/DialogContentText';
import DialogTitle              from '@material-ui/core/DialogTitle';
import { connect }              from 'react-redux';
import * as inventoryActions    from '../../actions/inventoryActions';
import PropTypes          from 'prop-types';

class DetailsDialog extends React.Component {
  static defaultProps = {
    detailsData: {}
  } 

  state = {
    open: false,
  };
  manufacturer=null;
  make=null;
  model=null;
  year=null;

  handleClickOpen = (data) => {
    this.setState({ open: true });
  };

  handleDelete = (data) => {
    this.props.deleteProduct(data)
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.showDetails()
  };

  componentWillReceiveProps(nextProps){
    console.log('nextProps: ', nextProps);
    this.setState(() => ({open: nextProps.detailsOpen}))
  }

  render() {
    let { deleteProduct, detailsData } = this.props;
    detailsData = detailsData || {};
    
    return (
      <span>        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Car Details</DialogTitle>

          <DialogContent>
            <p>{detailsData.manufacturer}</p>
            <p>{detailsData.make}</p>
            <p>{detailsData.model}</p>
            <p>{detailsData.year}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return {}
};

const mapDispatchProps = (dispatch) => {
  return {
    deleteProduct: (payload) => dispatch(inventoryActions.deleteProduct(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchProps)(DetailsDialog);
