import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { fetchStrains, searchStrain, clearMessage } from '../../../actions/strain_list/actionStrainList';
import { clearRemoveMessage } from '../../../actions/manage_strains/actionRemoveStrain';
import './manageStrains.css';
import './media-queries-manageStrains.css';


class ManageStrains extends Component {
  componentDidMount() {
    this.props.fetchStrains();
  }
  renderSearchField(field) {
    return (
      <div>
        <div className="input-group">
          <input className="form-control"
            type="text" maxLength="62" placeholder="Search"
            {...field.input} />
            <div className="input-group-prepend">
              <div className="input-group-text">
                <button className="search-button" type="submit"><i className="ion-ios-search-strong search-icon"></i></button>
              </div>
            </div>
        </div>
     </div>
    );
  }

  renderStrainList() {
    return _.map(this.props.strains, strain => {
      return (
          <div className="col-md-4 p-4" key={strain._id}>
            <div className="content-box">
              <div className="title">
                <h3>{strain.name}</h3>
              </div>
              <div className="image-box">
                <img src={strain.image} alt="" />
              </div>
              <div className="price">
                ${strain.price}<span>/ gram</span>
              </div>
              <div className="manage-button-box">
                <Link to={`/manage-strain/${strain._id}`}>
                  <button id={strain._id} className="manage-button button-block">Manage</button>
                </Link>
              </div>
            </div>
          </div>
      );
    });
  }

  onSubmit(values) {
    this.props.searchStrain(values, this.props.errorMessage);
  }

  render() {
    const { handleSubmit } = this.props;
    const clear = '';
    var customErrorAlert = classNames({
      'col-md-10 offset-md-1': true,
      'custom-alert': this.props.errorMessage,
      'custom-alert-close': true
    });
    var customSuccessAlert = classNames({
      'col-md-10 offset-md-1': true,
      'custom-success-alert': this.props.removeSuccess.message,
      'custom-alert-close': true
    });
    return (
      <div className="manage-strains">
        <form className="search-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Search" name="strain" component={this.renderSearchField} />
        </form>
        <div className="container">
          <div className={customErrorAlert}>
            <p>Your search for <b>"{this.props.errorMessage}"</b> did not return any products.</p>
            <button type="button" className="custom-close" onClick={() => this.props.clearMessage(clear)}>
              <span aria-hidden="true"><i className="ion-close-circled"></i></span>
            </button>
          </div>
        </div>
        <div className="container">
          <div className={customSuccessAlert}>
            <p><span><b>"{this.props.removeSuccess.strain}"</b></span> {this.props.removeSuccess.message}</p>
            <button type="button" className="custom-success-close-button" onClick={() => this.props.clearRemoveMessage(clear)}>
              <span aria-hidden="true"><i className="ion-ios-checkmark"></i></span>
            </button>
          </div>
        </div>
        <div className="strains-box">
          <div className="container">
            <div className="row no-gutters">
              {this.renderStrainList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    removeSuccess: state.removeStrain.success,
    errorMessage: state.strainList.errorMessage,
    strains: state.strainList.strains };
}

export default withRouter(reduxForm({
  form: 'SearchForm'
})(connect(mapStateToProps, { fetchStrains, searchStrain, clearMessage, clearRemoveMessage })(ManageStrains)));
