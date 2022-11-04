import type { FormEvent } from "react";
import { useInputText } from "../../hooks";
import { CssTextField } from "./styles";

export function Form() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const input = useInputText(initialValues);

  async function handleSubmit(event?: FormEvent): Promise<void> {
    event?.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 grid-cols-1">
        <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2">
          <CssTextField
            name="name"
            type="text"
            required
            variant="outlined"
            label="Nome"
            helperText={input.errors.name && input.errors.name}
            error={input.errors.name ? true : false}
            value={input.name}
            onChange={input.onChange}
            onBlur={input.onBlur}
            // disabled={loading}
          />
          <CssTextField
            name="email"
            type="email"
            required
            variant="outlined"
            label="Email"
            helperText={input.errors.email && input.errors.email}
            error={input.errors.email ? true : false}
            value={input.email}
            onChange={input.onChange}
            onBlur={input.onBlur}
            // disabled={loading}
          />
        </div>

        <CssTextField
          name="subject"
          type="text"
          required
          variant="outlined"
          label="Assunto"
          helperText={input.errors.subject && input.errors.subject}
          error={input.errors.subject ? true : false}
          value={input.subject}
          onChange={input.onChange}
          onBlur={input.onBlur}
          // disabled={loading}
        />

        <CssTextField
          name="message"
          multiline
          rows={5}
          required
          variant="outlined"
          label="Mensagem"
          helperText={input.errors.message && input.errors.message}
          error={input.errors.message ? true : false}
          value={input.message}
          onChange={input.onChange}
          onBlur={input.onBlur}
          // disabled={loading}
        />
      </div>

      <div className="w-max ml-auto mt-6">
        <button className="bg-orange1 rounded-lg py-2 px-6 hover:bg-gray2">
          Enviar
        </button>
      </div>
    </form>
  );
}
