import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("campo obrigatório"),
  email: Yup.string().required("campo obrigatório").email("Email inválido"),
  cpf: Yup.string().required("campo obrigatório"),
  nascimento: Yup.string().required("campo obrigatório"),
  telefone: Yup.string().required("campo obrigatório"),
  instagram: Yup.string().required("campo obrigatório"),
});