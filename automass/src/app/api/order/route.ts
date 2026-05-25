// Email handled by FormSubmit directly from frontend
// No backend route needed
export async function POST() {
  return Response.json({ message: "Use FormSubmit directly" })
}

