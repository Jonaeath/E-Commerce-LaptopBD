import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState({});

  // This api use for load user data
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  // Delete data from cart 65.5
  const handelDelete = (user) => {
    const agree = window.confirm(
      `Are You sure you want to Delete: ${user.ProductsName}`
    );
    if (agree) {
      // console.log('Remove Products with id:',user._id)
      fetch(`http://localhost:4000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Your user Delete successfully.");
            const remainingUser = users.filter((ord) => ord._id !== user._id);
            setUsers(remainingUser);
          }
        });
    }
  };

  const handelMakeAdmin = (id) => {
    fetch(`http://localhost:4000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            alert("Your user Delete successfully.");
            
          }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="font-bold text-xl text-amber-950">
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 &&
              users?.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <th>
                    { user?.role !== 'admin' && 
                        <button
                      onClick={() => handelMakeAdmin(user._id)}
                      className="btn btn-success bg-lime-500 btn-xs"
                    >
                      Make admin
                    </button>}
                  </th>
                  <th>
                    <button
                      onClick={() => handelDelete(user)}
                      className="btn btn-success text-white bg-secondary btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
