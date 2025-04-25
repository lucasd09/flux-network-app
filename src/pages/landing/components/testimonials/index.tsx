import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Flux Network has transformed how our marketing team collaborates. We've reduced our meeting time by 30% and increased productivity significantly.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc.",
      avatarText: "SJ"
    },
    {
      quote: "The ability to track tasks and visualize our project timeline has been a game-changer. Our product launches are now consistently on schedule.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCorp",
      avatarText: "MC"
    },
    {
      quote: "We've tried many task management tools, but Flux Network is the only one that truly adapts to our agency's workflow rather than forcing us to adapt to it.",
      author: "Aisha Patel",
      role: "Creative Director",
      company: "DesignSphere",
      avatarText: "AP"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-64 w-64 bg-purple-100 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-purple-100 rounded-full opacity-70 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Teams Everywhere</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about how Flux Network has improved their team's productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="backdrop-blur-sm bg-white/80 border-purple-100">
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg className="h-6 w-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                <p className="text-gray-700 mb-6">{testimonial.quote}</p>

                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-purple-500">
                    <AvatarFallback>{testimonial.avatarText}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
