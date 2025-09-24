export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Contact Me
            </h2>

            <form className="space-y-6">
                <div>
                    <label htmlFor="name" id="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                    <input type="text" name="name" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" />
                </div>

                <div>
                    <label htmlFor="email" id="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" name="email" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" />
                </div>

                <div>
                    <label htmlFor="subject" id="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                    <input type="text" name="subject" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" />
                </div>

                <div>
                    <label htmlFor="message" id="message" className="block text-sm font-medium text-gray-300">Message</label>
                    <textarea name="message" id="message" className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100" />
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                    Send Message
                </button>
            </form>
        </div>
    );
};