import React from 'react'

interface User {
    name: {title: string, first: string, last: string},
    email: string,
    username: string,
    password: string,
    img?:string
}

interface Users {
    users: User[];
}
const Table = ({ users }: Users) => {
    return (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => {
              return (
                <tr>
                  <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  {user.img ? (
                    <td>
                    <img src={user.img} alt="profile" />
                  </td>
                  ) : <></>}
                  
                </tr>
              )
            })}
            
          </tbody>
        </table>
      
    )
}

export default Table
