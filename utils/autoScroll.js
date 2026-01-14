export function scrollToNextSection(el) {
  if (typeof document === "undefined") return;
  const nextSectionEl = document.getElementById(el);
  nextSectionEl?.scrollIntoView({ behavior: "smooth" });
}
