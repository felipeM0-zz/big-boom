import validator from "validator";
import { cnpj, cpf } from "cpf-cnpj-validator";

const verifyError = (v: string, i: string) => {
  if (validator.isEmpty(v)) {
    return ["error", "Nulo"];
  }

  if (i === "short" && v.trim().indexOf(" ") <= 0) {
    return ["error", "Inferior a 2 nomes"];
  }

  if (i === "inf8" && v.length < 8) {
    return ["error", "Telefone inválido"];
  }

  if (i === "inf11" && v.length < 11) {
    return ["error", "Celular inválido"];
  }

  if (i === "inf11+") {
    if (v.length <= 11) {
      if (!cpf.isValid(v)) {
        return ["error", "CPF inválido"];
      }
    } else {
      if (!cnpj.isValid(v)) {
        return ["error", "CNPJ inválido"];
      }
    }
  }

  if (i === "email" && !validator.isEmail(v)) {
    return ["error", "Email inválido"];
  }

  return ["", ""];
};

const verifyChanges = (current: {}, original: {}) => {
  let count: number = 0;
  for (let i = 0; i < 7; i++) {
    Object.values(current)[i] !== Object.values(original)[i] && count++;
  }
  return count <= 0 ? true : false;
};

const verifyEditionInput = (current: string, original: string) => {
  return current !== original ? ["edited", true] : ["", false];
};

export { verifyError, verifyChanges, verifyEditionInput };
