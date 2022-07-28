import { Container } from "./style";

const Button = ({
  children,
  negativeColor = true,
  width = "100%",
  pinkBtn = true,
  othersBtn = false,
  height = "40px",
  isDate = true,
  ...rest
}) => {
  return (
    <Container
      type="button"
      negativeColor={negativeColor}
      width={width}
      pinkBtn={pinkBtn}
      othersBtn={othersBtn}
      height={height}
      isDate={isDate}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
