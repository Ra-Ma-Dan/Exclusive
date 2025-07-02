import usmanu1 from '../assets/images/usmanu1.jpg'
import usmanu2 from '../assets/images/usmanu2.png'

function About() {
  return (
    <div className='p-20'>
      <h3 className='text-6xl my-2'>-About us</h3>
      <h1 className='text-8xl my-3 font-extrabold'>--Exclusive Hub--</h1>

      <div>
        <h1 className='text-center text-2xl font-bold'>Our Story</h1>
        <p className='text-xl'>At Exclusive, we believe shopping should be more than just a transaction — it should be an experience. Founded in <em>2025</em>, our journey began with a simple idea: to bring carefully curated, high-quality products to people who appreciate craftsmanship and value.</p>
        <p className='text-xl'>We started with a small team and a big dream — to create a brand that puts customers first, offers products you can trust, and makes a positive impact in the community. Every item in our collection is chosen with care, ensuring it meets our high standards and brings joy to your life.</p>
        <div className='m-5 p-5 rounded-4xl bg-gray-100'><img className='w-full rounded-4xl' src={ usmanu1 } alt="Team Image" /></div>
      </div>
      <div>
        <h1 className='text-center text-2xl font-bold'>What Makes us Different</h1>
        <ul className='list-disc flex flex-col gap-5 text-xl my-2'>
          <li><strong>Quality You Can Trust </strong>— We work directly with trusted suppliers to guarantee premium products.</li>
          <li><strong>Customer-Centric Approach </strong>— Your satisfaction is our priority, and we’re always here to help.</li>
          <li><strong>Sustainability Commitment </strong>— We strive to reduce our environmental footprint through eco-friendly packaging and practices.</li>
          <li><strong>Authenticity and Transparency </strong>— No gimmicks, no shortcuts — just honest products and service.</li>
        </ul>
      </div>

      <div>
        <h1 className='text-center text-4xl mb-5 mt-25 font-bold'>Meet the TEAM</h1>
        <p className='text-lg'>Behind every great brand is a passionate team. From sourcing to shipping, our dedicated professionals work hard to bring you the best.</p>
        <div><img src={ usmanu2 } alt="" /></div>
      </div>
      
      <div>
        <h2>What our customers Say</h2>
      </div>

      <div>
        <h1>Ready to Explore</h1>
        <p>Discover our full collection and find your new favorite today!</p>
        <button>Shop Now!!!</button>
      </div>

      <div>
        <h1>Contact us</h1>
        <p>Questions? We’d love to hear from you! Reach out anytime at 
          <a href="">Our Email</a>
          or follow us on 
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">IG</a> and
          <a href="#">TikTok</a>.
          </p>
      </div>
    </div> 
  )
}

export default About
