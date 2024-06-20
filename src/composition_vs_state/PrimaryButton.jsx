import Button from "./Button";
function PrimaryButton(props) {
  return (
    <Button
      color="blue"
      padding={10}
      radius={5}
      text="Primmary Btn"
    >
      {props.children}
    </Button>
  );
}

export default PrimaryButton;
