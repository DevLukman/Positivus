//Generated from ChatGPT
// Helper function to split text into lines
export const splitTextIntoLines = (element) => {
  if (!element) return [];
  const words = element.textContent.split(" ");
  element.innerHTML = ""; // Clear the existing text
  let lines = [];
  let tempLine = document.createElement("div");
  tempLine.style.display = "block";
  tempLine.style.whiteSpace = "nowrap";
  tempLine.style.width = "max-content";
  element.appendChild(tempLine); // Temporarily add to measure size
  words.forEach((word) => {
    let wordSpan = document.createElement("span");
    wordSpan.textContent = word + " ";
    tempLine.appendChild(wordSpan);
    // If the line breaks, start a new line
    if (tempLine.offsetWidth > element.clientWidth) {
      tempLine.removeChild(wordSpan); // Remove last word from current line
      let newLine = tempLine.cloneNode(true);
      element.appendChild(newLine); // Add the completed line
      lines.push(newLine);
      // Start a new line
      tempLine.innerHTML = "";
      tempLine.appendChild(wordSpan);
    }
  });

  if (tempLine.innerHTML.trim() !== "") {
    element.appendChild(tempLine);
    lines.push(tempLine);
  }

  return lines;
};

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
