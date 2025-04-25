import { CheckCircle } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Team's Productivity?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams that use Flux Network to collaborate effectively, deliver projects on time, and achieve their goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button className="bg-white text-purple-600 hover:bg-purple-50 hover:text-purple-700">
              Start for free
            </Button>
            <Button variant='outline' className="bg-transparent text-white hover:bg-purple-100">
              Schedule a demo
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-200 mr-2" />
              <span className="text-purple-100">14-day free trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-200 mr-2" />
              <span className="text-purple-100">No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-200 mr-2" />
              <span className="text-purple-100">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
