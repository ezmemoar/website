export default function () {
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  return {
    copyToClipboard,
  };
}
