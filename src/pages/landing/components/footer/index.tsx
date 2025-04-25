import { Separator } from "../../../../components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-purple-600 mb-4">Flux Network</div>
            <p className="text-gray-600 mb-6 max-w-md">
              The all-in-one task management platform designed for teams. Boost productivity, streamline workflows, and achieve your goals together.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Updates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-200 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-gray-500 text-sm">
            © 2025 Flux Network. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;