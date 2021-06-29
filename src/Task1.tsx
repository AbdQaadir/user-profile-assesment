import {useState, useEffect} from 'react';
import './App.css';

function Task1() {
  const [error, setError]: [string, (error: string) => void] = useState<string>("");
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true);
    setError("");
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data: any) => {

        console.log({data})

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
    </div>
    
  );
}

export default Task1;
