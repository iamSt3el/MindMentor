import React from 'react';
import { FileText, Youtube, BarChart2 } from 'lucide-react';
import styles from './feature.module.scss';

const FeatureCard = ({ icon: Icon, title, description, action }) => (
    <div className={styles.featureCard}>
        <Icon size={48} className={styles.icon} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className={styles.actionButton}>{action}</button>
    </div>
);

const FeatureSection = () => {
    return (
        <section className={styles.featureSection}>
            <h2>Create Tests From</h2>
            <div className={styles.featureCards}>
                <FeatureCard 
                    icon={FileText}
                    title="Notes"
                    description="Upload your notes and generate a custom test"
                    action="Create Test"
                />
                <FeatureCard 
                    icon={Youtube}
                    title="YouTube"
                    description="Provide a YouTube URL to create a test"
                    action="Create Test"
                />
                <FeatureCard 
                    icon={BarChart2}
                    title="Performance"
                    description="View your test results and progress"
                    action="View Performance"
                />
            </div>
        </section>
    );
};

export default FeatureSection;