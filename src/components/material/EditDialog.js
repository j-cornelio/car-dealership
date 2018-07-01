import React, { Component }     from 'react';
import Button                   from '@material-ui/core/Button';
import Dialog                   from '@material-ui/core/Dialog';
import DialogActions            from '@material-ui/core/DialogActions';
import DialogContent            from '@material-ui/core/DialogContent';
import DialogTitle              from '@material-ui/core/DialogTitle';
import Edit                     from '@material-ui/icons/Edit';
import { connect }              from 'react-redux';
import * as inventoryActions    from '../../actions/inventoryActions';

class EditDialog extends Component {
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

  handleEdit = (data) => {
    this.props.editProduct(data)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { id, manufacturer, make, model, year } = this.props;

    return (
      <span>
        <Edit onClick={this.handleClickOpen} />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Edit Car</DialogTitle>
          <DialogContent>
              <form>
                <label htmlFor="manufacturer">Manufacture</label>
                <input ref={node => this.manufacturer = node} type="text" name="manufacturer" placeholder={manufacturer} />
                <br />
                <label htmlFor="make">Make</label>
                <input ref={node => this.make = node} type="text" name="make" placeholder={make} />
                <br />
                <label htmlFor="model">Model</label>
                <input ref={node => this.model = node} type="text" name="model" placeholder={model} />
                <br />
                <label htmlFor="year">Year</label>
                <input ref={node => this.year = node} type="text" name="year" placeholder={year} />
                <br />
              </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              this.handleEdit({
                manufacturer: this.manufacturer.value,
                make: this.make.value,
                model: this.model.value,
                year: this.year.value,
                id,
              })
            }} color="primary">
              Save
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

const mapStateToProps = (state) => ({});

const mapDispatchProps = (dispatch) => {
  return {
    editProduct: (payload) => dispatch(inventoryActions.editInventory(payload))
  }
};

export default connect(mapStateToProps, mapDispatchProps)(EditDialog);