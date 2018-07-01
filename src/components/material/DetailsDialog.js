import React, { Component }     from 'react';
import Button                   from '@material-ui/core/Button';
import Dialog                   from '@material-ui/core/Dialog';
import DialogActions            from '@material-ui/core/DialogActions';
import DialogContent            from '@material-ui/core/DialogContent';
import DialogTitle              from '@material-ui/core/DialogTitle';
import { connect }              from 'react-redux';
import * as inventoryActions    from '../../actions/inventoryActions';

class DetailsDialog extends Component {
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

  handleDelete = (data) => {
    this.props.deleteProduct(data)
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.showDetails()
  };

  componentWillReceiveProps(nextProps){
    this.setState(() => ({open: nextProps.detailsOpen}))
  }

  render() {
    let { detailsData } = this.props;
    let { manufacturer, make, model, year } = detailsData;

    return (
      <span>        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Car Details</DialogTitle>

          <DialogContent className="details-dialog">
            <p>{manufacturer}</p>
            <p>{make}</p>
            <p>{model}</p>
            <p>{year}</p>
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
