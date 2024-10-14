"use client";

interface CodeCopyProps {
  text: string;
}

export default function CopyURLs({ text }: CodeCopyProps) {
  function handleCopy() {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  return (
    <pre
      onClick={handleCopy}
      className="pointer-events-none relative z-[999999999] block w-full cursor-pointer rounded-xl border border-slate-100 bg-slate-50 p-8 text-sm"
    >
      <div className="absolute right-8 top-8">icon</div>
      <code>{text}</code>
    </pre>
  );
}
