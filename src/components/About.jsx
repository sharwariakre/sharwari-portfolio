// src/components/About.jsx
export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center scroll-mt-20 px-8 py-16"
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-[#b5542b]">About Me</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    I’m <span className="font-semibold">Sharwari Akre</span>, a Software Developer who enjoys building scalable and user-focused applications.
                    I work across the full stack from frontend interfaces to backend APIs with a strong interest in
                    <span className="text-[#b5542b] font-medium"> cloud infrastructure, DevOps, and clean design systems</span>.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    I’m currently pursuing my <span className="font-medium">Master’s in Computer Science</span> at
                    <span className="font-medium"> North Carolina State University</span>, where I focus on
                    <span className="font-medium"> software engineering</span>,
                    <span className="font-medium"> data analysis</span>, and
                    <span className="font-medium"> cloud computing</span>.
                    I’m passionate about building <span className="font-medium"> scalable systems</span> and creating
                    <span className="font-medium"> data driven solutions</span> that connect technology with
                    <span className="font-medium"> real world impact</span>.
                    My goal is to bring together <span className="font-medium"> engineering</span> and
                    <span className="font-medium"> creativity</span> to design systems that make everyday life simpler and smarter.
                </p>



                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-gray-700">
                    <div>
                        <p className="font-semibold text-[#b5542b]">Location</p>
                        <p>Raleigh, NC, USA</p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#b5542b]">Education</p>
                        <p>MS in Computer Science, NC State University</p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#b5542b]">Interests</p>
                        <p>Software Development, Backend, Full Stack Development, Data Analysis and Data Engineering</p>
                    </div>
                    <div>
                        <p className="font-semibold text-[#b5542b]">Email</p>
                        <a href="mailto:sharwari.akre@gmail.com" className="hover:underline text-[#b5542b]">
                            sharwari.akre@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
