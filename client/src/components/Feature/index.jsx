import React from 'react';
import { FileText, Youtube, BarChart2 } from 'lucide-react';
import styles from './feature.module.scss';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className={styles.featureCard}>
        <div className={styles.iconWrapper}>
            <Icon size={24} className={styles.icon} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const FeatureSection = () => {
    return (
        <section className={styles.featureSection}>
            <h2 className={styles.sectionTitle}>Core Features of MindMentor</h2>
            <div className={styles.featureCards}>
                <FeatureCard
                    icon={FileText}
                    title="Notes to Tests"
                    description="Convert your notes into tests using AI-driven analysis to help reinforce learning and identify areas for improvement."
                />
                <FeatureCard
                    icon={Youtube}
                    title="Video Learning"
                    description="Generate quizzes from YouTube videos. Provide a video URL, and we'll create questions to test your comprehension."
                />
                <FeatureCard
                    icon={BarChart2}
                    title="Performance Tracking"
                    description="Track your progress with analytics and personalized insights, helping you optimize your study and reach your goals."
                />

            </div>
        </section>
    );
};

export default FeatureSection;