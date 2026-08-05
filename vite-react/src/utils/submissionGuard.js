const WINDOW_MS = 60_000

export function getSubmissionCooldown(key) {
  try {
    const lastSubmission = Number(sessionStorage.getItem(`safe-food:${key}:last-submission`))
    const remaining = WINDOW_MS - (Date.now() - lastSubmission)
    return Number.isFinite(remaining) && remaining > 0 ? remaining : 0
  } catch {
    return 0
  }
}

export function recordSubmission(key) {
  try {
    sessionStorage.setItem(`safe-food:${key}:last-submission`, String(Date.now()))
  } catch {
    // The server must still enforce rate limits when an API is connected.
  }
}
