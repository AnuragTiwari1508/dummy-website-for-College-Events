import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img src="/iet-davv-logo.png" alt="IET DAVV Logo" className="h-12" />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              E-SUMMIT 2025 welcomes all the enthusiasts who believe that it's all about making the right choices and
              taking the plunge.
            </p>
            <p className="text-cyan-400 font-semibold mb-4">
              LET'S INNOVATE, LET'S TRANSFORM, LET'S break the monotony.
            </p>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact For Events</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm">Event Organizer</p>
                <p className="text-white">+91 9876543210</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Student Coordinator</p>
                <p className="text-white">+91 9876543211</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email :</p>
                <p className="text-cyan-400">esummit@ietdavv.edu.in</p>
              </div>
            </div>
          </div>

          {/* Phone Numbers and Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Phone :</h3>
            <div className="space-y-2 mb-6">
              <p className="text-white">Coordinator : +91 9876543212</p>
              <p className="text-white">Technical Head : +91 9876543213</p>
              <p className="text-white">Marketing Head : +91 9876543214</p>
            </div>

            <div>
              <p className="text-white font-semibold mb-4">Follow us:</p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">© 2025 E-Summit IET DAVV. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
