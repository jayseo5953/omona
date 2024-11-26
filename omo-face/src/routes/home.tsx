import { Outlet, Link } from "react-router-dom";

export default function Home() {
  const pets = [
    { id: 1, name: "Omo" },
    { id: 2, name: "Gomo" },
  ];

  return (
    <>
      <div id="sidebar">
        <h1>How is Omo today?</h1>
        <nav>
          {pets.map((pet) => (
            <div>
              <Link to={`pets/${pet.id}`}>{pet.name}</Link>
            </div>
          ))}
        </nav>
      </div>
      <br />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
