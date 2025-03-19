// Helper function to split text into characters
export const splitTextIntoChars = (element) => {
  if (!element) return [];

  const text = element.textContent;
  element.innerHTML = ""; // Clear existing text

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block"; // Ensure GSAP animations work correctly
    element.appendChild(span);
    return span;
  });

  return chars;
};
