import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import S1 from '../../assets/images/designers/sannah/S1.jpg'
import S2 from '../../assets/images/designers/sannah/S2.jpg'
import S3 from '../../assets/images/designers/sannah/S3.jpg'
import S4 from '../../assets/images/designers/sannah/S4.jpg'
import S5 from '../../assets/images/designers/sannah/S5.jpg'

const images = [S1, S2, S3, S4, S5]

const DesignerInterview = () => {
  return (
    <div>
    <Header/>
    <div className="bg-white min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          An Interview Session with <span className="text-red-500">Sannah Fashion Hub</span>
        </h1>

        {/* Hero Section Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[S1, S2, S3, S4].map((src, i) => (
            <div
            key={i}
            // className="relative group overflow-hidden rounded-2xl bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')] bg-cover p-1 shadow-md hover:shadow-xl transition duration-500"
            className="relative group overflow-hidden rounded-2xl bg-white bg-cover p-1 shadow-md hover:shadow-xl transition duration-500"
            >
            <img
                src={src}
                alt="Sannah fashion"
                className="rounded-xl h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
        ))}
        </div>


        {/* Interview Content */}
        <div className="space-y-8 leading-relaxed text-gray-800">
          <div>
            <h2 className="font-semibold text-xl mb-2">1. Could you share the vision and story behind the founding of your fashion brand?</h2>
            <p className="mb-2">
                <strong><i>Sannah Fashion Hub</i></strong>           started with a simple idea — to redefine how men express style through modern, well-tailored outfits. What began as a small collection of bespoke male designs quickly grew as we saw the need to create elegant, confident pieces for women as well. Today, our focus extends beyond crafting beautiful clothes; we’re building a brand that represents creativity, quality, and versatility. The vision is to grow Sannah Fashion Hub into an internationally recognised fashion brand that celebrates individuality and sophistication across borders.</p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">2. What sets your brand apart from others in the fashion industry?</h2>
            <p className="mb-2">What makes Sannah Fashion Hub stand out is our blend of creativity, cultural inspiration, and attention to detail. We don’t just design clothes we design experiences that make people feel seen and confident. <br />
            Each piece is thoughtfully crafted to balance style, comfort, and meaning. Our designs often draw from rich cultural influences, giving them a unique touch that’s both timeless and modern. We also take pride in using quality fabrics and ethical production practices, ensuring every piece looks good and feels good to wear. <br />
            Beyond fashion, Sannah Fashion Hub is about community. We connect with our customers, listen to their stories, and celebrate individuality through style. That personal connection and authenticity are at the heart of everything we do and that’s what truly sets us apart.
        </p>
            <img
                src={images[2]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
          </div>
          
          <div>
            <h2 className="font-semibold text-xl mb-2">3. What significant challenges have you faced in growing and sustaining your brand, and how have you overcome them?</h2>
            <p className="mb-2">Like many growing brands, Sannah Fashion Hub has faced its fair share of challenges from managing production costs to building visibility in a competitive market. One of the biggest hurdles was finding reliable suppliers who understood our standards for quality and consistency. We overcame this by building long-term relationships with trusted partners and focusing on sustainable sourcing. <br />
            Another challenge was standing out in an industry where trends change so quickly. Instead of chasing every new wave, we chose to stay true to our identity creating timeless designs with a modern edge. That focus on authenticity has helped us build a loyal community that values our story and style. <br />
            There were also times when balancing creativity with the business side felt tough. But every challenge became a lesson in growth. By staying adaptable, listening to feedback, and keeping our mission clear, we’ve continued to move forward stronger and more confident in our vision.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">4. Can you discuss the creative process behind the design of your collections?</h2>
            <p className="mb-2">At Sannah Fashion Hub, every collection begins with a story. We draw inspiration from culture, emotion, and everyday beauty blending creativity with purpose. Our design process is both intuitive and intentional, from the first sketch to the final stitch. <br />
            For example, “Fusion Elegance” was born out of a desire to merge tradition with modern sophistication. We combined the fluidity of crepe fabrics with the vibrant energy of Ankara prints, creating pieces that celebrate both heritage and refinement. Each fabric was chosen not just for its look, but for how it feels on the skin soft, breathable, and expressive. <br />

            Then came “Shorts and Sweet Classics” and “Chic and Chill”, two collections that captured the spirit of effortless style. They were designed for those who appreciate comfort without compromising elegance — pieces you can wear from a casual brunch to an evening outing and still feel confident and stylish. <br/>
            Our most reflective work, The Essence Collection, was a personal journey. It began with the question, “What defines essence?” Drawing from Nigerian roots and global influences, the collection explored textures and silhouettes that evoke both strength and softness. Every piece was created with meaning  a celebration of identity, confidence, and self-expression. <br />
            In every collection, our goal remains the same: to tell stories through fabric, to make fashion feel personal, and to craft designs that move with you beautifully and confidently.
            </p>          
            <div>
            <h2 className="font-semibold text-xl mb-2">
                5. How does your brand cater to diverse body types and sizes?</h2>
            <p className="mb-2">At Sannah Fashion Hub, we believe style has no size limit. From the beginning, our goal has been to design clothes that make every person feel confident and seen. Fashion should celebrate individuality not fit everyone into the same mould. <br/>
            We create pieces with thoughtful tailoring and flexible designs that complement different body shapes. Our collections often include adjustable features, relaxed fits, and fabrics that move comfortably with the body. Beyond that, we listen to our customers their feedback helps us refine our sizing and ensure every piece flatters naturally. <br />
            Inclusivity isn’t just about offering a wider size range; it’s about making everyone feel they belong in fashion. At Sannah Fashion Hub, every collection is designed with that belief at its core because confidence looks good on everyone.
            </p>
            <img
                src={images[4]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
          </div>
          <br/>
          <br/>
          <div className="mb-2">
            <h2 className="font-semibold text-xl mb-2">6.	Can you discuss any collaborations or partnerships your brand has engaged in and their impact?</h2>
            <p>Collaboration has always been an important part of Sannah Fashion Hub’s growth and creative journey. Partnering with other brands and event organisers allows us to share our story with new audiences while learning from other creative voices in the industry. <br/>
            One of our memorable experiences was showcasing our collection at the Bristol Fashion Show in the United Kingdom. It was an incredible opportunity to present our designs to a diverse audience and connect with other talented designers. The feedback and exposure we received strengthened our commitment to creating fashion that bridges cultures and celebrates individuality. <br/>
            We also participated in the Unity Threads Couture Runway and Pop-up Show in Birmingham a vibrant platform that brought together emerging and established brands. That event not only boosted our visibility but also reinforced the power of collaboration in promoting creativity, diversity, and community within fashion. <br/>
            These experiences have shaped how we see growth not just in sales or reach, but in meaningful connections. Every partnership reminds us that fashion thrives on collaboration, and we look forward to more opportunities to create and inspire together.
            </p>
          </div>
          
          <div className="mb-2">
            <h2 className="font-semibold text-xl mb-2">7. What is your brand’s approach to incorporating trends while maintaining a timeless appeal?</h2>
            <p>At Sannah Fashion Hub, we view trends as inspiration, not direction. Fashion evolves quickly, but our goal has always been to create pieces that outlive a season. We pay attention to what’s current colours, cuts, and cultural influences but we interpret them in a way that aligns with our brand’s identity and craftsmanship. <br/>
            Our design philosophy focuses on versatility and longevity. We ask, “Will this still feel beautiful and relevant years from now?” before finalising any piece. By blending modern touches with classic silhouettes, we ensure our collections feel fresh yet timeless. <br/>
            Collections like Fusion Elegance and The Essence Collection are perfect examples they draw from contemporary trends but remain rooted in authenticity and cultural expression. This balance allows our customers to stay stylish while investing in pieces that continue to feel special, season after season.
          </p>
          </div>

          
          <div>
            <h2 className="font-semibold text-xl mb-2">8. How does your brand stay relevant in an ever-changing industry and market?</h2>
            <p className="mb-2"> Fashion moves fast, but at Sannah Fashion Hub, we stay relevant by staying true to who we are while always being open to growth and innovation. We keep a close eye on changing trends, customer preferences, and cultural shifts, but we never lose sight of our core values: creativity, quality, and authenticity. <br/>
            Listening to our customers plays a big part. Their feedback guides our designs, influences fabric choices, and even inspires new collections. We also stay engaged through fashion shows, pop-up events, and collaborations, which help us connect with new audiences and keep our designs fresh and current. <br/>
            Beyond that, we embrace digital storytelling from social media to online showcases to reach fashion lovers wherever they are. This blend of adaptability, cultural awareness, and community connection keeps Sannah Fashion Hub evolving while remaining true to its essence.
            </p>

          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">9. What are the key values and principles that guide your brand’s business decisions?</h2>
            <p className="mb-2">At Sannah Fashion Hub, our business decisions are rooted in a few simple but powerful values authenticity, creativity, quality, and inclusivity. These principles shape everything we do, from design to production to how we engage with our customers. <br/>
            Authenticity drives us to stay true to our vision and cultural roots. Every piece we create reflects our story and purpose, not just trends. <br />
            Creativity keeps us evolving. We believe fashion is an art form, and each collection is an opportunity to express ideas that inspire confidence and individuality. <br/>
            Quality is non-negotiable. We focus on craftsmanship, fabric selection, and attention to detail to ensure that our customers receive pieces they can wear and cherish for years. <br/>
            Inclusivity reminds us that fashion is for everyone. We design with real people in mind, celebrating different body types, backgrounds, and personalities. <br/>
            These values guide every decision we make. Whether it’s choosing a supplier, planning a collection, or engaging in collaborations, we make sure it aligns with what Sannah Fashion Hub stands for style with meaning and purpose.
            </p>            
            <img
                src={images[4]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
          </div>          

          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">10. How do you navigate the balance between maintaining brand identity and adapting to evolving consumer preferences?</h2>
            <p className="mb-2">At Sannah Fashion Hub, we see fashion as a conversation between creativity and the people we design for. Staying true to our brand identity while adapting to evolving consumer tastes is about balance knowing when to evolve and when to stay grounded in what makes us unique. <br/>

            Our identity is built on elegance, cultural expression, and confidence. Those elements never change. What does change is how we express them. We keep an open mind, paying attention to what our customers are drawn to whether it’s new silhouettes, fabric choices, or lifestyle trends and then interpret those ideas in a way that fits our signature style. <br/>
            This approach allows us to grow with our audience without losing authenticity. We believe evolution doesn’t mean abandoning your roots; it means letting your story unfold in new ways. That’s how Sannah Fashion Hub continues to stay relevant, relatable, and true to its essence.
        </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">11. Can you share the strategies your brand employs to connect with and engage its target audience?</h2>
            <p className="mb-2">At Sannah Fashion Hub, we believe that meaningful connection goes beyond selling clothes it’s about building a community that shares our passion for style, culture, and self-expression. <br/>
            We stay connected to our audience through consistent storytelling. On our social media platforms, we share the creative journey behind each collection, style inspiration, and real-life stories from our customers. This transparency helps people feel personally involved in what we do. <br/>
            Engagement is also built through interaction. We love hearing from our followers their feedback influences our designs and helps us understand what truly resonates with them. Whether it’s through polls, giveaways, or styling challenges, we make sure our customers feel seen and valued. <br/>
            Offline, we take every opportunity to meet our community face-to-face through pop-up shops, fashion events, and runway showcases. These moments allow people to experience our brand beyond the screen to see, touch, and connect with our designs in person. <br/>
            At its core, Sannah Fashion Hub’s engagement strategy is about authenticity. We don’t just want an audience; we want a relationship one that grows through shared creativity, confidence, and connection.
          </p>
            <img
                src={images[0]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />

          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">12. How does your brand approach pricing to ensure both accessibility and quality?</h2>
            <p className="mb-2">
            At Sannah Fashion Hub, our pricing philosophy is simple make quality fashion accessible without compromising on craftsmanship. We understand that style should be inclusive, not exclusive, so we carefully structure our prices to reflect both the value of our work and the realities of our customers.
            We start by investing in high-quality fabrics and skilled tailoring to ensure every piece meets our standards of comfort, durability, and elegance. At the same time, we streamline production and work directly with trusted suppliers to keep costs fair. This allows us to offer designs that feel premium yet remain within reach for our customers.
            We also believe transparency builds trust. Our customers know that when they buy from Sannah Fashion Hub, they’re not just paying for a product they’re supporting thoughtful design, ethical production, and a brand that genuinely values them.
            Our goal is to make fashion that looks refined, feels good to wear, and is priced with honesty and intention
        </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">13. How do you see your brand evolving in the next 5-10 years?</h2>
            <p className="mb-2">
            Over the next 5 to 10 years, we see Sannah Fashion Hub growing into a truly international brand with a strong presence in Nigeria, the United Kingdom and beyond. Our vision is to expand our reach while staying rooted in the creativity and cultural richness that define our designs. <br/>
            We aim to establish a physical base for the brand in the UK a space that not only showcases our collections but also serves as a hub for collaboration, innovation, and community. Alongside this, one of our biggest dreams is to set up a fashion school that nurtures emerging designers and creatives. The goal is to create a space where passion meets purpose empowering people to develop their skills, understand the business of fashion, and express their individuality through design. <br/>
            As we grow, we want Sannah Fashion Hub to stand for more than just beautiful clothes. We want it to represent opportunity, creativity, and confidence inspiring the next generation of designers and fashion lovers to dream boldly and create fearlessly.
        </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">14. Can you discuss any unique or signature elements that consistently appear in your designs?</h2>
            <p className="mb-2">
            Culture is the heartbeat of Sannah Fashion Hub. Every collection we create carries a touch of heritage a reflection of where we come from and what we stand for. Our designs consistently weave together cultural expression and contemporary style, creating pieces that feel both rooted and modern. <br/>
            You’ll often find vibrant prints, bold patterns, and fabric combinations that tell stories of African identity and creativity. Whether it’s the use of Ankara, handpicked textures, or traditional detailing, we reinterpret cultural elements in ways that fit today’s fashion landscape. <br/>
            Beyond the fabrics, our designs celebrate confidence, colour, and character. Each piece is made to honour individuality while paying tribute to the richness of culture that inspires it. That fusion of tradition and modernity has become our signature and it’s what makes every Sannah Fashion Hub piece instantly recognizable.
        </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">15. Could you talk about any technological innovations your brand has embraced in its operations and product development?</h2>
            <p className="mb-2">
            At Sannah Fashion Hub, we embrace technology as a tool to enhance creativity and efficiency. One of the ways we’ve innovated is through the use of Adobe 3D Illustration in our design process. This allows us to visualise our collections digitally before creating physical samples, saving time and resources while experimenting with different fabrics, textures, and silhouettes.
            By leveraging 3D illustration, we can explore bold combinations and intricate designs with precision, ensuring that every piece meets our aesthetic and quality standards. It also enables us to communicate ideas more effectively with our team and collaborators, making the transition from concept to finished garment smoother and more accurate.
            Technology helps us push creative boundaries while maintaining the craftsmanship and authenticity that define Sannah Fashion Hub. It’s a perfect example of how innovation and tradition can coexist in modern fashion.
        </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">16. What are some defining moments in your brand’s history that have shaped its identity and trajectory?</h2>
            <p className="mb-2">
            Sannah Fashion Hub’s journey has been shaped by several key moments that defined our identity and set the course for growth. One of the earliest milestones was the launch of our first collection, which received overwhelming positive feedback for its blend of modern style and cultural influence. It validated our vision and set the tone for the type of fashion we wanted to create. <br/>

            Participating in the Bristol Fashion Show was another pivotal moment. Showcasing our designs on an international stage allowed us to reach a broader audience and connect with other talented designers, reinforcing the importance of collaboration and community in our growth. Similarly, the Unity Threads Couture Runway and Pop-up Show in Birmingham helped us establish a strong presence in the UK fashion scene and cemented our reputation for originality and quality. <br/>
            Finally, the creation of The Essence Collection was a turning point in how we approached storytelling through fashion. This collection reflected a deep exploration of identity and culture, helping define Sannah Fashion Hub as a brand that celebrates individuality, confidence, and authenticity. <br/>
            Each of these moments has contributed to shaping not just our brand, but our philosophy that fashion is more than clothing; it’s a way to express culture, creativity, and confidence.
            </p>
            <img
                src={images[3]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />

          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">17. Can you share any upcoming projects or endeavors your brand is particularly excited about?</h2>
            <p className="mb-2">We have several exciting projects in the pipeline that reflect our growth and creative vision. One of the most anticipated is the expansion of Sannah Fashion Hub into the United Kingdom, where we plan to establish a physical presence to showcase our collections and connect more directly with our international audience. <br/>
            We’re also thrilled about plans for a fashion school, designed to nurture emerging designers and creatives. This initiative will provide hands-on training, mentorship, and insight into the business of fashion, helping aspiring designers bring their own visions to life while promoting innovation and cultural expression. <br/>
            On the design front, we’re exploring new collections that continue to blend tradition with modern elegance, incorporating fresh fabrics, textures, and creative storytelling. These upcoming projects reflect our commitment to growth, creativity, and building a community around fashion that inspires confidence and individuality.
        </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="italic text-gray-500">
            “Fashion is more than clothing — it’s confidence, creativity, and culture.”
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default DesignerInterview;
