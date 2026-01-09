// import ui components for interactive menu and navigation
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
// next.js optimized image component for better performance
import Image from 'next/image'
// icons for our services and navigation
import {
    Bars3Icon,
    TruckIcon,
    CubeIcon,
    ShieldCheckIcon,
    ScaleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

// list of our main service offerings that show up in mobile menu
const solutions = [
    {
        name: 'Custom Packaging',
        description: 'Tailored packaging solutions designed for your specific products.',
        href: '#',
        icon: CubeIcon,
    },
    {
        name: 'Bulk Orders',
        description: 'Cost-effective packaging solutions for large volume orders.',
        href: '#',
        icon: ScaleIcon,
    },
    {
        name: 'Fast Delivery',
        description: 'Quick turnaround times with reliable shipping nationwide.',
        href: '#',
        icon: TruckIcon,
    },
    {
        name: 'Quality Assurance',
        description: 'Premium materials and rigorous testing ensure product protection.',
        href: '#',
        icon: ShieldCheckIcon,
    },
]
// main navigation links for desktop header
const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
]

// main hero component that contains header and hero section
export default function Hero() {
    return (
        <div className="bg-white">
            <header>
                <Popover className="relative bg-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Epic Packaging Solutions</span>
                                {/* company logo using next.js image for optimization */}
                                <Image
                                    alt="Epic Packaging Solutions"
                                    src="/company-logo.jpg"
                                    width={120}
                                    height={60}
                                    className="h-16 w-auto sm:h-20 md:h-24"
                                    priority // loads immediately since it's above the fold
                                />
                            </a>
                        </div>
                        {/* mobile menu button - only shows on small screens */}
                        <div className="-my-2 -mr-2 md:hidden">
                            <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:ring-inset">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon aria-hidden="true" className="size-6" />
                            </PopoverButton>
                        </div>

                        {/* desktop navigation - hidden on mobile */}
                        <nav className="hidden md:flex md:flex-1 md:justify-center space-x-10">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        {/* contact button - only shows on desktop */}
                        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full border-2 border-blue-600-600 bg-blue-600 px-6 py-2 text-base font-medium text-white hover:bg-blue-700 hover:border-blue-700 transition-colors"
                            >
                                <span className="flex items-center space-x-2">
                                    <span>🇺🇸🇲🇽</span>
                                    <span>Contact Us</span>
                                </span>
                            </a>
                        </div>
                    </div>


                    {/* mobile menu panel - slides down when menu is opened */}
                    <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-100 data-leave:ease-in md:hidden"
                    >
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        {/* smaller logo for mobile menu */}
                                        <Image
                                            alt="Epic Packaging Solutions"
                                            src="/company-logo.jpg"
                                            width={80}
                                            height={40}
                                            className="h-10 w-auto"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-hidden focus:ring-inset">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon aria-hidden="true" className="size-6" />
                                        </PopoverButton>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    {/* mobile menu showing our services with icons */}
                                    <nav className="grid grid-cols-1 gap-7">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                                            >
                                                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white">
                                                    <item.icon aria-hidden="true" className="size-6" />
                                                </div>
                                                <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="px-5 py-6">
                                {/* additional navigation links in mobile menu */}
                                <div className="grid grid-cols-2 gap-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </Popover>
            </header>

            <main>
                <div>
                    {/* main hero section with background image */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                                <div className="absolute inset-0">
                                    {/* hero background image - optimized with next.js */}
                                    <Image
                                        src="/colleagues-safety-equipment-working.jpg"
                                        alt="People working in packaging facility"
                                        fill // fills the entire container
                                        className="object-cover" // keeps aspect ratio, crops if needed
                                        priority // loads immediately since it's the main image
                                        sizes="100vw" // tells browser this image takes full width
                                        quality={85} // good balance of quality vs file size
                                    />
                                    {/* blue overlay to make text more readable */}
                                    <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" />
                                </div>
                                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                                    {/* main headline - gets bigger on larger screens */}
                                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Epic Packaging</span>
                                        <span className="block text-indigo-200">Solutions</span>
                                    </h1>
                                    {/* description text - responsive width */}
                                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        Professional packaging solutions for businesses of all sizes. From custom boxes to protective materials,
                                        we deliver quality packaging that protects your products and enhances your brand.
                                    </p>
                                    {/* call to action buttons - stack on mobile, side by side on desktop */}
                                    <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                        <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-xs hover:bg-indigo-50 sm:px-8"
                                            >
                                                Get started
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-blue-500/60 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-blue-500/70 sm:px-8"
                                            >
                                                Live demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
               
                        </div>
                  
                </div>
            </main>
        </div>
    )
}
