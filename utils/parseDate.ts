import dayjs from 'dayjs'

export const parseDate = (
  date: Date | null,
  format?: string
): string | null => {
  const dateFormat = format || 'DD.MM.YYYY'
  return date ? dayjs(date).format(dateFormat) : null
}
