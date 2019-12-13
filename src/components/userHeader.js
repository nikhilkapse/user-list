import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends React.Component {
  componentDidMount() {
    //this.props.fetchUser(this.props.userId);
  }
  render() {
    console.log("Users", this.props);
    // const user = this.props.users.find(user => user.id === this.props.userId);

    // if (!user) {
    //   return <div>null</div>;
    // }
    return <div className="header">User Header</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
