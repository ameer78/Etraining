import { Link, useParams } from "react-router-dom";
import UseProtectedRoute from "../ProtectedRoute";

const teams = [
    {
        id: 1,
        name: "Saleh",        
    },
    {
        id: 3,
        name: "Sally",
    },
    {
        id: 2,
        name: "Nadeem",
    }
]

const Teams = () => {
  return teams.map(item => (<div key={item.id}>
    <Link  to={`/teams/${item.id}`} >{item.name}</Link>
  </div>))
};

// export default UseProtectedRoute(Teams)
export default Teams