import { Check } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Workspace",
      description: "Set up your team's workspace in just a few clicks. Customize it to match your team's workflow and preferences.",
      highlights: ["Unlimited team members", "Custom fields", "Role-based permissions"],
    },
    {
      number: "02",
      title: "Organize Tasks & Projects",
      description: "Create projects, add tasks, set deadlines, and assign them to team members. Group related tasks together for better organization.",
      highlights: ["Drag-and-drop interface", "Multiple view options", "Task dependencies"],
    },
    {
      number: "03",
      title: "Collaborate & Communicate",
      description: "Discuss tasks, share files, and provide feedback directly within the platform. Keep all project-related communication in one place.",
      highlights: ["Real-time updates", "File attachments", "Comment threads"],
    },
    {
      number: "04",
      title: "Track Progress & Report",
      description: "Monitor task completion, track team performance, and generate insightful reports to identify bottlenecks and improve efficiency.",
      highlights: ["Custom dashboards", "Performance analytics", "Exportable reports"],
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 border-none">Simple Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Flux Network Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple yet powerful workflow that adapts to how your team works best.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
              <div className="w-full md:w-1/2">
                <div className="bg-purple-50 rounded-2xl p-6 md:p-10 border border-purple-100">
                  <div className="bg-white rounded-xl h-64 flex items-center justify-center border border-purple-100">
                    <div className="text-4xl font-bold text-purple-500">Step {step.number}</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="text-purple-500 font-semibold mb-2">Step {step.number}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>

                <ul className="space-y-2">
                  {step.highlights.map((highlight, idx) => (
                    <li key={step.highlights[idx]} className="flex items-center">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;