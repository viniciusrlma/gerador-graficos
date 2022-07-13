import * as Styles from "./styles";

const Button = (props) => {
  const { children, loading, ...restProps } = props;

  return (
    <Styles.Button {...restProps}>
      {" "}
      {loading ? "CARREGANDO..." : children}{" "}
    </Styles.Button>
  );
};

export default Button;
