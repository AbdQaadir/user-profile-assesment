import {useState, useEffect} from 'react';

import './App.css';

function Task2() {
  const [users, setUsers] = useState([]);
  const [stringifiedUsers, setStringifiedUsers] : [string, (users: string) => void] = useState("");
  const [error, setError]: [string, (error: string) => void] = useState<string>("");
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    setError("");
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data: any) => {

        console.log({data})

        setStringifiedUsers(JSON.stringify(data.results, null, 3));

        setUsers(data.results);


        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message)
      })
  }
  useEffect(() => {
    fetchData();

    // eslint-disable-next-line
  }, [])
  return (
    <div className="container">
      <div className="container-header">
        <button onClick={() => !loading ? fetchData(): null}>{loading ? "Refreshing..." : "Refresh"}</button>
        {error && <p>{error}</p>}
      </div>


      {!loading && !error && users.length ? (
        <div className="stringify">
          <pre>
            {stringifiedUsers}
          </pre>
        </div>
      ) : <></>}
     
    </div>
    
  );
}

export default Task2;
