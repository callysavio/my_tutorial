import Button from "./Button";

function SecondaryButton(props) {
  return (
    <Button color="green" padding={20} radius={50} text="Secondary btn">
      {props.children}
    </Button>
  );
}
export default SecondaryButton;
