import {useState, useEffect} from 'react';

import Table from './Table';

import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);
  const [error, setError]: [string, (error: string) => void] = useState<string>("");
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    setError("");
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data: any) => {

        const extractedData = data.results.map((user: any) => {
          return {name: user.name, email: user.email, password: user.login.password, username: user.login.password, img: user.picture.medium}
        })

        setTableData(extractedData);

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

      { !loading && !error && tableData.length ? <Table users={tableData}/> : <></>}
     
    </div>
    
  );
}

export default App;
