import projects from "../../data/projects"

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <main>
      <h1>{project.title}</h1>
      <img src={project.images[0].url} alt={project.images[0].alt} />
      <p>{project.description}</p>
      <div>
        {project.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </main>
  )
}