import { FC } from 'react';

// Sample open source project data - replace with your actual data
const openSourceProjects = [
  {
    id: 1,
    name: "SciuxJs",
    description: "一个用于生成可交互式图形的标记语言",
    githubUrl: "#",
    docsUrl: "#"
  },
  {
    id: 2,
    name: "Sciux XML",
    description: "Sciux语法解析器",
    githubUrl: "#",
    docsUrl: "#"
  },
  {
    id: 3,
    name: "Sciux Laplace",
    description: "Sciux组件库",
    githubUrl: "#",
    docsUrl: "#"
  },
];

interface ProjectCardProps {
  name: string;
  description: string;
  githubUrl: string;
  docsUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ name, description, githubUrl, docsUrl }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-bold mb-3">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex gap-4">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-linear-123 from-[#FFE373] via-[#F4C09F] to-[#DC73FF] text-white font-medium rounded-lg"
        >
          GitHub
        </a>
        <a 
          href={docsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300"
        >
          Documentation
        </a>
      </div>
    </div>
  );
};

export default function OpenSource() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-4xl font-bold">开源项目</h1>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {openSourceProjects.map(project => (
            <ProjectCard 
              key={project.id}
              name={project.name}
              description={project.description}
              githubUrl={project.githubUrl}
              docsUrl={project.docsUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}