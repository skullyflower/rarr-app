const copyText = (text: string): void => {
  const browser = navigator ?? new Navigator()
  if (text) {
    browser.clipboard?.writeText(text)
  }
}

export const formatTitle = (title: string): string => {
  const datePattern = /(\d{4})-(\d{1,2})-(\d{1,2})/
  if (datePattern.test(title)) {
    return new Date(title).toDateString()
  }
  return title
}

export default copyText
