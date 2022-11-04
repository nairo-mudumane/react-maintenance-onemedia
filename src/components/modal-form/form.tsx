import React from "react";
import { CssTextField } from "./styles";
import { useFormModal, useInputText } from "../../hooks";
import { api } from "../../resources";
import { Alert } from "@mui/material";

export function Form() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const input = useInputText(initialValues);
  const { onClose: closeModal } = useFormModal();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [isDone, setIsDone] = React.useState<boolean>(false);
  const [validForm, setValidForm] = React.useState<boolean>(false);

  async function handleSubmit(event?: React.FormEvent): Promise<void> {
    event?.preventDefault();

    const data = {
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
    };

    window.alert(JSON.stringify(data));
    input.clear();
    closeModal();

    // await api.post(`/`)
  }

  React.useEffect(() => {
    if (
      input.name !== "" &&
      input.email !== "" &&
      input.subject !== "" &&
      input.message !== ""
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [input.name, input.email, input.subject, input.message]);

  return (
    <React.Fragment>
      {error ? (
        <div className="mb-3">
          <Alert severity="error" className="text-sm font-semibold">
            <div>Error: {error}</div>
          </Alert>
        </div>
      ) : (
        isDone && (
          <div className="mb-3">
            <Alert severity="success" className="text-sm font-semibold">
              <div>Mensagem enviada, retornaremos em breve!</div>
            </Alert>
          </div>
        )
      )}

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
              disabled={loading}
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
              disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
        </div>

        <div className="w-max ml-auto mt-6">
          <button
            disabled={loading || !validForm}
            className="bg-orange1 rounded-lg py-2 px-6 transition-all delay-75 hover:bg-gray2 disabled:bg-transparent disabled:text-[transparent]"
          >
            Enviar
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
