import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import Service1 from '../assets/service1.webp';
import Service2 from '../assets/service2.webp';
import Service3 from '../assets/service3.webp';
import Service4 from '../assets/service4.webp';

export default function Services() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "43b2e980-a84a-4a2e-a698-ee0e0bbb02cb");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.target.reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="cozy-wrapper">
      <div className='cozy-stage'>
        <div>
          <div className="cozy-header">
            <h3>SERVICES</h3>
            <span className="cozy-subtitle">
              What I can build for you.
            </span>
          </div>
          <div className='cozy-service-grid'>
            <div className='services-card'>
              <img className='service-img' src={Service1} />
              <h5>Website design and development</h5>
              <span></span>
            </div>
            <div className='services-card'>
              <img className='service-img' src={Service2} />
              <h5>Landing Pages</h5>
            </div>
            <div className='services-card'>
              <img className='service-img' src={Service3} />
              <h5>Interactive Web</h5></div>
            <div className='services-card'>
              <img className='service-img' src={Service4} />
              <h5>Redesigns</h5></div>
          </div>
          <div className='cozy-header'>
            <h3>HOW IT WORKS</h3>
            <div className='service-process'>
              <h5>Talk</h5>
              <h5>→</h5>
              <h5>Plan</h5>
              <h5>→</h5>
              <h5>Design</h5>
              <h5>→</h5>
              <h5>Build</h5>
              <h5>→</h5>
              <h5>Launch</h5>
            </div>
            
          </div>
        </div>

        <div className='submit-form'>
          <div className='cozy-header'>
            <h3>LEAVE A NOTE ON MY DESK</h3>
          </div>
          <form onSubmit={onSubmit}>
            <label>Your Name<input type="text" name="name" placeholder='What should I call you?' required /></label>
            <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
            <label>What are you looking for?
              <select name="service" required>
                <option value="">Select a service</option>
                <option value="Website Design & Development">Website Design & Development</option>
                <option value="Landing Page">Landing Page</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Interactive Website">Interactive Website</option>
                <option value="Website Redesign">Website Redesign</option>
                <option value="Something else">Something else</option>
              </select>
            </label>
            <label>Tell me a little about your idea<textarea name="message" rows="5" required /></label>
            <button type="submit">Send inquiry →</button>
          </form>
          {result && (
            <div className="inquiry-overlay">
              <div className="inquiry-dialog">
                {result === "success" ? (
                  <>
                    <h3>Note Delivered!</h3>
                    <span>
                      Thanks for reaching out. Your inquiry has landed on my desk.
                      I'll get back to you soon!
                    </span>
                    <button onClick={() => setResult("")}>
                      Back to my desk →
                    </button>
                  </>
                ) : (
                  <>
                    <h3>Oops! Something went wrong.</h3>
                    <span>
                      Your message couldn't be sent. Please try again or email me
                      directly.
                    </span>
                    <button onClick={() => setResult("")}>
                      Try again
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
