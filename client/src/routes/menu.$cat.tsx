import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu/$cat')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/menu/$catgory"!</div>
}
