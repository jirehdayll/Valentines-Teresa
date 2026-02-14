onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  setTimeout(() => {
    document.getElementById("valentinesPopup").classList.add("active");
  }, 10000);
};