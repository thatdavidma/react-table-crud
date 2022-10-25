import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import UserList from './Components/UserList/UserList';
import env from './env';
import Store from './Redux/Store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { resetSelectedUsers } from './Redux/SelectionUsers';
import { resetCurrentUser } from './Redux/CurrentUser';
import UserDetails from './Components/UserDetails/UserDetails';

const client = new ApolloClient({
  uri: env.GRAPHQL_ENDPOINT,
  request: operation => {
    operation.setContext({
      headers: {
        'x-api-key': env.GRAPHQL_API_KEY,
      }
    })
  }
});

const ALL_USERS_QUERY = gql`
  query {
    allUsers {
      email
      name
      role
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY);
  const [userList, setUserList] = useState([]);
  const selectUsersObj = useSelector((state) => state.selectUsers);
  const user = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setInitialUserList(data["allUsers"])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function setInitialUserList(userList) {
    // One time setup for the initial User List
    console.log('MOUNTING USERS: ' + userList)
    setUserList(userList)
  }

  function deleteSelectedUsers() {
    setUserList(userList.filter(i => !selectUsersObj.selectUsers.find(f => f.email === i.email)));
    dispatch(resetSelectedUsers())
  }

  function saveUserDetails(name, email, role){
    // Update object in state array and iterate over until email matches the saved user details
    setUserList(current =>
      current.map(obj => {
        if (obj.email === email) {
          return {...obj, name: name, role: role};
        }
        return obj;
      }),
    );
    console.log("RESETTING")
    dispatch(resetSelectedUsers())
    console.log("RESETTING AGAIN")
    dispatch(resetCurrentUser())
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  console.log("Current User Name: " +user.user.name)
  console.log("Current User Email: " +user.user.name)
  console.log("Current User Role: " +user.user.role)
  console.log("Selected Users: " +selectUsersObj.selectUsers)
  return (
    <div>
      {user.user.name ? <UserDetails userDetails={user.user} saveUserDetails={saveUserDetails}/> : <UserList listOfUsers={userList} deleteSelectedUsers={deleteSelectedUsers}/>}
    </div>
  )

}

const Root = () => (
  <ApolloProvider client={client}>
    <Provider store={Store}>
      <App />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));