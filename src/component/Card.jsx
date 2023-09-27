// eslint-disable-next-line react/prop-types
export default function Card({ name, age }) {
  return (
    <div>
      <div
        className="card text-white bg-dark m-3 mt-5 "
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">
          <h3>{name}</h3>
        </div>
        <div className="card-body">
          <h6 className="card-title">Age: {age} </h6>
        </div>
      </div>
    </div>
  );
}
