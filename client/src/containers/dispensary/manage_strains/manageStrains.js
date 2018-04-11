import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchStrains } from '../../../actions/strain_list/actionStrainList';
import './manageStrains.css';


class ManageStrains extends Component {
  componentDidMount() {
    this.props.fetchStrains();
  }
  renderSearchField(field) {
    return (
      <div>
        <div className="input-group">
          <input className="form-control"
            type="text" maxLength="62" required placeholder="Search"
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
                <img src={strain.image} />
              </div>
              <div className="price">
                ${strain.price}<span>/ gram</span>
              </div>
              <div className="manage-button-box">
                <button className="manager-button button-block">Manage</button>
              </div>
            </div>
          </div>
      );
    });
  }

  onSubmit(values) {
    // this.props.requestSearch(values, this.props);
    console.log('search made');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className="search-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Search" name="strain" component={this.renderSearchField} />
        </form>
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
  return { errorMessage: state.strainList.errorMessage, strains: state.strainList.strains };
}

export default reduxForm({
  form: 'LoginForm'
})(connect(mapStateToProps, { fetchStrains })(ManageStrains));
