import React from 'react'
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from './UserHeader'

const PostList = props => {
  const { posts, fetchPostsAndUsers } = props
  React.useEffect(() => {
    fetchPostsAndUsers()
  }, [fetchPostsAndUsers])

  console.log(posts)

  const renderList = () => {
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="ui relaxed divided list">
      {renderList()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList)
