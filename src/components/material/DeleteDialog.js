import React, { Component }     from 'react';
import Button                   from '@material-ui/core/Button';
import Dialog                   from '@material-ui/core/Dialog';
import DialogActions            from '@material-ui/core/DialogActions';
import DialogContent            from '@material-ui/core/DialogContent';
import DialogTitle              from '@material-ui/core/DialogTitle';
import Delete                   from '@material-ui/icons/Delete';
import { connect }              from 'react-redux';
import * as inventoryActions    from '../../actions/inventoryActions';

class AlertDialog extends Component {
  state = {
    open: false,
  };

  static defaultProps = {
    detailsData: {},
    manufacturer: '',
    make: '',
    model: '',
    year: 0
  }

  handleClickOpen = (data) => {
    this.setState({ open: true });
  };

  handleDelete = (id) => {
    this.props.deleteProduct(id)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { id, manufacturer, make, model, year } = this.props;

    return (
      <span>

        <Delete onClick={this.handleClickOpen} className="delete-icon" />

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
  return {}
};

const mapDispatchProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(inventoryActions.deleteProduct(id)),
  }
};

export default connect(mapStateToProps, mapDispatchProps)(AlertDialog);