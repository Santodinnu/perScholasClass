import Header from "./Header";
import Searchbar from "./Searchbar";
import Employeelist from "./Employeelist";
import Employeepage from "./Employeepage";
import { Route } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <div>
        <Header />
        <Searchbar />
        <Employeelist />
      </div>
    </div>
  );
}
