import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import * as inventoryActions        from '../../actions/inventoryActions';
import Button                       from '@material-ui/core/Button';
import Dialog                       from '@material-ui/core/Dialog';
import DialogActions                from '@material-ui/core/DialogActions';
import DialogContent                from '@material-ui/core/DialogContent';
import DialogTitle                  from '@material-ui/core/DialogTitle';

class AddDialog extends Component {
  state = {
    open: false,
  };

  static defaultProps = {
    saveProduct: function(){},
    manufacturer: '',
    make: '',
    model: '',
    year: 0
  }

  handleClickOpen = () => {
    this.setState( (prevState) => ({ open: true }) );
  };

  handlePost = (data) => {
    this.props.saveProduct(data)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="add-new">
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Add New</Button>
        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Add New Car</DialogTitle>
          
          <DialogContent>
              <form className="add-new-form">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input ref={node => this.manufacturer = node} type="text" name="manufacturer" />
                <br />
                <label htmlFor="make">Make</label>
                <input ref={node => this.make = node} type="text" name="make" />
                <br />
                <label htmlFor="model">Model</label>
                <input ref={node => this.model = node} type="text" name="model" />
                <br />
                <label htmlFor="year">Year</label>
                <input ref={node => this.year = node} type="text" name="year" />
                <br />
              </form>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => {
              this.handlePost({
                manufacturer: this.manufacturer.value,
                make: this.make.value,
                model: this.model.value,
                year: this.year.value,
              })
            }} color="primary">
              Save
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}//

const mapStateToProps = (state) => ({});

const mapDispatchProps = (dispatch) => {
  return {
    saveProduct: (payload) => dispatch(inventoryActions.postInventory(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchProps)(AddDialog);