import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends React.Component {
  componentDidMount() {
    if (this.props.userId < 11) {
      this.props.fetchUser(this.props.userId);
    }
  }
  render() {
    if (!this.props.user) {
      return <div>null</div>;
    }
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find(user => user.id === ownProps.userId) };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
