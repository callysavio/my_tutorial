const Prop = ({ id, name }) => {
  return (
    <ul>
      <li key={id}>
        {id} {name}
      </li>
    </ul>
  );
};

export default Prop;
