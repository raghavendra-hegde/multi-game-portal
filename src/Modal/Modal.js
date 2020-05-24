import React, { Component } from "react";
import "./modal.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../actions/openModal";

class Modal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  closeModal = ()=> {
      this.props.openModal()
  }
  render() {
    let modalDisplayStyle;

    if (this.props.siteModal.openClose === "open") {
      modalDisplayStyle = { display: "block" };
    } else {
      modalDisplayStyle = { display: "none" };
    }

    return (
      <div className="site-modal" style={modalDisplayStyle}>
        <div className="modal-content">
          <div className="col right">
            <span onClick={this.closeModal} className="close">
              &times;
            </span>
          </div>
          <div className="">{this.props.siteModal.content}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        siteModal: state.siteModal
    }
}

function mapDispatchToProps(dispatcher){
    return bindActionCreators({
        openModal: openModal
    }, dispatcher);
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
