import React, {useEffect} from "react";
import { connect } from "react-redux";
import {fetchUser} from '../redux/actionCreator'

const Main = (props) => {
    const {fetchUser} = props
    const {users, isLoading, errMess} = props.data
    
    useEffect(() => {
      console.log("useEffect");
      fetchUser();
    }, [])

    const userList = users.map((user) => {
      return (
        <li key={user._id}>
          {user.firstName}&nbsp;{user.lastName}
        </li>
      );
    });

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(errMess){
      return <h1>{errMess}</h1>
    }
    
  return (
    <>
      <h1>Users List</h1>
      {userList}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
