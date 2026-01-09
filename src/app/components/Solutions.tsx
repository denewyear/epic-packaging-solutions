// list of packaging solutions and capabilities we offer
const solutions = [
        {
            name: 'Food safe, FDA compliant construction',
        },
        {
            name: 'Fold-away work stations, staircases, mezzanines, safety guards',
},
        {
            name: 'Accumulation tables/conveyors, transfer tables, loading/collection tables',
},
        {
            name: 'Separator/Timing wheel installation',
},
        {
            name: 'Expedited Orders',
},
        {
            name: 'Personal touch',
},
        {
            name: 'Flexible scheduling',
        },
        {
            name: 'Inventory management',
},
        {
            name: 'Just-in-time delivery',
},
        {
            name: 'Fast turnaround times ',
},
        {
            name: 'Express Shipping',
},
        {
            name: 'Quality Guarantee',
},
    ]

// solutions section component showcasing our packaging capabilities
export default function Solutions() {

return(
    <div id="solutions" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* section header */}
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Our Packaging
                </h2>
                {/* section description */}
                <p className="mt-6 font-semibold text-lg/8 text-gray-600">
                    Work with our design team to create the facility that perfectly fits your safety goals and output capabilities.
                </p>
            </div>
            {/* grid layout of solutions - responsive columns */}
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {solutions.map((solution) => (
                    <div key={solution.name}>
                        <dt className="mt-6 text-lg/8 text-gray-600">{solution.name}</dt>
                    </div>
                ))}
            </dl>
        </div>
    </div>
)
}
