import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import * as inventoryActions        from '../../actions/inventoryActions';
import Button                       from '@material-ui/core/Button';
import Dialog                       from '@material-ui/core/Dialog';
import DialogActions                from '@material-ui/core/DialogActions';
import DialogContent                from '@material-ui/core/DialogContent';
import DialogTitle                  from '@material-ui/core/DialogTitle';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
// });

class AlertDialog extends Component {
  static defaultProps = {
    saveProduct: function(){},
  }

  state = {
    open: false,
  };
  manufacturer=null;
  make=null;
  model=null;
  year=null;

  handleClickOpen = () => {
    this.setState( (prevState) => ({ open: true }) );
  };

  handlePost = (data) => {
    //console.log(data);
    this.props.saveProduct(data)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Add New</Button>
        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
              <form>
                <label htmlFor="manufacturer">Manufacture</label>
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

const mapStateToProps = (state) => {  
  return {  }
};

const mapDispatchProps = (dispatch) => {
  return {
    saveProduct: (payload) => dispatch(inventoryActions.postInventory(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchProps)(AlertDialog);