document.addEventListener('DOMContentLoaded', function() {
 
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) {
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    const downloadCVBtn = document.getElementById('downloadCV');
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const cvContent = `
                KAIWALA SAMBANGO
                BUSINESS ADMINISTRATOR
                
                CONTACT INFORMATION
                Phone: +260 770 857 111 | +260 763 008 778
                Email: sambangokaiwala@gmail.com
                Address: COLIN B GLASSCO MINESTONE AREA
                Date Of Birth: 22.08.2001
                
                PROFESSIONAL SUMMARY
                I have a comprehensive understanding, respect and humility to fellow workmates and friends. I am a hardworking and self-motivated individual whenever needed always ready and open to learn and exceeds expectations on tasks given.
                
                WORK EXPERIENCE
                2023- Present: SCHOOL SALES PERSONNEL(UNIFORM DEPARTEMENT)
                COLIN B Glassco primary school (Fransalian Education Mission).
                
                2021-2023: AIRCRAFT LOADER AND OFFICE ORDERLY
                ZEGA LTD loadcontrol department K.K International Airport.
                Aircraft handling such as choking the aircraft, coning, offloading cargo, loading cargo, loading passenger bags, assisting passengers whenever help is needed specifically EMIRATES AIRLINES.
                Office orderly preparing Aircraft documents such as Notoc, fuel forms, CPMs, LDMs, seat plan and loading information.
                
                2020-2021: GENERAL WORKER
                St. Gabriel Parish Meanwood Ndeke
                Assisting FR at the parish by making sure all the work given is performed.
                
                SKILLS
                • GOOD COMMUNICATION SKILLS
                • PROBLEM SOLVING SKILLS
                • CONFLICT RESOLUTION SKILLS
                • SELF-AWARENESS
                • TIME MANAGEMENT SKILLS
                • CRITICAL THINKER
                • POSITIVE SKILLS
                
                EDUCATION
                2023-Present: BUSINESS ADMINISTRATION
                DMI St. Eugene university
                
                2021: AIRPORT CERTIFICATE
                Kenneth Kaunda international airport online.
                
                2017-2019: SCHOOL CERTIFICATE
                Ndeke Secondary School
                
                2015-2016: GRADE NINE CERTIFICATE
                Twatasha Primary School
                
                REFERENCES
                MR HENRY BWALYA
                General Manager | Operations Zega Limited
                T: +260 966 881 239
                
                FR JUDE THADDEUS
                Director Colin | Glassco Primary School
                T: +260 979 139 203
                
                FR PRINCE
                Director Colin | Parish Priest St Gabriel Parish Meanwood Ndeke
                T: +260 979 139 203
            `;
            
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Kaiwala_Sambango_CV.txt';
            document.body.appendChild(a);
            a.click();
            
            setTimeout(() => {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);
            
            alert('CV download started! For a formatted PDF version, please contact me directly.');
        });
    }
    
    const viewCVBtn = document.getElementById('viewCV');
    if (viewCVBtn) {
        viewCVBtn.addEventListener('click', function(e) {
            e.preventDefault();
            

            const cvContent = document.getElementById('cvContent');
            if (cvContent) {
                cvContent.innerHTML = `
                    <h3 style="color: var(--secondary-color); text-align: center; margin-bottom: 20px;">KAIWALA SAMBANGO</h3>
                    <p style="text-align: center; font-size: 1.2rem; margin-bottom: 30px;">Business Administrator</p>
                    
                    <div style="margin-bottom: 30px;">
                        <h4 style="color: var(--primary-color); border-bottom: 2px solid #eee; padding-bottom: 5px;">CONTACT INFORMATION</h4>
                        <p><strong>Phone:</strong> +260 770 857 111 | +260 763 008 778</p>
                        <p><strong>WhatsApp:</strong> +260 770 875 111</p>
                        <p><strong>Email:</strong> sambangokaiwala@gmail.com</p>
                        <p><strong>Address:</strong> COLIN B GLASSCO MINESTONE AREA</p>
                        <p><strong>Date of Birth:</strong> 22.08.2001</p>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <h4 style="color: var(--primary-color); border-bottom: 2px solid #eee; padding-bottom: 5px;">PROFESSIONAL SUMMARY</h4>
                        <p>I have a comprehensive understanding, respect and humility to fellow workmates and friends. I am a hardworking and self-motivated individual whenever needed always ready and open to learn and exceeds expectations on tasks given.</p>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <h4 style="color: var(--primary-color); border-bottom: 2px solid #eee; padding-bottom: 5px;">WORK EXPERIENCE</h4>
                        
                        <div style="margin-bottom: 20px;">
                            <h5 style="color: var(--secondary-color);">2023-Present: SCHOOL SALES PERSONNEL (UNIFORM DEPARTMENT)</h5>
                            <p><strong>COLIN B Glassco Primary School (Fransalian Education Mission)</strong></p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h5 style="color: var(--secondary-color);">2021-2023: AIRCRAFT LOADER AND OFFICE ORDERLY</h5>
                            <p><strong>ZEGA LTD Load Control Department, K.K International Airport</strong></p>
                            <ul>
                                <li>Aircraft handling such as choking the aircraft, coning, offloading cargo, loading cargo</li>
                                <li>Loading passenger bags, assisting passengers whenever help is needed specifically for EMIRATES AIRLINES</li>
                                <li>Office orderly preparing Aircraft documents such as Notoc, fuel forms, CPMs, LDMs, seat plan and loading information</li>
                            </ul>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h5 style="color: var(--secondary-color);">2020-2021: GENERAL WORKER</h5>
                            <p><strong>St. Gabriel Parish Meanwood Ndeke</strong></p>
                            <p>Assisting FR at the parish by making sure all the work given is performed.</p>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <h4 style="color: var(--primary-color); border-bottom: 2px solid #eee; padding-bottom: 5px;">SKILLS</h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
                            <div style="background: #f5f7fa; padding: 10px; border-radius: 5px;">Good Communication Skills</div>
                            <div style="background: #f5f7fa; padding: 10px; border-radius: 5px;">Problem Solving Skills</div>
                            <div style="background: #f5f7fa; padding: 10px; border-radius: 5px;">Conflict Resolution Skills</div>
                            <div style="background: #f5f7fa; padding: 10px; border-radius: 5px;">Self-Awareness</div>
                            <div style="background: #f5f7fa; padding: 10px; border-radius: 5px;">Time Management Skills</div>
                            <div style="background: #f5f7fa; padding: 10px; border-radius: 5px;">Critical Thinker</div>
                            <div style="background: #f5f7fa; padding: 10px; border-radius: 5px;">Positive Skills</div>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <h4 style="color: var(--primary-color); border-bottom: 2px solid #eee; padding-bottom: 5px;">EDUCATION</h4>
                        
                        <div style="margin-bottom: 15px;">
                            <h5 style="color: var(--secondary-color);">2023-2026: BUSINESS ADMINISTRATION</h5>
                            <p>DMI St. Eugene University</p>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <h5 style="color: var(--secondary-color);">2021: AIRPORT CERTIFICATE</h5>
                            <p>Kenneth Kaunda International Airport (Online)</p>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <h5 style="color: var(--secondary-color);">2017-2019: SCHOOL CERTIFICATE</h5>
                            <p>Ndeke Secondary School</p>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <h5 style="color: var(--secondary-color);">2015-2016: GRADE NINE CERTIFICATE</h5>
                            <p>Twatasha Primary School</p>
                        </div>
                    </div>
                    
                    <div>
                        <h4 style="color: var(--primary-color); border-bottom: 2px solid #eee; padding-bottom: 5px;">REFERENCES</h4>
                        
                        <div style="margin-bottom: 15px;">
                            <p><strong>MR HENRY BWALYA</strong></p>
                            <p>General Manager | Operations Zega Limited</p>
                            <p>Phone: +260 966 881 239</p>
                        </div>
                        
                        <div style="margin-bottom: 15px;">
                            <p><strong>FR JUDE THADDEUS</strong></p>
                            <p>Director Colin | Glassco Primary School</p>
                            <p>Phone: +260 979 139 203</p>
                        </div>
                        
                        <div>
                            <p><strong>FR PRINCE</strong></p>
                            <p>Director Colin | Parish Priest St Gabriel Parish Meanwood Ndeke</p>
                            <p>Phone: +260 979 139 203</p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <p>For a printable PDF version of this CV, please use the download button or contact me directly.</p>
                        <button id="printCV" style="background: var(--secondary-color); color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">Print CV</button>
                    </div>
                `;
                
                const printBtn = document.getElementById('printCV');
                if (printBtn) {
                    printBtn.addEventListener('click', function() {
                        window.print();
                    });
                }
            }
            
            const cvModal = document.getElementById('cvModal');
            if (cvModal) {
                cvModal.style.display = 'flex';
            }
        });
    }
    
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            const cvModal = document.getElementById('cvModal');
            if (cvModal) {
                cvModal.style.display = 'none';
            }
        });
    }
    
   
    const cvModal = document.getElementById('cvModal');
    if (cvModal) {
        cvModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }
});