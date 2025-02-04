import 'react'
function CalApp() {
  const a = 50
  const b = 15
  const c = a + b
  const d = a - b
  const e = a * b
  const f = a / b

  return (
    <>
      <h1 align="center">Calculator App</h1>
      <h3 align="center">Addition: {c}</h3>
      <h3 align="center">Substraction: {d}</h3>
      <h3 align="center">Multiplication: {e}</h3>
      <h3 align="center">Division: {f}</h3>
    </>
  )
}

export default CalApp
