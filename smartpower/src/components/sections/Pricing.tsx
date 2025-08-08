import { CheckCircle } from "lucide-react"

export default function Pricing() {
    return(
        <div>
            <div>
      <h1 className='text-5xl font-bold text-center mt-40'> Simple, Transparent</h1>
      <h1 className='text-5xl font-bold text-center text-green-400'>Pricing</h1>
      <p className='text-center text-gray-400 mt-4'>Choose the perfect plan for your energy monitoring needs. All plans include our <br /> mobile app and 24/7 support.</p>
    </div>
    <div>
      <div className='flex flex-wrap justify-center gap-10 mt-10'>
        <div className='border p-4 rounded-lg shadow-md text-center border-gray-600 h-100 w-80 hover:border-sky-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300 ease-in-out cursor-pointer'>
          <h2 className='text-xl font-bold'>Basic Plan</h2>
          <p className='text-white mt-4 text-2xl font-bold'>$39</p>
          <p className=' text-xs text-gray-500'>per month</p>
        <div className='flex items-center gap-2 mt-8'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Up to 5 smart devices</span>
        </div>
         <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Real-Time Monitoring</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Basic Analytics</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Mobile App Access</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Email Support</span>
        </div>
        <button className=' text-white px-4 py-2 border-1 w-50  border-gray-600 rounded-lg mt-6 hover:bg-sky-600 transition-all duration-300 ease-in-out'>Start Free Trial</button>
        </div>

        {/* Pro Plan Card */}
        <div className='border p-4 rounded-lg shadow-md text-center border-gray-600 h-100 w-80 hover:border-green-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 ease-in-out cursor-pointer relative'>
          {/* Most Popular Badge */}
          <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold'>
            Most Popular
          </div>
          <h2 className='text-xl font-bold mt-2'>Pro Plan</h2>
          <p className='text-white mt-4 text-2xl font-bold'>$79</p>
          <p className=' text-xs text-gray-500'>per month</p>
        <div className='flex items-center gap-2 mt-8'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Up to 20 smart devices</span>
        </div>
         <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Advanced Analytics</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Energy Optimization AI</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Priority Support</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Custom Reports</span>
        </div>
        <button className=' text-white px-4 py-2 border border-gray-600 w-50 rounded-lg mt-6 hover:bg-green-600 transition-all duration-300 ease-in-out'>Choose Pro</button>
        </div>

        {/* Enterprise Plan Card */}
        <div className='border p-4 rounded-lg shadow-md text-center border-gray-600 h-100 w-80 hover:border-purple-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 ease-in-out cursor-pointer'>
          <h2 className='text-xl font-bold'>Enterprise Plan</h2>
          <p className='text-white mt-4 text-2xl font-bold'>$149</p>
          <p className=' text-xs text-gray-500'>per month</p>
        <div className='flex items-center gap-2 mt-8'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Unlimited devices</span>
        </div>
         <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>White-label solution</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>API Access</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Dedicated Support</span>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <CheckCircle className="w-4 h-4 text-green-400 mt-1 ml-2" />
          <span className='text-white text-s'>Custom Integration</span>
        </div>
        <button className=' text-white px-4 py-2 border border-gray-600 w-50 rounded-lg mt-6 hover:bg-purple-600 transition-all duration-300 ease-in-out'>Contact Sales</button>
        </div>
      </div>
              <p className='text-center text-gray-400 text-xs mt-8'> No Setup Fees | Cancel Anytime</p>
    </div>
        </div>
    )
}