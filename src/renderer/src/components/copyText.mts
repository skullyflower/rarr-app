const copyText = (text: string): void => {
  const browser = navigator ?? new Navigator()
  if (text) {
    browser.clipboard?.writeText(text)
  }
}
export default copyText
