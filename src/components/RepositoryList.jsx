const repositoryName = "unform"

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in react</p>

          <a href="#">
            Acessar repositórios
          </a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in react</p>

          <a href="#">
            Acessar repositórios
          </a>
        </li>
        
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in react</p>

          <a href="#">
            Acessar repositórios
          </a>
        </li>
      </ul>
    </section>
  )
}