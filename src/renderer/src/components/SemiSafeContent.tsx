interface SemiSafeContentProps {
  rawContent: string | TrustedHTML
}
function SemiSafeContent({ rawContent }: SemiSafeContentProps): JSX.Element {
  const unsafePatterns = /(<[/]+script[^>]?>|javascript)/gi
  const lessDangerousContent = rawContent.toString().replace(unsafePatterns, '')
  return (
    <div
      dangerouslySetInnerHTML={{ __html: lessDangerousContent }}
      style={{ whiteSpace: 'pre-wrap' }}
    ></div>
  )
}

export default SemiSafeContent
