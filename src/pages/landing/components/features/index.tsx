import { CheckCircle, Users, Calendar, List, MessageSquare, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <List className="h-8 w-8 text-purple-500" />,
      title: "Task Management",
      description: "Create, assign, and track tasks with ease. Set priorities, deadlines, and dependencies.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with comments, file sharing, and real-time updates.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      title: "Project Timeline",
      description: "Visualize project progress with interactive Gantt charts and calendar views.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
      title: "Team Chat",
      description: "Communicate directly within your workflow with integrated messaging.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-500" />,
      title: "Progress Tracking",
      description: "Monitor completion rates and performance with customizable dashboards.",
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and processes to save time and reduce errors.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Productive Teams</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage projects, organize tasks, and boost team collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl p-6 bg-white border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;