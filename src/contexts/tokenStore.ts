let currentToken: string | null = null;

/**
 * Called from your AuthContext (or login/logout flow).
 */
export function setAuthToken(token: string | null) {
  currentToken = token;
}

/**
 * Used by your axios interceptor to get the latest token.
 */
export function getAuthToken(): string | null {
  return currentToken;
}
