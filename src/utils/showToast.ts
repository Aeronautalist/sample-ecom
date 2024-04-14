const showToast = (text = "Action pressed") => {
  const event = new CustomEvent("showToast", {
    detail: {
      text,
    },
    bubbles: true,
    composed: true,
  });
  document.dispatchEvent(event);
};

export default showToast;
