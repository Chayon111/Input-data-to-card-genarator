import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Form({ genarateCard }) {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    genarateCard(name, age);
  };
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <div className="mb-3">
          <label className="form-label fs-3 ">Name</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter your name"
            ref={nameRef}
          />

          <br />

          <label className="form-label fs-3">Age</label>
          <input
            required
            type="number"
            className="form-control"
            placeholder="Enter your age"
            ref={ageRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
