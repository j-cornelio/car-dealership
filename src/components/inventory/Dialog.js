import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import * as inventoryActions        from '../../actions/inventoryActions';
import Button                       from '@material-ui/core/Button';
import Dialog                       from '@material-ui/core/Dialog';
import DialogActions                from '@material-ui/core/DialogActions';
import DialogContent                from '@material-ui/core/DialogContent';
import DialogContentText            from '@material-ui/core/DialogContentText';
import DialogTitle                  from '@material-ui/core/DialogTitle';
import TextField                    from '@material-ui/core/TextField';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
// });

class AlertDialog extends Component {
  state = {
    open: false,
  };
  manufacturer =null;
  make=null;
  model=null;
  year=null;

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handlePost = (obj) => {
    console.log(obj);
    this.props.saveProduct(obj)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { saveProduct, inventory } = this.props;
console.log('P ', inventory)
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        
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
                <input ref={node => this.year = this.node} type="text" name="year" />
                <br />
              </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
              this.handlePost({
                manufacturer: this.manufacturer.value
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
  console.log('STATE: => ', state)
  return {
    inventory: state.inventory.inventory
  }
};

const mapDispatchProps = (dispatch) => {
  return {
    saveProduct: (payload) => dispatch(inventoryActions.postInventory(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchProps)(AlertDialog);