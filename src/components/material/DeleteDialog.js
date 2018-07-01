import React                    from 'react';
import Button                   from '@material-ui/core/Button';
import Dialog                   from '@material-ui/core/Dialog';
import DialogActions            from '@material-ui/core/DialogActions';
import DialogContent            from '@material-ui/core/DialogContent';
import DialogContentText        from '@material-ui/core/DialogContentText';
import DialogTitle              from '@material-ui/core/DialogTitle';
import Delete                   from '@material-ui/icons/Delete';
import { connect }              from 'react-redux';
import * as inventoryActions    from '../../actions/inventoryActions';

class AlertDialog extends React.Component {
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
  };

  render() {
    const { id, manufacturer, make, model, year, deleteProduct } = this.props;

    return (
      <span>
        <Delete onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete Car</DialogTitle>
          <DialogContent>
            <h5>Are you sure you want to delete:</h5>
            <p>{manufacturer}</p>
            <p>{make}</p>
            <p>{model}</p>
            <p>{year}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              this.handleDelete(id)
            }} color="primary">
              Delete
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return null
};

const mapDispatchProps = (dispatch) => {
  return {
    deleteProduct: (payload) => dispatch(inventoryActions.deleteProduct(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchProps)(AlertDialog);