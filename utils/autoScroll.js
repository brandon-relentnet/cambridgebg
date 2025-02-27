export function scrollToNextSection(el) {
    const nextSectionEl = document.getElementById(
        el
    );
    nextSectionEl?.scrollIntoView({ behavior: "smooth" });
};
