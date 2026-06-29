import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    AI for Content Creation
                </Heading>
                <p className="hero__subtitle">
                    Go from prompting fundamentals to publishing live content —
                    a five-module, end-to-end course on using AI to create,
                    visualize, and ship content.
                </p>
            </div>
        </header>
    );
}

const courseModules = [
    {
        number: 1,
        title: 'Foundations & Prompt Engineering',
        tagline: 'Learning to speak to AI so it creates content for you',
        topics: [
            'AI Foundations',
            'Chain-of-thought prompting',
            'Role prompting',
            'Tone control',
            'Structured output & prompt chaining',
        ],
        tools: [],
        isToday: false,
    },
    {
        number: 2,
        title: 'TCREI Framework Mastery',
        tagline: 'Build strong prompts',
        topics: [],
        tools: ['Claude', 'ChatGPT'],
        isToday: true,
    },
    {
        number: 3,
        title: 'Research, Data Visualization & Presentation',
        tagline: 'Turning research and data into publishable written content',
        topics: [],
        tools: ['Perplexity', 'NotebookLM', 'Claude', 'Gamma'],
        isToday: false,
    },
    {
        number: 4,
        title: 'Visual & Multimedia Content',
        tagline: 'Creating images, decks, and video that support your content',
        topics: [],
        tools: [
            'Microsoft Designer',
            'Adobe Firefly',
            'Canva AI',
            'Gamma',
            'Claude',
            'CapCut',
            'Descript',
        ],
        isToday: false,
    },
    {
        number: 5,
        title: 'Publishing & Distribution',
        tagline: 'Getting your content live — on GitHub and LinkedIn',
        topics: [
            'MDX Documentation',
            'Blog Writing',
            'GitHub',
            'GitHub Pages',
            'LinkedIn',
        ],
        tools: [],
        isToday: false,
    },
];

export default function Home() {
    return (
        <Layout
            title="Course Outline"
            description="Course outline for the AI for Content Creation series">

            <HomepageHeader />

            <main className="container margin-vert--lg">

                <Heading as="h2">Course Outline</Heading>

                <p>
                    This day sits within a five-module course on using{' '}
                    <strong>AI for content creation</strong>, end to end —
                    from prompting fundamentals to publishing live content.
                </p>

                <table>
                    <thead>
                    <tr>
                        <th>Module</th>
                        <th>Focus</th>
                        <th>Topics & Tools</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courseModules.map(({ number, title, tagline, topics, tools, isToday }) => (
                        <tr key={number}>
                            <td>
                                <strong>
                                    {number}. {title}
                                </strong>
                                {isToday && (
                                    <>
                                        {' '}
                                        <em>(Today)</em>
                                    </>
                                )}
                            </td>
                            <td>
                                <em>{tagline}</em>
                            </td>
                            <td>
                                {topics.length > 0 && (
                                    <div>
                                        {topics.map((t, i) => (
                                            <span key={i}>
                                                {t}
                                                {i < topics.length - 1 && ', '}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {tools.length > 0 && (
                                    <div>
                                        <strong>Tools:</strong>{' '}
                                        {tools.map((tool, i) => (
                                            <span key={i}>
                                                <code>{tool}</code>
                                                {i < tools.length - 1 && ' · '}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <hr />

                <Heading as="h2">Today's Module</Heading>

                <p>
                    Today is <strong>Module 2: TCREI Framework Mastery</strong>,
                    focused on building strong prompts using{' '}
                    <code>Claude</code> and <code>ChatGPT</code>.
                </p>

                <Heading as="h2">Getting Started</Heading>

                <p>
                    Check the WhatsApp group for the link to begin today's
                    classwork.
                </p>

                <blockquote>
                    <p>
                        Part of the <strong>AI for Content Creation</strong>{' '}
                        course series.
                    </p>
                </blockquote>

            </main>
        </Layout>
    );
}