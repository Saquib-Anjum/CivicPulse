import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Send } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
<section 
  className="bg-gradient-to-br from-civic-purple to-civic-dark-purple text-white py-16 md:py-24" 
  style={{ 
    backgroundImage: 'url(/bg.jpg)', 
    backgroundSize: 'cover', 
    backgroundPosition: ' center',  // Change to 'top center' to avoid cropping at the bottom
    backgroundAttachment: 'fixed'       // Optional, to make the image fixed as you scroll
  }}
>
  <div className="container-custom mx-auto text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      Report. Connect. Resolve.
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-civic-soft-purple">
      CivicPulse makes it easy to report community issues and track their resolution progress.
    </p>
    <Link to="/report" className="btn-accent text-base md:text-lg px-6 py-3">
      Report an Issue
    </Link>
  </div>
</section>


        {/* How It Works Section */}
        <section className="section-padding bg-civic-light-bg">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Reporting community issues has never been easier. Our simple 3-step process helps you make a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-civic-soft-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Camera className="text-civic-purple w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Capture</h3>
                <p className="text-gray-600 text-center">
                  Take a photo of the issue you've spotted in your community that needs attention.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-civic-soft-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="text-civic-purple w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Locate</h3>
                <p className="text-gray-600 text-center">
                  Provide the location details where the issue is found to make it easy to find and fix.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-civic-soft-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Send className="text-civic-purple w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">Submit</h3>
                <p className="text-gray-600 text-center">
                  Send your report to alert local authorities and track the progress of resolution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-custom mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to make your community better?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of citizens who are making a difference by reporting issues that matter.
            </p>
            <Link to="/report" className="btn-primary text-base px-6 py-3 inline-block">
              Report an Issue Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
