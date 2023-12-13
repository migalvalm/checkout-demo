export function formatCardNumber(field, event) {
  let val = event.target.value;

  // Check if the input new value is bigger than previous value and if length is less than 16 (Max number for card numbers)
  if (val.length > field.value.length && val.length < 16) {
    // This will remove all whitespaces
    val = val.replace(/\s/g, '');

    // This will add a whitespace every 4 digits
    val = val.replace(/(.{4})/g, '$1 '); // add space every 4 digits
  }

  // This will call the original formik's onChange function
  // Since we overrided it, this is necessary to call it manually again so that the internal input update in Formik is handled correctly
  field.onChange({
    ...event,
    target: {
      ...event.target,
      value: val,
      id: event.target.id,
      name: event.target.name,
    },
  });
}