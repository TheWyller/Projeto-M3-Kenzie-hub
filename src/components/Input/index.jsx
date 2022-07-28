import { Container } from "./styles";

function Input({ label, register, name, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <input {...register(name)} {...rest} />
    </Container>
  );
}

export default Input;
