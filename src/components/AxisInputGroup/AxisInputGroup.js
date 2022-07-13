import * as Styles from "./styles";
import Input from "../Input";

const AxisInputGroup = ({ type = "text", numberOfInputs }) => {
  return (
    <Styles.InputsAxisContainer>
      {[...Array(numberOfInputs)].map((_, i) => (
        <Input
          key={i}
          aria-label={`Insira aqui o ${i + 1}º valor`}
          type={type}
          placeholder={`Insira aqui o ${i + 1}º valor`}
        />
      ))}
    </Styles.InputsAxisContainer>
  );
};

export default AxisInputGroup;
