import { Zap, TrendingDown, Activity, Cog, Shield, BarChart } from 'lucide-react';

export default function HowitWorks() {
    return (
        <div className="bg-[#111827]">
            <section id="features" className="how-it-works-section">
                <div className="text-center px-4 sm:px-6 lg:px-10 py-10 mt-35">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Everything You Need to</h1>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400">Optimize Energy</h1>
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
                        Monitor, analyze, and optimize your home's energy consumption with our intelligent IoT platform. 
                        Save money while reducing your environmental footprint.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 pb-10">
                {/* Real-Time Monitoring Card */}
                <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-sky-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300 ease-in-out cursor-pointer">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-sky-400 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ease-in-out group-hover:scale-110">
                        <Zap className="w-8 h-8 text-white transition-transform duration-300 ease-in-out" fill="currentColor" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                        Real-Time Monitoring
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Track your energy consumption in real-time with precision sensors and IoT technology.
                    </p>
                </div>

                {/* Cost Reduction Card */}
                <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-green-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 ease-in-out cursor-pointer">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ease-in-out group-hover:scale-110">
                        <TrendingDown className="w-8 h-8 text-white transition-transform duration-300 ease-in-out" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                        Cost Reduction
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Reduce your energy bills by up to 30% with intelligent usage analytics and recommendations.
                    </p>
                </div>

                {/* Remote Control Card */}
                <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 ease-in-out cursor-pointer">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ease-in-out group-hover:scale-110">
                        <Activity className="w-8 h-8 text-white transition-transform duration-300 ease-in-out" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                        Remote Control
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Control all your smart devices from anywhere using our intuitive mobile-friendly dashboard.
                    </p>
                </div>

                {/* Smart Alerts Card */}
                <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-pursple-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 ease-out cursor-pointer">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-purple-400 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ease-out group-hover:scale-110">
                        <Shield className="w-8 h-8 text-white transition-transform duration-500 ease-out" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                        Smart Alerts
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Get instant notifications about unusual consumption patterns or device malfunctions.
                    </p>
                </div>

                {/* Advanced Analytics Card */}
                <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-green-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500 ease-out cursor-pointer">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ease-out group-hover:scale-110">
                        <BarChart className="w-8 h-8 text-white transition-transform duration-500 ease-out" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                        Advanced Analytics
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Detailed insights and forecasting to optimize your energy usage patterns.
                    </p>
                </div>

                {/* Easy Setup Card */}
                <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500 ease-out cursor-pointer">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ease-out group-hover:scale-110">
                        <Cog className="w-8 h-8 text-white transition-transform duration-500 ease-out" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                        Easy Setup
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Plug-and-play installation with automatic device discovery and configuration.
                    </p>
                </div>
            </div>
        </div>
    );
}