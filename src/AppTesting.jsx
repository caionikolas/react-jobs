const AppTesting = () => {
  const name = 'Nikolas'
  const x = 10
  const y = 20
  const names = ['Maria', 'Jose', 'Carla', 'Roberto']
  const Loggein = false;
  const Online = false;

  return (
    <>
      <div className="text-5xl">App-testing</div>
      <p>Hello {name}</p>
      <p>a soma de { x } mais { y } é { x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{ name }</li>
        ))}
      </ul>
      { Loggein ? <p>Hello ADM</p> : <p>Hello membro</p>}
      { Online &&  <p>Hello Professor</p>}
    </>
  )
}

export default AppTesting