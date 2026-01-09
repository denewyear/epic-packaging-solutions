// icons for services (imported but not currently used)
import { CubeIcon, TruckIcon, ShieldCheckIcon, ScaleIcon } from '@heroicons/react/24/outline'

// list of technical services we offer
const services = [
  {
    name: 'Technical Services',
    description: '',
    features: ['Bottle Unscramblers', 'Tablet/Capsule Counters', 'Liquid Fillers', 'Powder Fillers', 'Tablet Presses', 'Extruders', 'Plastic Molding', 'Dessicant/Cotton Inserters', 'Cappers', 'Sleevers/Sealers', 'Heat/Steam Tunnels', 'Metal Detectors', 'Labelers', 'Printers', 'Presses, other miscellaneous machinery'],
  },
]

// detailed features and capabilities we provide
const features = [
        {
            name: 'Machinery Procurement',
            description:
                'If you are in search of a certain piece of equipment, let us know! We will use our network and vendors to help you find a good deal on a single piece or entire packaging line. We have turn-key capabilities to have your business going from nothing to full blown production, fast.',
        },
        {
            name: 'In-house Fabrication',
            description:
                'Need something specific? We can make it, we produce our very own collection tables, custom length conveyors, and accumulation tables. Consult with our engineers and production team to plan out your ideal production line, we will make those schematics a reality. ',
        },
        {
            name: 'Part Customization',
            description:
                'We provide part customization, and reproduction. Check in with our engineering department and see if we can be of service, we understand that downtime is not an option and our fab team is here to help',
        },
        {
            name: 'Rebuilding Machinery',
            description:
                'Apart from providing machinery, we also take in machinery for rebuilding. Parts and labor will be quoted before start(cleaning and refacing of shafts included)',
        },
        {
            name: 'Decades of service',
            description:
                'We know production, our talented and dedicated staff has decades of shared experience in various production settings. From the material handling aspect, maintaining machinery, to finished product we are here to help resolve challenges.',
        },
    ]

// services section component that displays our production capabilities
export default function Services() {
  return (
    <div id="services" className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* section header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Our Production Services
          </h2>
          {/* section description */}
          <p className="mt-6 text-lg/6 text-gray-700 dark:text-gray-300">
            Epic offers mobile technician services, our technicians will come out and help assess, diagnose, and potentially repair machinery that is down or has been out of service. They offer vast experience in various types of manufacturing settings, with different types of equipment. (Serving Southern CA-Baja California MX)
          </p>
        </div>
        {/* services content */}
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 ">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16">
            {/* map through each service */}
            {services.map((service) => (
              <div key={service.name} className="flex flex-col text-center">
                <dt className="text-xl font-semibold leading-7 text-white ">
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-white">
                  <p className="flex-auto">{service.description}</p>
                  {/* list of technical equipment we work with */}
                  <div className="mt-6">
                    <ul className="space-y-2 mx-auto w-fit">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-white">
                          <div className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
              {/* detailed features section */}
              <dl className="mx-auto mt-16 max-w-2xl text-base/7 flex flex-col gap-8 ">
                {features.map((feature) => (
                    <div key={feature.name}>
                        <dt className="text-xl font-semibold leading-7 text-white">{feature.name}</dt>
                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-white">{feature.description}</dd>
                        <ul className="list-inside">
                        </ul>
                    </div>
                ))}
            </dl>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
