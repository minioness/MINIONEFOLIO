type textHighlightProps = {
  count: number;
  highlight: string;
  rest: string;
  highlightClass: string;
};

export function textHighlight({
  count,
  highlight,
  rest,
  highlightClass,
}: textHighlightProps) {
  const hText = highlight.slice(0, Math.min(count, highlight.length));
  const restCount = Math.max(0, count - highlight.length);
  const rText = rest.slice(0, restCount);

  return (
    <>
      <span className={highlightClass}>{hText}</span>
      {rText}
    </>
  );
}
