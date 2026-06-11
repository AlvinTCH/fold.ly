export function isUserExpired(loggedInExpiry: string | null) {
  return !loggedInExpiry || new Date(loggedInExpiry) < new Date();
}
