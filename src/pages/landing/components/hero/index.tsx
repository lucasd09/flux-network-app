import { CheckCircle } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const Hero = () => {
  return (
    <section className=" py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Team Tasks</span>, Simplified
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              The all-in-one task management platform designed specifically for teams. Boost productivity, streamline workflows, and achieve your goals together.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                Start for free
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-50">
                Book a demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-700">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-700">Free 14-day trial</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-white p-2 rounded-xl shadow-xl">
              <div className="bg-purple-50 rounded-lg overflow-hidden">
                <div className="bg-purple-500 p-4 flex justify-between items-center">
                  <div className="text-white font-medium">Marketing Team Dashboard</div>
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full" />
                    <div className="h-3 w-3 bg-yellow-500 rounded-full" />
                    <div className="h-3 w-3 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Website Redesign</div>
                      <div className="text-purple-500 text-sm font-medium">In Progress</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-purple-300 flex items-center justify-center text-white font-medium text-xs">JD</div>
                        <div className="h-8 w-8 rounded-full bg-purple-400 flex items-center justify-center text-white font-medium text-xs">AR</div>
                        <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium text-xs">TS</div>
                      </div>
                      <div className="text-sm text-gray-500">Due in 3 days</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Social Media Campaign</div>
                      <div className="text-green-500 text-sm font-medium">Completed</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-purple-400 flex items-center justify-center text-white font-medium text-xs">AR</div>
                        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium text-xs">MK</div>
                      </div>
                      <div className="text-sm text-gray-500">Yesterday</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Product Launch</div>
                      <div className="text-orange-500 text-sm font-medium">Pending</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-purple-300 flex items-center justify-center text-white font-medium text-xs">JD</div>
                        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium text-xs">MK</div>
                        <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium text-xs">TS</div>
                      </div>
                      <div className="text-sm text-gray-500">Next week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-12 w-12 bg-purple-300 rounded-full animate-float" />
            <div className="absolute -top-6 -right-6 h-16 w-16 bg-purple-200 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;