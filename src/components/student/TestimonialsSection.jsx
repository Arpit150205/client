import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-32 bg-gray-50">

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Testimonials
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-lg">
          Hear from our learners as they share their journeys of transformation and success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="flex items-center gap-4 p-6 border-b">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="h-4"
                    src={
                      i < Math.floor(testimonial.rating)
                        ? assets.star
                        : assets.star_blank
                    }
                    alt="star"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.feedback}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default TestimonialsSection