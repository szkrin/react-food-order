export default function validate(name, value) {
  switch (name) {
    case "email":
      return validateEmail(value);
    case "name":
      return notEmpty(value);
    case "street":
      return notEmpty(value);
    case "postal":
      return notEmpty(value);
    case "city":
      return notEmpty(value);
    case "phone":
      return validatePhone(value);
    case "payment":
      return notEmpty(value);
  }
}

function validateEmail(value) {
  if (
    String(value)
      .toLowerCase()
      .match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
  ) {
    return false;
  } else {
    return true;
  }
}

function validatePhone(value) {
  if (
    String(value)
      .toLowerCase()
      .match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
  ) {
    return false;
  } else {
    return true;
  }
}

function notEmpty(value) {
  return value.trim() === "";
}
