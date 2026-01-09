// icons for contact information
import { BuildingOfficeIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
// next.js optimized image component
import Image from 'next/image'

// footer navigation links organized by category
const navigation = {
  services: [
    { name: 'Custom Packaging', href: '#' },
    { name: 'Bulk Orders', href: '#' },
    { name: 'Express Shipping', href: '#' },
    { name: 'Quality Assurance', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Process', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  support: [
    { name: 'Contact Support', href: '#' },
    { name: 'Request Quote', href: '#' },
    { name: 'Track Order', href: '#' },
    { name: 'Returns', href: '#' },
  ],
}

// main footer component with contact info and navigation links
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* company info section */}
          <div className="space-y-8">
            {/* company logo in footer */}
            <Image
              alt="Epic Packaging Solutions"
              src="/company-logo.jpg"
              width={128}
              height={64}
              className="h-32 w-auto"
            />
            {/* company description */}
            <p className="text-base text-gray-300">
              Professional packaging solutions for businesses of all sizes. From custom designs to bulk orders,
              we deliver quality packaging that protects your products and enhances your brand.
            </p>
            {/* contact information */}
            <div className="space-y-4">
              {/* business locations */}
              <div className="flex items-center text-gray-300">
                <BuildingOfficeIcon className="h-5 w-5 mr-3" />
                <span className="text-sm">Temecula, CA - Tijuana, B.C.</span>
              </div>

              {/* contact email */}
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <span className="text-sm">sales@epicpacksolutions.com</span>
              </div>
            </div>
          </div>
          {/* navigation links section */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* services links */}
              <div>
                <h3 className="text-sm font-semibold text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* company links */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* support links */}
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 Epic Packaging Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}