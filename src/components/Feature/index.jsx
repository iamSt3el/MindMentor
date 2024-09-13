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
                    description="Transform your notes into comprehensive tests with AI-powered analysis. Our advanced algorithms analyze your study materials to create relevant and challenging questions, helping you reinforce your learning and identify areas for improvement."
                />
                <FeatureCard 
                    icon={Youtube}
                    title="Video Learning"
                    description="Create tests from YouTube videos to reinforce your understanding of visual content. Simply provide a video URL, and our system will generate quizzes based on the video's content, allowing you to test your comprehension of lectures, tutorials, and educational content."
                />
                <FeatureCard 
                    icon={BarChart2}
                    title="Performance Tracking"
                    description="Monitor your progress with detailed analytics and personalized insights. Our performance tracking feature provides in-depth analysis of your test results, learning patterns, and improvement over time, helping you optimize your study strategies and achieve your educational goals."
                />
            </div>
        </section>
    );
};

export default FeatureSection;