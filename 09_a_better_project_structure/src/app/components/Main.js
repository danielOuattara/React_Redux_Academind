export const Main = (props) => {
  return (
    <div>
      <h2>Main Page : </h2>
      <button onClick={() => props.changeUsername("Anna")}>
        Change Username
      </button>
    </div>
  );
};
