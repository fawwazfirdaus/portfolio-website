export function formatDate(date: string) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);
  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const now = new Date();
  const diffTime = Math.abs(now.getTime() - targetDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    return `${fullDate} (Today)`;
  } else if (diffDays < 7) {
    return `${fullDate} (${diffDays}d ago)`;
  } else if (diffDays < 30) {
    const weeksAgo = Math.floor(diffDays / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (diffDays < 365) {
    const monthsAgo = Math.floor(diffDays / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(diffDays / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
