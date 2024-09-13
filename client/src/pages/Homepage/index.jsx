import React, { useState } from 'react';
import { FileText, Youtube, BookOpen, Brain, BarChart2, Map, Plus, Search, Bell, User, LogOut } from 'lucide-react';
import styles from './homepage.module.scss';

const SourceCard = ({ icon: Icon, title, description, onClick, gradient }) => (
  <div className={`${styles.sourceCard} ${styles[gradient]}`} onClick={onClick}>
    <Icon className={styles.sourceCardicon} />
    <h3 className={styles.sourceCardtitle}>{title}</h3>
    <p className={styles.sourceCarddescription}>{description}</p>
  </div>
);

const MainPage = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleSourceClick = (source) => {
    console.log(`Clicked on ${source}`);
    // Here you would typically open a modal or navigate to a page to import content
  };

  const gradients = [
    'gradientPurple',
    'gradientRed',
    'gradientGreen',
    'gradientYellow',
  ];

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headercontent}`}>
          <h1 className={styles.logo}><a href='/'>Mind Mentor</a></h1>
          <div className={styles.headeractions}>
            <div className={styles.searchInput}>
            </div>
            <button className={`${styles.btn} ${styles.btnprimary}`}>
              <LogOut className={styles.btn__icon} /> Logout
            </button>
            <div className={styles.notifications}>
              <Bell 
                className={styles.notificationsicon}
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              />
              {isNotificationOpen && (
                <div className={styles.notificationsdropdown}>
                  <p className={styles.notificationsitem}>New test generated from your YouTube video</p>
                  <p className={styles.notificationsitem}>Performance report ready for "Machine Learning Basics"</p>
                </div>
              )}
            </div>
            <User className={styles.userIcon} />
          </div>
        </div>
      </header>

      <main className={`${styles.mainContent} ${styles.container}`}>
        <section className={styles.generateTests}>
          <h2 className={styles.sectionTitle}>Generate Tests From</h2>
          <div className={styles.sourceCards}>
            <SourceCard 
              icon={Youtube} 
              title="YouTube Videos" 
              description="Extract knowledge and create tests from educational videos"
              onClick={() => handleSourceClick('YouTube')} 
              gradient={gradients[0]} 
            />
            <SourceCard 
              icon={BookOpen} 
              title="Books & PDFs" 
              description="Generate comprehensive tests from your reading materials"
              onClick={() => handleSourceClick('Books')} 
              gradient={gradients[1]} 
            />
            <SourceCard 
              icon={FileText} 
              title="Notes & Documents" 
              description="Transform your notes into effective test questions"
              onClick={() => handleSourceClick('Notes')} 
              gradient={gradients[2]} 
            />
            <SourceCard 
              icon={Brain} 
              title="AI-Generated" 
              description="Create tests on any topic using our AI engine"
              onClick={() => handleSourceClick('AI')} 
              gradient={gradients[3]} 
            />
          </div>
        </section>

        <section className={styles.dashboard}>
          <div className={`${styles.dashboardSection} ${styles.recentTests}`}>
            <h3 className={styles.dashboardSectiontitle}>Recent Tests</h3>
            <ul className={styles.recentTestslist}>
              <li className={styles.recentTestsitem}>
                <div className={styles.recentTestsinfo}>
                  <Youtube className={styles.recentTestsicon} />
                  <span className={styles.recentTeststitle}>"Introduction to Neural Networks" Test</span>
                </div>
                <span className={styles.recentTestscount}>20 questions</span>
              </li>
              <li className={styles.recentTestsitem}>
                <div className={styles.recentTestsinfo}>
                  <BookOpen className={styles.recentTestsicon} />
                  <span className={styles.recentTeststitle}>"Python Programming Basics" Quiz</span>
                </div>
                <span className={styles.recentTests__count}>15 questions</span>
              </li>
              <li className={styles.recentTestsitem}>
                <div className={styles.recentTestsinfo}>
                  <Brain className={styles.recentTestsicon} />
                  <span className={styles.recentTeststitle}>"Data Structures" AI-Generated Test</span>
                </div>
                <span className={styles.recentTestscount}>25 questions</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.dashboardSection} ${styles.progressSection}`}>
            <h3 className={styles.dashboardSectiontitle}>Your Progress</h3>
            <div className={styles.progressSectionitem}>
              <div className={styles.progressSectionlabel}>
                <span>Tests Completed</span>
                <span>12/15</span>
              </div>
              <div className={styles.progressSectionbar}>
                <div className={styles.progressSectionfill} style={{width: '80%'}}></div>
              </div>
            </div>
            <div className={styles.progressSectionitem}>
              <div className={styles.progressSectionlabel}>
                <span>Average Score</span>
                <span>85%</span>
              </div>
              <div className={styles.progressSectionbar}>
                <div className={styles.progressSectionfill} style={{width: '85%'}}></div>
              </div>
            </div>
            <button className={`${styles.btn} ${styles.btnprimary} ${styles.btnfullWidth}`}>View Detailed Report</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;