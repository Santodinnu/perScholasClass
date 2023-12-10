import data from "./Data";

export default function Employee() {
    return ( 
        <div key={person.id}>
          <h3>{person.name}</h3>
          <h4>{person.title}</h4>
          <h5>{person.office}</h5>
          <h5>{person.mobile}</h5>
          <h5>{person.mobile}</h5>
          <h5>{person.email}</h5>
          <img src={person.headshot} />
        </div>
    );
}