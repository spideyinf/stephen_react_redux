import React from "react"
import { connect } from "react-redux";

const UserHeader = props => {
  const { user } = props


  return (
    user ?
      <div className="header">{user.name}</div> :
      null
  )
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader)
