import React, { useState } from 'react';
import '../../../styles/ServiceList.css';

function ServiceList() {

    const [activeSection, setActiveSection] = useState(null);
    const toggleAccordion = (section) => {
        setActiveSection(activeSection === section ? null : section)
    }
    return (
        <div className='ServiceList'>
            <div className="container">
                <h2 data-aos="fade" data-aos-duration="1000">Out Patient (OP) Procedures</h2>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(1)}>

                        <img src="img/services/waxremoval.jpeg" className='dp-img' alt="" /><p>Wax removal</p><span className="icon">{activeSection === 1 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 1 ? 'active' : ''}`}>
                        <img src="img/services/waxremoval.jpeg" alt="wax removal" />
                        <p>
                            <span>Wax removal</span>, also known as cerumen management, involves the safe and effective removal of excess earwax (cerumen) from the ear canal. This procedure is performed to alleviate symptoms such as ear fullness, hearing loss, earache, or tinnitus caused by impacted wax. Methods of wax removal may include suction, or manual removal using specialized tools under the guidance of a medical professional. It's essential to seek professional assistance for wax removal to avoid injury to the ear canal and eardrum.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(2)}>

                        <img src="img/services/microsuction_ear_wax_removal_sm.jpg" className='dp-img' alt="Suction clearance" /><p>Suction clearance</p><span className="icon">{activeSection === 2 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 2 ? 'active' : ''}`}>
                        <img src="img/services/microsuction_ear_wax_removal_sm.jpg" alt="Suction clearance" />
                        <p>

                            <span>Suction clearance</span> is a method used by medical professionals to remove excess earwax or other debris from the ear canal using a specialized suction device. This procedure is typically performed in cases where manual removal or irrigation may not be suitable, such as when the wax is particularly hard or impacted. Suction clearance is a gentle and effective way to clear the ear canal without causing discomfort or injury to the ear.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(3)}>

                        <img src="img/services/foreign-body.gif" className='dp-img' alt="Foreign body removal in the ear, nose, or throat" /><p>Foreign body removal ear ,nose, throat</p><span className="icon">{activeSection === 3 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 3 ? 'active' : ''}`}>
                        <img src="img/services/foreign-body.gif" alt="Foreign body removal in the ear, nose, or throat" />
                        <p>
                            <span>Foreign body removal in the ear, nose, or throat</span> involves safely extracting objects or substances that have become lodged in these areas. This procedure is crucial to prevent complications such as infection, pain, or damage to surrounding tissues. Depending on the location and nature of the foreign body, removal techniques may include using specialized instruments and suction devices. It's essential to seek prompt medical attention for foreign body removal to minimize the risk of complications and ensure proper treatment.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(4)}>

                        <img src="img/services/dignostic-nasal.jpeg" className='dp-img' alt="Suction clearance" /><p>Diagnostic nasal endoscopy</p><span className="icon">{activeSection === 4 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 4 ? 'active' : ''}`}>
                        <img src="img/services/dignostic-nasal.jpeg" alt="Diagnostic nasal endoscopy" />
                        <p>
                            <span>Diagnostic nasal endoscopy</span> is a procedure performed by an ear, nose, and throat (ENT) specialist to examine the nasal passages and sinuses using a thin, flexible tube with a camera attached (endoscope). During the procedure, the endoscope is gently inserted into the nostril and advanced into the nasal cavity, allowing the physician to visualize the nasal structures in detail. This enables the doctor to assess for abnormalities such as inflammation, polyps, tumors, or structural defects. Diagnostic nasal endoscopy is a valuable tool for accurately diagnosing conditions affecting the nasal and sinus passages, guiding treatment decisions, and monitoring response to therapy. It is typically performed in the office setting and is well-tolerated by most patients with minimal discomfort.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(5)}>

                        <img src="img/services/videolarynagoscopy.jpg" className='dp-img' alt="Videolaryngoscopy" /><p>Videolaryngoscopy</p><span className="icon">{activeSection === 5 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 5 ? 'active' : ''}`}>
                        <img src="img/services/videolarynagoscopy.jpg" alt="Videolaryngoscopy" />
                        <p>
                            <span>Videolaryngoscopy</span> is a medical procedure used to examine the larynx (voice box) and the structures of the throat using a flexible or rigid endoscope with a small camera attached. The procedure provides a magnified and detailed view of the larynx and surrounding tissues, allowing the healthcare provider to assess for abnormalities such as vocal cord lesions, polyps, nodules, tumors, or other conditions affecting voice production and swallowing function. Videolaryngoscopy is typically performed in an office or clinical setting and may be used for diagnostic purposes, treatment planning, or monitoring the progression of certain conditions. It is a safe and well-tolerated procedure that can provide valuable information for the management of various throat-related disorders.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(6)}>

                        <img src="img/services/Otoendoscopy.jpg" className='dp-img' alt="Otoendoscopy" /><p>Otoendoscopy</p><span className="icon">{activeSection === 6 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 6 ? 'active' : ''}`}>
                        <p>
                            <span>Otoendoscopy</span> is a medical procedure used to examine the ear canal and the tympanic membrane (eardrum) using an otoscope equipped with a tiny camera or a fiberoptic endoscope. It allows healthcare providers, particularly ear, nose, and throat (ENT) specialists, to visualize the structures of the ear in detail, including the ear canal, tympanic membrane, and middle ear cavity. Otoendoscopy can help diagnose conditions such as ear infections, earwax buildup, perforations of the eardrum, and abnormalities of the middle ear. This procedure is typically performed in an office or clinical setting and is quick, non-invasive, and well-tolerated by most patients. It provides valuable information for the accurate diagnosis and treatment of various ear-related disorders.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(7)}>

                        <img src="img/services/keloid.webp" className='dp-img' alt="Intralesional injections for keloids" /><p>Intralesional injections for keloids</p><span className="icon">{activeSection === 7 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 7 ? 'active' : ''}`}>
                        <img src="img/services/keloid.webp" alt="keloids" />
                        <p><span>Intralesional injections for keloids</span> involve injecting corticosteroids directly into the keloid scar tissue to reduce its size and symptoms. This treatment helps to soften and flatten the keloid by suppressing inflammation and decreasing collagen production. It is performed in the ENT OPD as a treatment for keloids in the ear post piercing.</p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(8)}>

                        <img src="img/services/Ear-Lobe-Repair.jpg" className='dp-img' alt="Ear lobule repair" /><p>Ear lobule repair</p><span className="icon">{activeSection === 8 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 8 ? 'active' : ''}`}>
                        <img src="img/services/Ear-Lobe-Repair.jpg" alt="Ear-Lobe-Repair" />
                        <p>
                            <span>Ear lobule repair</span> is a surgical procedure to restore the appearance and integrity of the earlobe, commonly performed to fix stretched or torn earlobes. During the procedure, damaged tissue is removed and the earlobe is carefully sutured back together. It is typically performed under local anesthesia as an outpatient procedure with a relatively short recovery time.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(9)}>

                        <img src="img/services/EarPiercing.jpg" className='dp-img' alt="EarPiercing" /><p>Ear piercing including new born</p><span className="icon">{activeSection === 9 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 9 ? 'active' : ''}`}>
                        <img src="img/services/EarPiercing.jpg" alt="EarPiercing" />
                        <p>

                            Ear piercing, including for newborns, is a procedure we perform at our OP. Our experienced team utilizes specialized, sterilized equipment and earrings to ensure a hygienic process. We create a small hole in the earlobe or cartilage for inserting earrings, emphasizing proper hygiene and aftercare to prevent infection.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(10)}>

                        <img src="img/services/septum.jpg" className='dp-img' alt="septum" /><p>Other piercings included septum and nose.</p><span className="icon">{activeSection === 10 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 10 ? 'active' : ''}`}>
                        <p>
                            Piercings like septum and nose piercings involve creating a hole in the septum or nostril area for jewelry insertion, a procedure we perform at our OP. Our trained professionals use sterile needle piercing or gun piercing in a clean and controlled environment. Emphasizing proper aftercare is crucial to prevent infection and promote healing.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(11)}>

                        <img src="img/services/fnac.png" className='dp-img' alt="septum" /><p>Fine Needle Aspiration Cytology (FNAC)</p><span className="icon">{activeSection === 11 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 11 ? 'active' : ''}`}>
                        <p>
                            Fine Needle Aspiration Cytology (FNAC) is a minimally invasive diagnostic procedure used to obtain cells from a suspicious lump or mass for examination under a microscope. During the procedure, a thin needle is inserted into the lump, and a small sample of cells is aspirated. These cells are then smeared onto a slide, stained, and examined by a pathologist to determine if the lump is benign (non-cancerous) or malignant (cancerous). FNAC is commonly used to diagnose tumors in various parts of the body, including the breast, thyroid, lymph nodes, and organs such as the liver and pancreas. It is a quick and relatively low-risk procedure that can provide valuable information for treatment planning.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(12)}>

                        <img src="img/services/vertigo.webp" className='dp-img' alt="vertigo" /><p>Procedures for vertigo</p><span className="icon">{activeSection === 12 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 12 ? 'active' : ''}`}>
                        <p>
                            Procedures for vertigo aim to diagnose and treat the underlying cause of this sensation of dizziness or spinning.  Treatment procedures vary depending on the cause of vertigo and may include canalith repositioning maneuvers like the Epley maneuver for benign paroxysmal positional vertigo (BPPV), medication management, vestibular rehabilitation therapy, or surgical interventions in rare cases. The choice of procedure depends on the specific diagnosis and individual patient factors, with the goal of reducing or eliminating vertigo symptoms and improving quality of life.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(13)}>

                        <img src="img/services/biopsy.jpeg" className='dp-img' alt="biopsy" /><p>Biopsies from head and neck areas.</p><span className="icon">{activeSection === 13 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 13 ? 'active' : ''}`}>
                        <p>
                            Biopsies from the head and neck areas involve the collection of tissue samples from abnormal growths or suspicious lesions in these regions for further examination under a microscope. These biopsies are typically performed using local anesthesia to minimize discomfort, and the tissue samples are obtained through various techniques, including fine needle aspiration (FNA), punch biopsy, or excisional biopsy. The collected tissue is then sent to a pathology laboratory for analysis to determine the presence of any abnormal or cancerous cells. Biopsies from head and neck areas are essential for diagnosing conditions such as skin cancers, oral cancers, lymphomas, and other abnormalities, allowing for appropriate treatment planning and management.
                        </p>
                    </div>
                </div>

                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(22)}>

                        <img src="img/services/tongue-tie.jpg" className='dp-img' alt="Surgeries for OSAS" /><p>Tounge Tie Release</p><span className="icon">{activeSection === 22 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 22 ? 'active' : ''}`}>
                        <p>
                            Tongue-tie release, also known as frenotomy or frenectomy, is a minor surgical procedure performed to correct a condition called ankyloglossia, where the lingual frenulum (the tissue connecting the tongue to the floor of the mouth) is abnormally tight or short. During the procedure, the surgeon cuts or releases the frenulum to improve the range of motion and mobility of the tongue. Tongue-tie release can help alleviate symptoms such as difficulty breastfeeding, speech problems, or limited tongue movement. It is typically a quick and straightforward procedure performed in the office setting, often with minimal anesthesia required.
                        </p>
                    </div>
                </div>
                <h2 className='Surgical-h2' data-aos="fade" data-aos-duration="1000">Surgical Procedures</h2>

                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(14)}>

                        <img src="img/services/adenoidectomy-illustration-c9ca65.jpg" className='dp-img' alt="Adenoidectomy" /><p>Adenoidectomy</p><span className="icon">{activeSection === 14 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 14 ? 'active' : ''}`}>
                        <img src="img/services/adenoidectomy-illustration-c9ca65.jpg" alt="Adenoidectomy" />
                        <p>
                            Adenoidectomy is a surgical procedure to remove the adenoids, which are small glands located at the back of the throat, behind the nose. This procedure is commonly performed to alleviate symptoms associated with enlarged or infected adenoids, such as chronic nasal congestion, breathing difficulties, snoring, recurrent ear infections, and sleep apnea. Adenoidectomy is typically performed under general anesthesia, and the surgeon accesses the adenoids through the mouth, using specialized instruments to remove them. Recovery from adenoidectomy is usually quick, with most patients able to resume normal activities within a week. This procedure is often performed in conjunction with tonsillectomy, especially in children, to address both adenoid and tonsil-related issues simultaneously.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(15)}>

                        <img src="img/services/tonsill.jpg" className='dp-img' alt="Adenotonsillectomy" /><p>Adenotonsillectomy</p><span className="icon">{activeSection === 15 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 15 ? 'active' : ''}`}>
                        <img src="img/services/tonsill.jpg" alt="" />
                        <p>
                            <span>Adenotonsillectomy</span> is a surgical procedure involving the removal of both the adenoids and the tonsils. It is commonly performed to alleviate symptoms associated with enlarged or infected adenoids and tonsils, such as chronic nasal congestion, difficulty breathing, snoring, recurrent ear infections, sore throat, and sleep apnea. Adenotonsillectomy is often recommended for children who experience frequent or severe symptoms that do not respond to other treatments, such as antibiotics or steroid medications. The procedure is typically performed under general anesthesia, and recovery may involve several days of rest and pain management. Adenotonsillectomy can significantly improve quality of life for individuals suffering from adenoid and tonsil-related issues.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(16)}>

                        <img src="img/services/Septoplasty.jpeg" className='dp-img' alt="Adenotonsillectomy" /><p>Septoplasty</p><span className="icon">{activeSection === 16 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 16 ? 'active' : ''}`}>
                        <img src="img/services/Septoplasty.jpeg" alt="" />
                        <p>

                            <span>Septoplasty</span> is a surgical procedure performed to correct a deviated septum, which is a condition where the nasal septum (the wall of tissue dividing the nasal passages) is crooked or displaced. This can lead to symptoms such as nasal congestion, difficulty breathing through the nose, recurrent sinus infections, snoring, and sleep apnea. During septoplasty, the surgeon accesses the septum through the nostrils and straightens or repositions the deviated portion of the septum. This can improve airflow through the nasal passages, alleviate symptoms, and may also improve the effectiveness of treatments for conditions such as allergies or sinusitis. Septoplasty is typically performed under general anesthesia, and recovery may involve several days of rest and avoidance of strenuous activities.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(17)}>

                        <img src="img/services/FESS-Figure-1a-1.jpg" className='dp-img' alt="FESS" /><p>Functional Endoscopic Sinus Surgery (FESS)</p><span className="icon">{activeSection === 17 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 17 ? 'active' : ''}`}>
                        <p>
                            Functional Endoscopic Sinus Surgery (FESS) is a minimally invasive surgical procedure performed to treat chronic sinusitis and other sinus-related conditions. During FESS, an endoscope is inserted into the nasal passages to provide a detailed view of the sinus openings and surrounding structures. Using specialized instruments, the surgeon removes obstructive tissue, such as polyps or inflamed mucosa, and enlarges the natural drainage pathways of the sinuses to improve ventilation and drainage. FESS is typically performed under general anesthesia on an outpatient basis, and most patients experience significant relief from symptoms such as nasal congestion, facial pain, and headaches following the procedure. Recovery from FESS may involve a few days of nasal congestion, mild discomfort, and nasal irrigation to promote healing. Overall, FESS can effectively restore sinus function and improve the quality of life for individuals suffering from chronic sinusitis.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(18)}>

                        <img src="img/services/Tympanoplasty.jpeg" className='dp-img' alt="FESS" /><p>Tympanoplasty</p><span className="icon">{activeSection === 18 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 18 ? 'active' : ''}`}>
                        <p>
                            <span>Tympanoplasty</span> is a surgical procedure performed to repair a perforated eardrum (tympanic membrane) or to reconstruct the middle ear structures in cases of hearing loss or chronic ear infections. During tympanoplasty, the surgeon accesses the middle ear through the ear canal or an incision behind the ear and repairs the perforation using a graft taken from the patient's own tissue. The procedure may also involve rebuilding the ossicles (small bones in the middle ear) if they are damaged or destroyed. Tympanoplasty is typically performed under general anesthesia and may require an overnight hospital stay. Recovery time varies depending on the extent of the surgery but generally involves avoiding water in the ear and taking precautions to prevent infection while the ear heals. Tympanoplasty can improve hearing, reduce the risk of recurrent ear infections, and restore the normal function of the middle ear.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(19)}>

                        <img src="img/services/Mastoidectomy.png" className='dp-img' alt="FESS" /><p>Mastoidectomy</p><span className="icon">{activeSection === 19 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 19 ? 'active' : ''}`}>
                        <img src="img/services/Mastoidectomy.png" alt="Mastoidectomy" />
                        <p>

                            <span>Mastoidectomy</span> is a surgical procedure performed to remove infected or damaged tissue from the mastoid bone, which is located behind the ear. This procedure is commonly indicated for individuals with chronic or recurrent middle ear infections (chronic otitis media) that have spread to the mastoid bone or caused the formation of a mastoid abscess. During mastoidectomy, the surgeon creates an incision behind the ear, removes the infected tissue, and may also reconstruct the middle ear structures if necessary. Mastoidectomy is typically performed under general anesthesia and may require a hospital stay, depending on the extent of the surgery and the patient's condition. Recovery from mastoidectomy can vary, but most patients experience relief from symptoms such as ear pain, drainage, and hearing loss following the procedure. It is essential to follow post-operative instructions carefully to promote healing and reduce the risk of complications.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(20)}>

                        <img src="img/services/Head and neck surgeries.jpeg" className='dp-img' alt="FESS" /><p>Head and neck surgeries</p><span className="icon">{activeSection === 20 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 20 ? 'active' : ''}`}>
                        <p>
                            Head and neck surgeries encompass a wide range of procedures aimed at treating conditions affecting the structures in this anatomical region. These surgeries may involve the removal of tumors, reconstruction of facial or neck structures, treatment of infections, correction of deformities, or management of conditions such as obstructive sleep apnea. Common head and neck surgeries include thyroidectomy (removal of the thyroid gland), parotidectomy (removal of the parotid gland), neck dissection (removal of lymph nodes in the neck), facial reconstructive surgery, and procedures to address disorders of the jaw or salivary glands. These surgeries are often performed by otolaryngologists (ear, nose, and throat specialists) or head and neck surgeons and may require collaboration with other specialists such as oncologists, plastic surgeons, or neurosurgeons, depending on the specific condition being treated. Recovery from head and neck surgeries can vary widely depending on the nature of the procedure and the individual patient's health status, but most surgeries aim to improve function, alleviate symptoms, and enhance the patient's quality of life.
                        </p>
                    </div>
                </div>
                <div className="accordion-section" data-aos="fade-up" data-aos-duration="1000">
                    <button className="accordion" onClick={() => toggleAccordion(21)}>

                        <img src="img/services/Surgeries for OSAS.jpeg" className='dp-img' alt="Surgeries for OSAS" /><p>Surgeries for OSAS</p><span className="icon">{activeSection === 21 ? (<i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-plus"></i>)}</span>

                    </button>

                    <div className={`panel ${activeSection == 21 ? 'active' : ''}`}>
                        <p>
                            Surgical treatments for Obstructive Sleep Apnea Syndrome (OSAS) aim to address upper airway obstructions during sleep. Common procedures include Uvulopalatopharyngoplasty (UPPP), tonsillectomy/adenoidectomy, septoplasty/turbinate reduction, genioglossus advancement, maxillomandibular advancement (MMA), and Inspire Therapy. These surgeries aim to widen the airway, remove obstructions, or reposition tissues to improve airflow and alleviate symptoms of OSAS.


                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceList