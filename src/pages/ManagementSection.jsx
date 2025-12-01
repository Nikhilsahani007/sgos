const managementData = [
  {
    name: "Mr. K Indra Reddy",
    role: "Chairman",
    qualification: "B.Sc, B.Ed",
  },
  {
    name: "Mrs. K Naga Laxmi",
    role: "Vice Chairperson",
    qualification: "M.A, B.Ed",
  },
  {
    name: "Mrs. L Shauni Sanghamitra",
    role: "Director",
    qualification: "B.Tech, B.Ed",
  },
];

export default function ManagementSection() {
  return (
   	<section className="management-section">
				<div className="container">
					<h2 className="section-title">Our Management Team</h2>
					<p className="section-intro">Meet the dedicated leaders who guide our schools towards excellence</p>
					<div className="management-grid">
						<div className="management-card">
							<div className="management-photo">
								<img 
									src="/assets/Chairman.jpg" 
									alt="Chairman"
									onError={(e) => {
										//e.target.src = 'https://via.placeholder.com/500x800?text=Chairman';
									}}
								/>
							</div>
							<div className="management-info">
								<h3>Chairman</h3>
								<p className="management-name">Mr. K. Indra Reddy</p>
								<p className="management-desc">
									With over 45 years of experience in education, our Chairman has been instrumental in 
									establishing Siddhartha Group of Schools as a beacon of excellence. His vision focuses on 
									holistic development and creating leaders of tomorrow across all our branches.
								</p>
							</div>
						</div>

						<div className="management-card">
							<div className="management-photo">
								<img 
									src="/assets/Vice Chairperson.jpg"
									onError={(e) => {
										//e.target.src = 'https://via.placeholder.com/300x300?text=Vice-Chairman';
									}}
								/>
							</div>
							<div className="management-info">
								<h3>Vice-Chairperson</h3>
								<p className="management-name">Mrs. K. Naga Laxmi</p>
								<p className="management-desc">
									Our Vice-Chairperson brings extensive administrative experience and strategic leadership to 
									the group. She plays a key role in expanding our educational network and ensuring consistent 
									quality across all branches while fostering innovation in teaching and learning.
								</p>
							</div>
						</div>

						<div className="management-card">
							<div className="management-photo">
								<img 
									src="/assets/Director.jpg" 
									alt="Director"
									onError={(e) => {
										//e.target.src = 'https://via.placeholder.com/300x300?text=Director';
									}}
								/>
							</div>
							<div className="management-info">
								<h3>Director</h3>
								<p className="management-name">Mr. S. Nagarjuna Reddy</p>
								<p className="management-desc">
									Our Director brings a wealth of academic expertise and innovative teaching methodologies 
									to the schools. With a Ph.D. in Education and years of experience, he ensures our 
									curriculum meets international standards while maintaining cultural values across all branches.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

  );
}