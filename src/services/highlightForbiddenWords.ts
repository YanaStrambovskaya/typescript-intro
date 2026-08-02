function highlightForbiddenWords(
  text: string,
  forbiddenWords: string[]
): string {
  if (text.length === 0) return "";
  if (forbiddenWords.length === 0) return text;

  let updatedText = text;
  forbiddenWords.forEach((word) => {
    updatedText = updatedText.replace(word, `<del>${word}</del>`);
  });
  return updatedText;
}

export default highlightForbiddenWords;
