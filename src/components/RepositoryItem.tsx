interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Sem Nome"}</strong>
      <p>{props.repository?.description ?? "Sem Descricao"}</p>

      <a href={props.repository?.html_url ?? ""}>Acessar repositórios</a>
    </li>
  );
}