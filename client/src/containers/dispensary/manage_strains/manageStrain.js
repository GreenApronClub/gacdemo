import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { fetchStrain } from '../../../actions/strain/actionStrain';
import { removeStrain } from '../../../actions/manage_strains/actionRemoveStrain';
import { clearRemoveMessage } from '../../../actions/manage_strains/actionEditStrain';
import classNames from 'classnames';
import './manageStrain.css';

class ManageStrain extends Component {
  componentWillMount() {
    var params = this.props.match.params.strainId;
    this.props.fetchStrain(params);
  }
  componentWillUnmount() {
    const clear = '';
    this.props.clearRemoveMessage(clear);
  }

  removeStrain() {
    var params = this.props.match.params.strainId;
    var history = this.props.history;
    this.props.removeStrain(params, history);
  }

  render() {
    var params = this.props.match.params.strainId;
    var editRoute = `/manage-strain/${params}/edit`;
    const clear = '';
    var customSuccessAlert = classNames({
      'col-md-10 offset-md-1': true,
      'custom-success-alert': this.props.success.message,
      'custom-alert-close': true
    });
    return(
      <div className="manage-strain">
        <div className="container">
          <div className={customSuccessAlert}>
            <p><span><b>"{this.props.success.strain}" </b></span>{this.props.success.message}</p>
            <button type="button" className="custom-success-close-button" onClick={() => this.props.clearRemoveMessage(clear)}>
              <span aria-hidden="true"><i className="ion-ios-checkmark"></i></span>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="modal fade" id="removeConfirmation" tabIndex="-1" role="dialog" aria-labelledby="removeConfirmationLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="removeConfirmationLabel">Removal confirmation</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="ion-ios-close"></i></span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to remove <strong>"{this.props.strain.name}"</strong> from inventory? </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Nope!</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.removeStrain.bind(this)}>Yes, remove from inventory</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container manage-box">
          <div className="row no-gutters">
            <div className="col-md-5 m-4">
              <h4>Description:</h4>
              <p className="strain-description">{this.props.strain.description}</p>
              <h4>Type:</h4>
              <p className="strain-type">{this.props.strain.type}</p>
            </div>
            <div className="col-md-5 m-4">
              <div className="detail-box">
                <div className="title">
                  <h3>{this.props.strain.name}</h3>
                </div>
                <div className="image-box">
                  <img src={this.props.strain.image} alt=""/>
                </div>
                <div className="price">
                  ${this.props.strain.price}<span>/ gram</span>
                </div>
                <div className="action-button">
                  <Link to={editRoute}>
                    <button className="manager-button edit-button">Edit</button>
                  </Link>
                </div>
                <div className="action-button">
                  <button className="manager-button remove-button" data-toggle="modal" data-target="#removeConfirmation">
                  Remove
                  </button>
                </div>
                <div className="action-button">
                  <Link to="/manage-strains">
                    <button className="manager-button edit-button">Back to inventory</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.specificStrain.errorMessage,
    strain: state.specificStrain.strainData,
    success: state.editStrain.success }
}

export default withRouter((
  connect(mapStateToProps, {
    fetchStrain,
    removeStrain,
    clearRemoveMessage })(ManageStrain)));
