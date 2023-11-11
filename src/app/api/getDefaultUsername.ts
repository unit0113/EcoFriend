export default function getDefaultUsername(email: string) {
  return email.split('@')[0]
}
